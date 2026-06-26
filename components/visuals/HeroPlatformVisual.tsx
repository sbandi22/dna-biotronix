'use client'

const panels = [
  {
    label: 'Personal Monitoring',
    sublabel: 'Wearable · Continuous · Real-time',
    color: '#00AAFF',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" className="w-10 h-10">
        {/* Person silhouette */}
        <circle cx="26" cy="14" r="8" stroke="#00AAFF" strokeWidth="1.6" />
        <path d="M10 42c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#00AAFF" strokeWidth="1.6" strokeLinecap="round" />
        {/* Wearable sensor ring */}
        <circle cx="38" cy="13" r="6" fill="#0066FF" opacity="0.45" />
        <path d="M34 9 L36 13 L40 11 L38 15" stroke="#00DDFF" strokeWidth="1" fill="none" />
        {/* Pulse line */}
        <path d="M14 34 H18 L21 28 L24 40 L26 33 L28 34 H38"
          stroke="#00AAFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: 'Environmental Testing',
    sublabel: 'Field-deployed · Multi-analyte',
    color: '#0099EE',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" className="w-10 h-10">
        {/* Globe */}
        <circle cx="26" cy="22" r="14" stroke="#00AAFF" strokeWidth="1.6" />
        <path d="M26 8 C20 12 20 32 26 36" stroke="#00AAFF" strokeWidth="1.2" />
        <path d="M26 8 C32 12 32 32 26 36" stroke="#00AAFF" strokeWidth="1.2" />
        <path d="M12 22 H40" stroke="#00AAFF" strokeWidth="1" opacity="0.4" />
        <path d="M14 15 H38 M14 29 H38" stroke="#00AAFF" strokeWidth="0.8" opacity="0.3" />
        {/* Drop */}
        <path d="M26 36 L26 46 M22 42 L26 46 L30 42"
          stroke="#00AAFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
        <circle cx="26" cy="22" r="4" fill="#0066FF" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Point of Care',
    sublabel: 'Clinical · Diagnostics · Sub-5 min',
    color: '#0077DD',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" className="w-10 h-10">
        {/* Clipboard */}
        <rect x="8" y="14" width="36" height="30" rx="5" stroke="#00AAFF" strokeWidth="1.6" />
        <path d="M26 8 V14" stroke="#00AAFF" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 8 H34" stroke="#00AAFF" strokeWidth="1.6" strokeLinecap="round" />
        {/* Checkmark */}
        <path d="M15 29 L21 35 L37 20" stroke="#00AAFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Plus badge */}
        <circle cx="38" cy="13" r="6" fill="#0066FF" opacity="0.55" />
        <path d="M35 13 H41 M38 10 V16" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

function ChipIllustration() {
  const padsH = [52, 67, 82, 97, 112, 127, 142, 157]
  const padsV = [54, 69, 84, 99, 114, 129, 144, 159]

  return (
    <svg width="250" height="250" viewBox="0 0 250 250" style={{ overflow: 'visible', display: 'block' }}>
      <defs>
        <radialGradient id="hpCG" cx="50%" cy="58%" r="54%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.52" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hpBoard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071A36" />
          <stop offset="100%" stopColor="#030E1E" />
        </linearGradient>
        <linearGradient id="hpDie" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#020C1C" />
          <stop offset="100%" stopColor="#010810" />
        </linearGradient>
        <filter id="hpSG" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Glow */}
      <ellipse cx="125" cy="152" rx="105" ry="46" fill="url(#hpCG)" />

      {/* Routing traces to pads */}
      {padsH.map((y, i) => (
        <g key={i}>
          <line x1="26" y1={y + 3} x2="40" y2={y + 3} stroke="#002A77" strokeWidth="1" opacity="0.55" />
          <line x1="210" y1={y + 3} x2="224" y2={y + 3} stroke="#002A77" strokeWidth="1" opacity="0.55" />
        </g>
      ))}
      {padsV.map((x, i) => (
        <g key={i}>
          <line x1={x + 3} y1="26" x2={x + 3} y2="40" stroke="#002A77" strokeWidth="1" opacity="0.55" />
          <line x1={x + 3} y1="210" x2={x + 3} y2="224" stroke="#002A77" strokeWidth="1" opacity="0.55" />
        </g>
      ))}

      {/* PCB board */}
      <rect x="40" y="40" width="170" height="170" rx="10" fill="url(#hpBoard)" stroke="#0055CC" strokeWidth="1.8" />

      {/* Board texture */}
      {Array.from({ length: 16 }, (_, i) => 48 + i * 10).map(y => (
        <line key={y} x1="44" y1={y} x2="206" y2={y} stroke="#002244" strokeWidth="0.35" opacity="0.2" />
      ))}

      {/* Left pads */}
      {padsH.map((y, i) => (
        <rect key={i} x="26" y={y} width="14" height="8" rx="2.5" fill="#0066FF" opacity="0.95" />
      ))}
      {/* Right pads */}
      {padsH.map((y, i) => (
        <rect key={i} x="210" y={y} width="14" height="8" rx="2.5" fill="#0066FF" opacity="0.95" />
      ))}
      {/* Top pads */}
      {padsV.map((x, i) => (
        <rect key={i} x={x} y="26" width="8" height="14" rx="2.5" fill="#0066FF" opacity="0.95" />
      ))}
      {/* Bottom pads */}
      {padsV.map((x, i) => (
        <rect key={i} x={x} y="210" width="8" height="14" rx="2.5" fill="#0066FF" opacity="0.95" />
      ))}

      {/* L-shaped traces (decorative routing) */}
      {[55, 70, 85, 100].map((y, i) => (
        <g key={i}>
          <line x1="40" y1={y+3} x2={60+i*9} y2={y+3} stroke="#003799" strokeWidth="0.9" opacity="0.5" />
          <line x1={60+i*9} y1={y+3} x2={60+i*9} y2="86" stroke="#003799" strokeWidth="0.9" opacity="0.5" />
          <line x1="210" y1={y+3} x2={190-i*9} y2={y+3} stroke="#003799" strokeWidth="0.9" opacity="0.5" />
          <line x1={190-i*9} y1={y+3} x2={190-i*9} y2="86" stroke="#003799" strokeWidth="0.9" opacity="0.5" />
        </g>
      ))}

      {/* Vias */}
      {[[66,158],[80,170],[190,158],[200,170],[125,58],[125,70]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#010C1E" stroke="#0044AA" strokeWidth="1.1" />
      ))}

      {/* Die */}
      <rect x="74" y="74" width="102" height="102" rx="6" fill="url(#hpDie)" stroke="#003399" strokeWidth="1.3" />

      {/* Die internal bus lines */}
      {[90, 106, 144, 160].map(v => (
        <g key={v}>
          <line x1="80" y1={v} x2="170" y2={v} stroke="#001E44" strokeWidth="0.7" opacity="0.38" />
          <line x1={v} y1="80" x2={v} y2="170" stroke="#001E44" strokeWidth="0.7" opacity="0.38" />
        </g>
      ))}

      {/* Corner markers */}
      {[[78,78],[168,78],[78,168],[168,168]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.2" fill="#0044AA" opacity="0.7" />
      ))}

      {/* Pin 1 */}
      <circle cx="79" cy="84" r="2" fill="#4466AA" opacity="0.5" />

      {/* Central nanojunction */}
      <circle cx="125" cy="125" r="28" fill="#030D22" stroke="#0066FF" strokeWidth="1.8" filter="url(#hpSG)" />
      <circle cx="125" cy="125" r="17" fill="#020A18" stroke="#00AAFF" strokeWidth="1.4" />
      <circle cx="125" cy="125" r="8"  fill="#010810" stroke="#0055EE" strokeWidth="1.0" />

      <text x="125" y="120" textAnchor="middle" fill="#0077FF" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif">DNA</text>
      <text x="125" y="133" textAnchor="middle" fill="#00AAFF" fontSize="9"  fontWeight="600" fontFamily="Space Grotesk, sans-serif">Biotronix</text>
    </svg>
  )
}

