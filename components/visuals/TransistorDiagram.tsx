'use client'

// Helper: generates smooth SVG polyline path for one helix strand
function buildPath(phase: boolean, sX: number, eX: number, cY: number, amp: number, hp: number): string {
  const pts: string[] = []
  for (let i = 0; i <= 300; i++) {
    const x = sX + (eX - sX) * i / 300
    const y = cY + (phase ? 1 : -1) * amp * Math.sin(Math.PI * (x - sX) / hp)
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return 'M ' + pts.join(' L ')
}

// Helper: returns y-coordinates of both strands at a given x
function ys(x: number, sX: number, cY: number, amp: number, hp: number): [number, number] {
  const s = Math.sin(Math.PI * (x - sX) / hp)
  return [cY - amp * s, cY + amp * s]
}

// Single analyte molecule cluster (bond lines + atom circles)
function Mol({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  const atoms = [
    { dx: 0,   dy: 0,   r: 15, fill: '#030C22', stroke: '#38BDF8', sw: 1.8 },
    { dx: -22, dy: -19, r: 9,  fill: '#020918', stroke: '#38BDF8', sw: 1.3 },
    { dx:  23, dy: -17, r: 8,  fill: '#020918', stroke: '#60A5FA', sw: 1.2 },
    { dx:  25, dy:  13, r: 11, fill: '#030C22', stroke: '#38BDF8', sw: 1.3 },
    { dx: -19, dy:  15, r: 9,  fill: '#020918', stroke: '#60A5FA', sw: 1.2 },
    { dx:   2, dy:  27, r: 7,  fill: '#030C22', stroke: '#60A5FA', sw: 1.1 },
    // Red accent atoms — preserve exactly (scientifically meaningful)
    { dx: -11, dy: -29, r: 8,  fill: '#280000', stroke: '#EF4444', sw: 1.1 },
    { dx:  27, dy:  -3, r: 6,  fill: '#220000', stroke: '#DC2626', sw: 1.0 },
  ]
  return (
    <g>
      {atoms.slice(1).map((a, i) => (
        <line key={i} x1={cx} y1={cy} x2={cx + a.dx} y2={cy + a.dy}
          stroke="#0E2D5A" strokeWidth="1.4" opacity="0.5" />
      ))}
      {atoms.map((a, i) => (
        <circle key={i} cx={cx + a.dx} cy={cy + a.dy} r={a.r}
          fill={a.fill} stroke={a.stroke} strokeWidth={a.sw} />
      ))}
      <text x={cx} y={cy + 52} textAnchor="middle"
        fill="#E2F3FF" fontSize="14" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
        {label}
      </text>
    </g>
  )
}

// Universal Receptor molecule cluster — more atoms, blue halo
function Receptor({ cx, cy }: { cx: number; cy: number }) {
  const atoms = [
    { dx:  0,   dy:  0,   r: 20, fill: '#041230', stroke: '#00D4FF', sw: 2.2 },
    { dx: -28,  dy: -22,  r: 12, fill: '#0E1E38', stroke: '#38BDF8', sw: 1.5 },
    { dx:  30,  dy: -20,  r: 11, fill: '#0E1E38', stroke: '#60A5FA', sw: 1.4 },
    { dx:  32,  dy:  18,  r: 13, fill: '#041230', stroke: '#38BDF8', sw: 1.5 },
    { dx: -30,  dy:  20,  r: 12, fill: '#0E1E38', stroke: '#60A5FA', sw: 1.4 },
    { dx:   0,  dy:  35,  r: 10, fill: '#041230', stroke: '#60A5FA', sw: 1.3 },
    { dx: -14,  dy: -42,  r:  9, fill: '#0E1E38', stroke: '#38BDF8', sw: 1.2 },
    { dx:  18,  dy: -42,  r:  8, fill: '#0E1E38', stroke: '#38BDF8', sw: 1.2 },
    // Red accent atoms — preserve exactly (scientifically meaningful)
    { dx: -36,  dy:  -8,  r:  9, fill: '#2A0000', stroke: '#EF4444', sw: 1.2 },
    { dx:  37,  dy:  -5,  r:  8, fill: '#250000', stroke: '#DC2626', sw: 1.1 },
    { dx:  12,  dy:  44,  r:  7, fill: '#200000', stroke: '#EF4444', sw: 1.0 },
  ]
  return (
    <g>
      {/* Scientific illumination halo */}
      <ellipse cx={cx} cy={cy} rx="72" ry="64"
        fill="#00D4FF" opacity="0.05" filter="url(#receptorHalo)" />
      {/* Dashed outer ring */}
      <circle cx={cx} cy={cy} r="55" fill="none" stroke="#0E2D5A"
        strokeWidth="1" strokeDasharray="3,5" opacity="0.45" />
      {/* Bond lines */}
      {atoms.slice(1).map((a, i) => (
        <line key={i} x1={cx} y1={cy} x2={cx + a.dx} y2={cy + a.dy}
          stroke="#0E3B70" strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* Atoms */}
      {atoms.map((a, i) => (
        <circle key={i} cx={cx + a.dx} cy={cy + a.dy} r={a.r}
          fill={a.fill} stroke={a.stroke} strokeWidth={a.sw} />
      ))}
    </g>
  )
}

export default function TransistorDiagram() {
  // DNA helix parameters — positions unchanged from approved diagram
  const sX = 295, eX = 705, cY = 378, amp = 40, hp = 82

  const p1 = buildPath(false, sX, eX, cY, amp, hp)   // strand 1 — cyan
  const p2 = buildPath(true,  sX, eX, cY, amp, hp)   // strand 2 — sky blue

  // Base-pair x positions — avoid crossovers (295,377,459,541,623,705) by ≥12 px
  const bpXs = [312, 330, 348, 363, 394, 412, 430, 446,
                 473, 491, 509, 526, 557, 574, 591, 607,
                 638, 655, 672, 687]

  return (
    <svg viewBox="0 0 1000 560" className="w-full h-auto block"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <defs>
        {/* ── Background ── */}
        <pattern id="tdGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#001A55" strokeWidth="0.28" />
        </pattern>
        <radialGradient id="tdBg" cx="50%" cy="70%" r="58%">
          <stop offset="0%" stopColor="#0055CC" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        {/* ── Electrode fills ── */}
        <linearGradient id="tdElec" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#0B2345" />
          <stop offset="100%" stopColor="#061120" />
        </linearGradient>

        {/* ── Nanostructure fills ── */}
        <linearGradient id="tdNano" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#0E2D5A" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>

        {/* ── DNA strand colors ── */}
        <linearGradient id="tdS1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#00D4FF" />
          <stop offset="40%"  stopColor="#0099EE" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        <linearGradient id="tdS2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#38BDF8" />
          <stop offset="40%"  stopColor="#60D5FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* ── Filters ── */}
        {/* Electrode border glow */}
        <filter id="tdGF" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* DNA neon glow */}
        <filter id="tdDNA" x="-20%" y="-100%" width="140%" height="300%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Molecule soft glow */}
        <filter id="tdMF" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Receptor halo */}
        <filter id="receptorHalo" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        {/* Nanostructure glow */}
        <filter id="tdNanoGlow" x="-20%" y="-30%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── Arrow marker ── */}
        <marker id="tdArr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#00D4FF" />
        </marker>
      </defs>

      {/* ══ BACKGROUND ══ */}
      <rect width="1000" height="560" fill="#020817" />
      <rect width="1000" height="560" fill="url(#tdGrid)" />
      <rect width="1000" height="560" fill="url(#tdBg)" />
      {/* Subtle depth particles */}
      {[120,240,400,560,720,860].map((x,i) => (
        <circle key={i} cx={x} cy={[80,180,100,160,90,170][i]} r="1.5"
          fill="#38BDF8" opacity="0.12" />
      ))}
      {/* Junction ambient glow */}
      <ellipse cx="500" cy="378" rx="200" ry="85" fill="#0055CC" opacity="0.07" />

      {/* ══ SOURCE ELECTRODE ══ */}
      <rect x="18" y="298" width="198" height="224" rx="13" fill="url(#tdElec)" />
      {/* Internal conductor layer lines */}
      {[316,334,352,370,388,406,424,442,460,478,496].map(y => (
        <line key={y} x1="26" y1={y} x2="208" y2={y} stroke="#0D2A55" strokeWidth="0.65" opacity="0.35" />
      ))}
      {/* Border with cyan glow */}
      <rect x="18" y="298" width="198" height="224" rx="13" fill="none"
        stroke="#38BDF8" strokeWidth="2.2" filter="url(#tdGF)" opacity="0.65" />
      {/* Electrode tips extending toward DNA */}
      {[352, 382, 412].map(y => (
        <g key={y}>
          <rect x="216" y={y-7} width="42" height="14" rx="4"
            fill="#1E40AF" stroke="#00D4FF" strokeWidth="0.9" opacity="0.92" />
          <line x1="258" y1={y} x2="275" y2={y}
            stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,3" opacity="0.5" />
        </g>
      ))}
      {/* Gate connection pin */}
      <line x1="117" y1="298" x2="117" y2="260"
        stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="6,4" opacity="0.5" />
      <circle cx="117" cy="256" r="5" fill="#00D4FF" opacity="0.85" />
      <text x="130" y="253" fill="#60A5FA" fontSize="11">V+</text>
      {/* Label */}
      <text x="117" y="420" textAnchor="middle" fill="#E2F3FF" fontSize="30" fontWeight="700">Source</text>

      {/* ══ LEFT NANOSTRUCTURE ══ */}
      <rect x="275" y="352" width="44" height="52" rx="7"
        fill="url(#tdNano)" filter="url(#tdNanoGlow)" />
      {[362, 376, 390].map(y => (
        <line key={y} x1="279" y1={y} x2="315" y2={y}
          stroke="#1E3A6E" strokeWidth="0.8" opacity="0.55" />
      ))}
      <rect x="275" y="352" width="44" height="52" rx="7"
        fill="none" stroke="#60A5FA" strokeWidth="1.2" opacity="0.85" />
      <text x="297" y="381" textAnchor="middle" fill="#60A5FA" fontSize="9.5">Nanostructure</text>

      {/* ══ DNA HELIX ══ */}
      {/* Ground shadow under helix */}
      <ellipse cx="500" cy="412" rx="175" ry="14" fill="#0E2D5A" opacity="0.15" />

      {/* Base pairs */}
      {bpXs.map(x => {
        const [y1, y2] = ys(x, sX, cY, amp, hp)
        const lo = Math.min(y1, y2), hi = Math.max(y1, y2)
        return (
          <g key={x}>
            <line x1={x} y1={lo} x2={x} y2={hi}
              stroke="#1E40AF" strokeWidth="1.6" opacity="0.58" />
            <circle cx={x} cy={y1} r="2.6" fill="#38BDF8" opacity="0.78" />
            <circle cx={x} cy={y2} r="2.6" fill="#1E40AF" opacity="0.78" />
          </g>
        )
      })}

      {/* Neon glow halos — electric blue + cyan */}
      <path d={p1} stroke="#00D4FF" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.10" />
      <path d={p2} stroke="#38BDF8" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.10" />
      {/* Strand 2 (sky blue, behind) */}
      <path d={p2} stroke="url(#tdS2)" strokeWidth="5" fill="none"
        strokeLinecap="round" filter="url(#tdDNA)" />
      {/* Strand 1 (cyan, front) */}
      <path d={p1} stroke="url(#tdS1)" strokeWidth="5" fill="none"
        strokeLinecap="round" filter="url(#tdDNA)" />

      {/* DNA Wired Junction label */}
      <text x="500" y="452" textAnchor="middle"
        fill="#00D4FF" fontSize="16" fontWeight="600" letterSpacing="0.8">
        DNA Wired Junction
      </text>
      <line x1="290" y1="446" x2="405" y2="446"
        stroke="#0E2D5A" strokeWidth="0.9" strokeDasharray="3,4" opacity="0.45" />
      <line x1="595" y1="446" x2="710" y2="446"
        stroke="#0E2D5A" strokeWidth="0.9" strokeDasharray="3,4" opacity="0.45" />

      {/* ══ RIGHT NANOSTRUCTURE ══ */}
      <rect x="681" y="352" width="44" height="52" rx="7"
        fill="url(#tdNano)" filter="url(#tdNanoGlow)" />
      {[362, 376, 390].map(y => (
        <line key={y} x1="685" y1={y} x2="721" y2={y}
          stroke="#1E3A6E" strokeWidth="0.8" opacity="0.55" />
      ))}
      <rect x="681" y="352" width="44" height="52" rx="7"
        fill="none" stroke="#60A5FA" strokeWidth="1.2" opacity="0.85" />
      <text x="703" y="381" textAnchor="middle" fill="#60A5FA" fontSize="9.5">Nanostructure</text>

      {/* ══ DRAIN ELECTRODE ══ */}
      <rect x="784" y="298" width="198" height="224" rx="13" fill="url(#tdElec)" />
      {[316,334,352,370,388,406,424,442,460,478,496].map(y => (
        <line key={y} x1="792" y1={y} x2="974" y2={y} stroke="#0D2A55" strokeWidth="0.65" opacity="0.35" />
      ))}
      <rect x="784" y="298" width="198" height="224" rx="13" fill="none"
        stroke="#38BDF8" strokeWidth="2.2" filter="url(#tdGF)" opacity="0.65" />
      {[352, 382, 412].map(y => (
        <g key={y}>
          <rect x="742" y={y-7} width="42" height="14" rx="4"
            fill="#1E40AF" stroke="#00D4FF" strokeWidth="0.9" opacity="0.92" />
          <line x1="725" y1={y} x2="742" y2={y}
            stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,3" opacity="0.5" />
        </g>
      ))}
      <line x1="883" y1="298" x2="883" y2="260"
        stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="6,4" opacity="0.5" />
      <circle cx="883" cy="256" r="5" fill="#00D4FF" opacity="0.85" />
      <text x="863" y="253" fill="#60A5FA" fontSize="11">V-</text>
      <text x="883" y="420" textAnchor="middle" fill="#E2F3FF" fontSize="30" fontWeight="700">Drain</text>

      {/* ══ UNIVERSAL RECEPTOR ══ */}
      <g filter="url(#tdMF)">
        <Receptor cx={500} cy={245} />
      </g>
      <text x="500" y="314" textAnchor="middle" fill="#E2F3FF" fontSize="14" fontWeight="700">Universal</text>
      <text x="500" y="330" textAnchor="middle" fill="#E2F3FF" fontSize="14" fontWeight="700">Receptor</text>
      {/* Dashed connector to DNA */}
      <line x1="500" y1="333" x2="500" y2="352"
        stroke="#38BDF8" strokeWidth="1.4" strokeDasharray="3,3" opacity="0.38" />

      {/* ══ ANALYTE MOLECULES ══ */}
      <g filter="url(#tdMF)">
        <Mol cx={205} cy={132} label="Mol. A" />
        <Mol cx={500} cy={ 72} label="Mol. B" />
        <Mol cx={795} cy={132} label="Mol. C" />
      </g>

      {/* ══ ARROWS: molecule → receptor ══ */}
      <line x1="222" y1="176" x2="462" y2="235"
        stroke="#00D4FF" strokeWidth="2.2" markerEnd="url(#tdArr)" opacity="0.88" />
      <line x1="500" y1="124" x2="500" y2="205"
        stroke="#00D4FF" strokeWidth="2.2" markerEnd="url(#tdArr)" opacity="0.88" />
      <line x1="778" y1="176" x2="538" y2="235"
        stroke="#00D4FF" strokeWidth="2.2" markerEnd="url(#tdArr)" opacity="0.88" />

      {/* ══ KON/KOFF KINETICS ══ */}
      <rect x="388" y="148" width="124" height="46" rx="7"
        fill="#020817" stroke="#0E2D5A" strokeWidth="0.9" opacity="0.95" />
      <text x="450" y="165" textAnchor="middle"
        fill="#00D4FF" fontSize="12.5" fontStyle="italic">
        {'K'}
        <tspan fontSize="10" dy="3">on</tspan>
        <tspan dy="-3">{' / K'}</tspan>
        <tspan fontSize="10" dy="3">off</tspan>
      </text>
      <text x="450" y="187" textAnchor="middle" fill="#38BDF8" fontSize="10">Kinetics</text>

      {/* ══ CORNER DECORATIONS ══ */}
      {/* DNA helix hex — top left */}
      <g opacity="0.20" transform="translate(58,58)">
        <polygon points="0,-34 29,-17 29,17 0,34 -29,17 -29,-17"
          fill="none" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="-8" y1="-18" x2="-8" y2="18" stroke="#00D4FF" strokeWidth="1.2" />
        <line x1="8"  y1="-18" x2="8"  y2="18" stroke="#00D4FF" strokeWidth="1.2" />
        <path d="M-8,-10 C0,-4 0,5 8,12 M-8,4 C0,10 0,16 8,12"
          stroke="#00D4FF" strokeWidth="1.1" fill="none" />
      </g>
      {/* Medical cross hex — top right */}
      <g opacity="0.20" transform="translate(942,58)">
        <polygon points="0,-34 29,-17 29,17 0,34 -29,17 -29,-17"
          fill="none" stroke="#38BDF8" strokeWidth="1.5" />
        <rect x="-5.5" y="-18" width="11" height="36" rx="2.5" fill="#00D4FF" opacity="0.75" />
        <rect x="-18"  y="-5.5" width="36" height="11" rx="2.5" fill="#00D4FF" opacity="0.75" />
      </g>
    </svg>
  )
}
