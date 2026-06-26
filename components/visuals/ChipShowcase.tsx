'use client'

function PCBChip() {
  const leftPads  = [46, 60, 74, 88, 102, 116, 130, 144, 158, 172, 186, 200]
  const topPads   = [50, 64, 78, 92, 106, 120, 134, 148, 162, 176, 190, 204]

  return (
    <svg width="260" height="260" viewBox="0 0 260 260" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="pcbBoard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071820" />
          <stop offset="100%" stopColor="#030D18" />
        </linearGradient>
        <linearGradient id="pcbDie" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#020B1C" />
          <stop offset="100%" stopColor="#010810" />
        </linearGradient>
        <radialGradient id="pcbGlow" cx="50%" cy="58%" r="50%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
        </radialGradient>
        <filter id="pcbSG" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* glow */}
      <ellipse cx="130" cy="158" rx="108" ry="44" fill="url(#pcbGlow)" />

      {/* PCB board */}
      <rect x="30" y="30" width="200" height="200" rx="10" fill="url(#pcbBoard)" stroke="#0055CC" strokeWidth="1.8" />

      {/* Board fill lines (copper pour texture) */}
      {Array.from({ length: 20 }, (_, i) => 38 + i * 10).map(y => (
        <line key={y} x1="34" y1={y} x2="226" y2={y} stroke="#002244" strokeWidth="0.4" opacity="0.22" />
      ))}

      {/* Left pads */}
      {leftPads.map((y, i) => (
        <rect key={i} x="18" y={y} width="12" height="7" rx="2" fill="#0066FF" opacity="0.95" />
      ))}
      {/* Right pads */}
      {leftPads.map((y, i) => (
        <rect key={i} x="230" y={y} width="12" height="7" rx="2" fill="#0066FF" opacity="0.95" />
      ))}
      {/* Top pads */}
      {topPads.map((x, i) => (
        <rect key={i} x={x} y="18" width="7" height="12" rx="2" fill="#0066FF" opacity="0.95" />
      ))}
      {/* Bottom pads */}
      {topPads.map((x, i) => (
        <rect key={i} x={x} y="230" width="7" height="12" rx="2" fill="#0066FF" opacity="0.95" />
      ))}

      {/* L-shaped routing traces from left pads → die */}
      {[49, 63, 77, 91].map((y, i) => (
        <g key={i}>
          <line x1="30" y1={y+3} x2={52+i*8} y2={y+3} stroke="#003799" strokeWidth="1" opacity="0.55" />
          <line x1={52+i*8} y1={y+3} x2={52+i*8} y2="84" stroke="#003799" strokeWidth="1" opacity="0.55" />
        </g>
      ))}
      {/* Right traces */}
      {[49, 63, 77, 91].map((y, i) => (
        <g key={i}>
          <line x1="230" y1={y+3} x2={208-i*8} y2={y+3} stroke="#003799" strokeWidth="1" opacity="0.55" />
          <line x1={208-i*8} y1={y+3} x2={208-i*8} y2="84" stroke="#003799" strokeWidth="1" opacity="0.55" />
        </g>
      ))}
      {/* Bottom traces */}
      {[53, 67, 81, 95].map((x, i) => (
        <g key={i}>
          <line x1={x+3} y1="230" x2={x+3} y2={210-i*6} stroke="#003799" strokeWidth="1" opacity="0.55" />
          <line x1={x+3} y1={210-i*6} x2="80" y2={210-i*6} stroke="#003799" strokeWidth="1" opacity="0.55" />
        </g>
      ))}

      {/* Via holes */}
      {[[60,156],[74,168],[196,156],[208,168],[130,58],[130,70],[58,130],[202,130]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#010C1E" stroke="#0044AA" strokeWidth="1.2" />
      ))}

      {/* SMD capacitors (bypass caps) */}
      {[[44,190],[58,190],[44,202],[58,202]].map(([x,y], i) => (
        <rect key={i} x={x} y={y} width="11" height="7" rx="1" fill="#0A1A2E" stroke="#003399" strokeWidth="0.8" />
      ))}
      <text x="54" y="186" textAnchor="middle" fill="#334466" fontSize="6.5">C1-C4</text>

      {/* SMD resistors */}
      {[[192,190],[204,190],[192,202],[204,202]].map(([x,y], i) => (
        <rect key={i} x={x} y={y} width="11" height="7" rx="1" fill="#0A1A2E" stroke="#002E88" strokeWidth="0.8" />
      ))}
      <text x="202" y="186" textAnchor="middle" fill="#334466" fontSize="6.5">R1-R4</text>

      {/* Inner IC die package */}
      <rect x="66" y="66" width="128" height="128" rx="7" fill="url(#pcbDie)" stroke="#003399" strokeWidth="1.4" />

      {/* Die corner dots */}
      {[[70,70],[190,70],[70,190],[190,190]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#0044AA" opacity="0.7" />
      ))}

      {/* Pin 1 indicator */}
      <circle cx="71" cy="76" r="2" fill="#5577AA" opacity="0.5" />

      {/* Die internal grid pattern */}
      {[84, 100, 160, 176].map(y => (
        <line key={y} x1="74" y1={y} x2="186" y2={y} stroke="#001E44" strokeWidth="0.8" opacity="0.4" />
      ))}
      {[84, 100, 160, 176].map(x => (
        <line key={x} x1={x} y1="74" x2={x} y2="186" stroke="#001E44" strokeWidth="0.8" opacity="0.4" />
      ))}

      {/* Central nanojunction */}
      <circle cx="130" cy="130" r="30" fill="#030C1E" stroke="#0066FF" strokeWidth="1.8" filter="url(#pcbSG)" />
      <circle cx="130" cy="130" r="19" fill="#020A18" stroke="#00AAFF" strokeWidth="1.4" />
      <circle cx="130" cy="130" r="9"  fill="#010810" stroke="#0055EE" strokeWidth="1.0" />

      {/* DNA Biotronix label */}
      <text x="130" y="125" textAnchor="middle" fill="#0077FF" fontSize="10" fontWeight="700" fontFamily="Space Grotesk, sans-serif">DNA</text>
      <text x="130" y="137" textAnchor="middle" fill="#00AAFF" fontSize="8"  fontWeight="600" fontFamily="Space Grotesk, sans-serif">Biotronix</text>

      {/* IC model number (silkscreen style) */}
      <text x="75" y="80" fill="#223355" fontSize="7" fontFamily="Space Grotesk, sans-serif">U1</text>
      <text x="75" y="192" fill="#223355" fontSize="6" fontFamily="Space Grotesk, sans-serif">DNX-G1</text>
    </svg>
  )
}