export default function HeroPlatformVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #010D22 0%, #020918 50%, #010D22 100%)',
        boxShadow: '0 0 80px rgba(0,102,255,0.14), 0 40px 100px rgba(0,0,0,0.7)',
        border: '1px solid rgba(0,102,255,0.14)',
      }}
    >
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <pattern id="hpGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#002266" strokeWidth="0.26" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hpGrid)" />
      </svg>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 36%, rgba(0,102,255,0.11) 0%, transparent 65%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center py-10 px-8">

        {/* Headline */}
        <p className="text-sm font-700 font-grotesk text-white mb-1 tracking-tight text-center">
          A DNA Transistor Sensor for Proactive Healthcare
        </p>
        <p className="text-xs italic text-text-muted mb-7 tracking-[0.22em] text-center uppercase">
          Every Day. Everywhere.
        </p>

        {/* Chip */}
        <div className="mb-3 flex justify-center">
          <ChipIllustration />
        </div>

        {/* Down arrow */}
        <svg width="20" height="36" viewBox="0 0 20 36" className="mb-7">
          <line x1="10" y1="0" x2="10" y2="28" stroke="#0066FF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 3 20 L 10 28 L 17 20" stroke="#0066FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        {/* Application panels */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mb-6">
          {panels.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center gap-3 rounded-xl p-5 text-center"
              style={{
                background: 'rgba(3,10,26,0.8)',
                border: `1px solid ${p.color}28`,
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: `${p.color}12` }}
              >
                {p.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-white leading-tight">{p.label}</div>
                <div className="text-[10px] text-text-muted mt-1 leading-snug">{p.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-xs text-text-muted font-medium tracking-[0.2em] uppercase">
          One Platform.{' '}
          <span className="text-white">Unlimited Applications.</span>
        </p>
      </div>
    </div>
  )
}
