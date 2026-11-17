"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    return () => {
      // Clean up on unmount
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Master gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        // Fade in gently
        masterGain.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 2.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies for a warm, celestial F minor / Burgundy atmospheric pad:
        // F2 (87.31), C3 (130.81), Ab3 (207.65), C4 (261.63), Eb4 (311.13)
        const freqs = [87.31, 130.81, 207.65, 261.63, 311.13];
        const newOscs: OscillatorNode[] = [];

        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();

          osc.type = idx % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          // Warm low-pass filter
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);

          osc.connect(filter);
          filter.connect(masterGain);
          osc.start();
          newOscs.push(osc);
        });

        oscsRef.current = newOscs;
        setIsPlaying(true);
      } catch (e) {
        console.warn("AudioContext not permitted or supported", e);
      }
    } else {
      // Fade out and close
      if (audioCtxRef.current && gainNodeRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0.0001,
          ctx.currentTime + 1.2
        );
        setTimeout(() => {
          oscsRef.current.forEach((o) => {
            try {
              o.stop();
              o.disconnect();
            } catch {
              // Ignore already stopped
            }
          });
          oscsRef.current = [];
          if (ctx.state !== "closed") {
            ctx.close();
          }
          setIsPlaying(false);
        }, 1250);
      } else {
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      data-cursor="SOUND"
      aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
      className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#D8C7AE]/80 hover:text-[#FAF7F0] transition-colors py-1 px-2.5 rounded-full border border-[#D8C7AE]/20 hover:border-[#D8C7AE]/50"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#B49A70] animate-pulse" />
          <span>Atelier Audio</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#D8C7AE]/60" />
          <span>Ambiance</span>
        </>
      )}
    </button>
  );
}
