import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#01050E',
        'bg-secondary': '#050D1E',
        'accent-blue': '#0066FF',
        'accent-cyan': '#00AAFF',
        'accent-gold': '#D4870B',
        'text-muted': '#8899BB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        tight: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-glow': 'radial-gradient(ellipse at center, rgba(0,102,255,0.12) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 10px rgba(0,102,255,0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(0,170,255,0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
