/**
 * Decorative blue paint splashes fixed on the page edges,
 * reproducing the graphic style of the mockups (pure SVG/CSS).
 */
export default function Splash({ side }: { side: 'left' | 'right' }) {
  return (
    <svg
      className={`splash ${side === 'left' ? 'splash-left' : 'splash-right'}`}
      viewBox="0 0 120 800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sg-${side}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0878f9" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#06264a" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path
        d="M0 60 C 40 40, 70 80, 45 120 C 25 155, 60 190, 35 230 C 15 265, 55 300, 30 340 C 12 372, 50 410, 28 450 C 10 485, 45 520, 22 560 C 5 595, 40 640, 18 690 C 2 730, 30 770, 8 800 L 0 800 Z"
        fill={`url(#sg-${side})`}
        opacity="0.35"
      />
      <path
        d="M0 120 C 30 100, 55 140, 35 175 C 20 205, 50 240, 28 275 C 10 305, 42 345, 22 385 C 8 415, 38 455, 18 495 C 2 528, 32 570, 14 615 C 0 650, 25 700, 6 745 L 0 760 Z"
        fill="#0878f9"
        opacity="0.22"
      />
      <circle cx="52" cy="95" r="4" fill="#0878f9" opacity="0.5" />
      <circle cx="68" cy="250" r="3" fill="#06264a" opacity="0.4" />
      <circle cx="48" cy="420" r="5" fill="#0878f9" opacity="0.35" />
      <circle cx="64" cy="600" r="3" fill="#0878f9" opacity="0.45" />
      <circle cx="40" cy="720" r="4" fill="#06264a" opacity="0.3" />
    </svg>
  )
}