function DevicePrototype() {
  return (
    <svg width="108" height="190" viewBox="0 0 108 190" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="dpBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#151F3A" />
          <stop offset="50%" stopColor="#1E2A4E" />
          <stop offset="100%" stopColor="#151F3A" />
        </linearGradient>
        <radialGradient id="dpFront" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#00AAFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00AAFF" stopOpacity="0" />
        </radialGradient>
        <filter id="dpLED">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Body */}
      <rect x="8" y="4" width="92" height="176" rx="11" fill="url(#dpBody)" stroke="#283A66" strokeWidth="1.5" />
      <rect x="8" y="4" width="92" height="176" rx="11" fill="url(#dpFront)" />

      {/* Side buttons */}
      <rect x="3" y="52" width="5" height="22" rx="2.5" fill="#1A2844" stroke="#223366" strokeWidth="0.8" />
      <rect x="3" y="80" width="5" height="22" rx="2.5" fill="#1A2844" stroke="#223366" strokeWidth="0.8" />
      <rect x="100" y="62" width="5" height="28" rx="2.5" fill="#1A2844" stroke="#223366" strokeWidth="0.8" />

      {/* USB-C port at bottom */}
      <rect x="37" y="174" width="34" height="6" rx="3" fill="#101C30" stroke="#1A2844" strokeWidth="0.7" />

      {/* Status LED */}
      <circle cx="54" cy="18" r="4" fill="#00AAFF" opacity="0.9" filter="url(#dpLED)" />

      {/* Logo circle */}
      <circle cx="54" cy="65" r="28" fill="#0A1830" stroke="#0066FF" strokeWidth="1.2" />
      <text x="54" y="60" textAnchor="middle" fill="#0077FF" fontSize="10" fontWeight="700" fontFamily="Space Grotesk, sans-serif">DNA</text>
      <text x="54" y="72" textAnchor="middle" fill="#00AAFF" fontSize="8"  fontWeight="600" fontFamily="Space Grotesk, sans-serif">Biotronix</text>

      {/* Measurement window */}
      <rect x="18" y="108" width="72" height="52" rx="5" fill="#060F22" stroke="#003388" strokeWidth="1" />
      <rect x="22" y="112" width="64" height="44" rx="3" fill="#020810" stroke="#0044AA" strokeWidth="0.8" />
      {/* Mini signal trace */}
      <polyline
        points="24,134 30,134 34,122 38,146 42,130 48,134 54,134 60,126 64,142 68,134 74,134 80,130 84,134"
        stroke="#0066FF" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      <text x="54" y="150" textAnchor="middle" fill="#0055BB" fontSize="7" fontFamily="Space Grotesk, sans-serif">Gen-1 Live</text>
    </svg>
  )
}

