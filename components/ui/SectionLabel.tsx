import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number?: string;
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionLabel({
  number,
  label,
  theme = "light",
  className,
}: SectionLabelProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans font-medium",
        isDark ? "text-[#D8C7AE]" : "text-[#541326]",
        className
      )}
    >
      {number && (
        <span
          className={cn(
            "font-editorial italic tracking-normal text-xs md:text-sm",
            isDark ? "text-[#B49A70]" : "text-[#762D42]"
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          "h-[1px] w-6 md:w-8",
          isDark ? "bg-[#B49A70]/60" : "bg-[#541326]/40"
        )}
      />
      <span>{label}</span>
    </div>
  );
}
