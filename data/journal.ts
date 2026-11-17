export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  issue: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      pullQuote?: string;
    }[];
  };
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "art-01",
    slug: "a-study-in-burgundy",
    title: "A Study in Burgundy: The Psychology of Deep Pigments in Haute Couture",
    subtitle: "How royal burgundy became the signature canvas of silent power and enduring elegance.",
    category: "Chromatics & Philosophy",
    issue: "Édition No. 04",
    readTime: "6 min read",
    date: "Automne 2026",
    image: "/images/journal/study-burgundy.jpg",
    excerpt:
      "Unlike the aggressive immediacy of scarlet or the absolute void of jet black, burgundy commands through resonance. It is the chromatic equivalent of a considered whisper in an echo chamber.",
    content: {
      lead:
        "Color in fashion is frequently wielded as an exclamation point. At ORRÉ, we treat chromatic tone as an architectural material—something that absorbs and returns natural light rather than merely broadcasting wavelength.",
      sections: [
        {
          heading: "The Resonance of the Oxblood Spectrum",
          body: [
            "Burgundy exists at the intersection of vital energy and historical gravity. Derived historically from royal courts, ancient pigments, and fermented grape, it carries a psychological depth that modern artificial dyes rarely reproduce.",
            "When tailored in dense double-faced wool or heavy silk velvet, burgundy shifts as the wearer moves from crisp daylight into incandescent evening environments. It changes mood without changing form.",
          ],
          pullQuote: "Burgundy does not announce itself; it lingers in memory long after leaving the room.",
        },
        {
          heading: "The Counterpoint of Warm Cream",
          body: [
            "A dark pigment requires negative space to be fully understood. Pair burgundy with pure stark white, and it feels clinical, harsh, and confrontational. Pair it with soft warm ivory and champagne beige, and the tension dissolves into warmth and quiet indulgence.",
            "This deliberate pairing forms the foundation of the ORRÉ aesthetic vocabulary—a dialogue between density and breathing room.",
          ],
        },
      ],
    },
  },
  {
    id: "art-02",
    slug: "the-language-of-style",
    title: "The Language of Style: Decoding the Architecture of Modern Tailoring",
    subtitle: "Why the internal construction of a jacket defines the posture of the wearer.",
    category: "Atelier & Construction",
    issue: "Édition No. 03",
    readTime: "8 min read",
    date: "Été 2026",
    image: "/images/journal/style-language.jpg",
    excerpt:
      "The beauty of great tailoring lives entirely in what remains invisible: floating hair canvases, sculpted armholes, and lapel rolls shaped by heat, damp, and human patience.",
    content: {
      lead:
        "We live in an era where garments are too often conceived as two-dimensional photographs intended for brief digital consumption. True haute tailoring belongs strictly to the three-dimensional physics of the human body in motion.",
      sections: [
        {
          heading: "The Anatomy of the Floating Canvas",
          body: [
            "When a garment is glued together with fusible interlining, it is rigid, lifeless, and degrades with each cleaning. A floating canvas—stitched loosely by hand between face cloth and silk lining—conforms gradually over years to the unique contours of the wearer's chest and shoulders.",
            "It breathes. It softens at pressure points while retaining crisp architectural authority at the collar.",
          ],
          pullQuote: "A garment should never restrict; it should elevate every gesture with effortless authority.",
        },
        {
          heading: "The Shoulder as Center of Gravity",
          body: [
            "In every ORRÉ piece, the shoulder seam is placed slightly back, tilting the posture subtly upright without the discomfort of military stiffness. This microscopic angle change transforms how one walks into a room.",
          ],
        },
      ],
    },
  },
  {
    id: "art-03",
    slug: "the-new-silhouette",
    title: "The New Silhouette: Redefining Form Beyond the Ephemeral Cycle",
    subtitle: "A critique of temporary runway micro-trends in favor of monolithic geometry.",
    category: "Design Critique",
    issue: "Édition No. 02",
    readTime: "5 min read",
    date: "Printemps 2026",
    image: "/images/journal/new-silhouette.jpg",
    excerpt:
      "The silhouette is the first thing perceived from fifty paces. Before color, before texture, before branding, the human mind reads contour. What does your contour say?",
    content: {
      lead:
        "Fast-fashion cycles force designers into a frantic chase of novelty for novelty's sake. In contrast, the timeless houses of fashion history spent decades refining a single signature volume until it became indelible.",
      sections: [
        {
          heading: "The Power of Monolithic Proportion",
          body: [
            "By exaggerating collar proportions and dropping the shoulder slightly while keeping the sleeve taper precise, we achieve a look that feels both monumental and intensely intimate.",
            "It is a silhouette inspired by mid-century brutalist architecture—unapologetic forms sculpted from warm, forgiving organic fibers.",
          ],
          pullQuote: "Elegance is the elimination of the accidental.",
        },
      ],
    },
  },
  {
    id: "art-04",
    slug: "the-art-of-simplicity",
    title: "The Art of Simplicity: Why Reduction Is the Ultimate Expression of Luxury",
    subtitle: "Finding opulence not in ornamentation, but in the total mastery of the essential.",
    category: "Philosophy",
    issue: "Édition No. 01",
    readTime: "7 min read",
    date: "Hiver 2025",
    image: "/images/journal/simplicity.jpg",
    excerpt:
      "To add embroidery, logos, and hardware is simple—they cover flaws. To leave a garment unadorned requires every millimetre of fabric, cut, and seam to be without fault.",
    content: {
      lead:
        "Elegance without excess is not minimalism in the ascetic sense. It is the conscious decision that every element on the body must earn its existence through beauty, purpose, or poetic resonance.",
      sections: [
        {
          heading: "The Courage of Restraint",
          body: [
            "When you strip away logos and conspicuous decorative hardware, the viewer's attention focuses entirely on the drape of the wool, the luster of the velvet, and the posture of the person wearing it.",
            "This is quiet opulence. It does not plead for validation. It stands quietly confident, self-contained and undeniably sovereign.",
          ],
          pullQuote: "When everything superfluous is removed, only the profound remains.",
        },
      ],
    },
  },
];