function PennyCoin() {
  return (
    <svg width="62" height="62" viewBox="0 0 62 62" style={{ display: 'block' }}>
      <defs>
        <radialGradient id="pennyOuter" cx="38%" cy="34%" r="62%">
          <stop offset="0%" stopColor="#D08C10" />
          <stop offset="55%" stopColor="#A87010" />
          <stop offset="100%" stopColor="#7A5206" />
        </radialGradient>
        <radialGradient id="pennyInner" cx="38%" cy="34%" r="62%">
          <stop offset="0%" stopColor="#C07808" />
          <stop offset="100%" stopColor="#8A5C06" />
        </radialGradient>
      </defs>
      <circle cx="31" cy="31" r="29" fill="url(#pennyOuter)" />
      <circle cx="31" cy="31" r="25" fill="url(#pennyInner)" />
      {/* Rim lines */}
      <circle cx="31" cy="31" r="28" fill="none" stroke="#6A4204" strokeWidth="1" opacity="0.5" />
      <circle cx="31" cy="31" r="22" fill="none" stroke="#6A4204" strokeWidth="0.6" opacity="0.35" />
      {/* Lincoln silhouette hint */}
      <ellipse cx="31" cy="22" rx="6" ry="8" fill="#7A5206" opacity="0.55" />
      <rect x="24" y="18" width="3" height="14" rx="1.5" fill="#7A5206" opacity="0.45" />
      <text x="31" y="41" textAnchor="middle" fill="#6A4204" fontSize="5.5" fontFamily="serif" opacity="0.75">LIBERTY</text>
      <text x="31" y="49" textAnchor="middle" fill="#6A4204" fontSize="4.5" fontFamily="serif" opacity="0.6">2024</text>
    </svg>
  )
}

function SmartphoneScreen() {
  const traces = [
    { color: '#0066FF', pts: '10,52 18,52 22,38 28,66 33,46 40,52 48,52' },
    { color: '#00AAFF', pts: '10,52 16,52 20,42 26,62 32,48 38,52 48,52' },
    { color: '#0044AA', pts: '10,54 15,54 19,46 25,62 30,52 36,54 48,54' },
  ]

  return (
    <svg width="84" height="166" viewBox="0 0 84 166" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="phoneBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A1428" />
          <stop offset="100%" stopColor="#050D1C" />
        </linearGradient>
      </defs>
      {/* Frame */}
      <rect x="2" y="2" width="80" height="162" rx="10" fill="url(#phoneBody)" stroke="#1A2A50" strokeWidth="1.5" />
      {/* Notch */}
      <rect x="28" y="5" width="28" height="8" rx="4" fill="#060E22" />
      {/* Screen */}
      <rect x="6" y="16" width="72" height="134" rx="4" fill="#010C20" />
      {/* Status bar */}
      <rect x="6" y="16" width="72" height="16" fill="#071428" rx="4" />
      <text x="42" y="27" textAnchor="middle" fill="#00AAFF" fontSize="6.5" fontWeight="600" fontFamily="Space Grotesk, sans-serif">Nanobiotronix</text>

      {/* Three channel panels */}
      {[0, 1, 2].map(row => (
        <g key={row}>
          <rect x="8" y={38 + row * 37} width="68" height="32" rx="3" fill="#030E22" />
          <text x="11" y={38 + row * 37 + 10} fill="#4466AA" fontSize="5.5" fontFamily="Space Grotesk, sans-serif">Ch-{row + 1}</text>
          {/* signal trace */}
          <polyline
            points={traces[row].pts.split(' ').map(pt => {
              const [x, y] = pt.split(',').map(Number)
              return `${x},${y + row * 37}`
            }).join(' ')}
            stroke={traces[row].color} strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* current reading */}
          <text x="72" y={38 + row * 37 + 10} textAnchor="end" fill={traces[row].color} fontSize="5.5" fontFamily="Space Grotesk, sans-serif">
            {(12.4 + row * 3.1).toFixed(1)} pA
          </text>
        </g>
      ))}

      {/* Concentration readout */}
      <rect x="8" y="152" width="68" height="14" rx="2" fill="#040F26" stroke="#003388" strokeWidth="0.7" />
      <text x="42" y="161" textAnchor="middle" fill="#00AAFF" fontSize="6" fontFamily="Space Grotesk, sans-serif">2.3 nM · IL-6 detected</text>

      {/* Home bar */}
      <rect x="28" y="156" width="28" height="3" rx="1.5" fill="#1A2A50" />
    </svg>
  )
}

export default function ChipShowcase() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #010D22 0%, #020918 60%, #010D22 100%)',
        border: '1px solid rgba(0,102,255,0.14)',
      }}
    >
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <pattern id="csGrid" x="0" y="0" width="45" height="45" patternUnits="userSpaceOnUse">
            <path d="M 45 0 L 0 0 0 45" fill="none" stroke="#002266" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#csGrid)" />
      </svg>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(0,80,200,0.14) 0%, transparent 65%)' }} />

      {/* Items */}
      <div className="relative z-10 flex items-end justify-center gap-10 px-10 pb-8 pt-10">
        {/* Penny (scale) */}
        <div className="flex flex-col items-center gap-3 pb-3">
          <PennyCoin />
          <span className="text-[10px] text-text-muted tracking-wide">Scale ref.</span>
        </div>

        {/* Gen-1 Chip */}
        <div className="flex flex-col items-center gap-3">
          <PCBChip />
          <span className="text-sm font-semibold text-white tracking-wide">Gen-1 Chip</span>
        </div>

        {/* Smartphone */}
        <div className="flex flex-col items-center gap-3">
          <SmartphoneScreen />
          <span className="text-[10px] text-text-muted tracking-wide">Measurement App</span>
        </div>

        {/* Device Prototype */}
        <div className="flex flex-col items-center gap-3">
          <DevicePrototype />
          <span className="text-sm font-semibold text-white tracking-wide">Device Prototype</span>
        </div>
      </div>

      {/* Floor line */}
      <div className="relative z-10 mx-8 h-px mb-4"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,60,180,0.4), transparent)' }} />
    </div>
  )
}
