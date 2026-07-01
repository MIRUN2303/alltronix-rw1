import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8edf5',
          100: '#c5d1e8',
          200: '#9fb3d9',
          300: '#7894c9',
          400: '#5b7dbe',
          500: '#3e66b3',
          600: '#375ea8',
          700: '#2d5399',
          800: '#24498a',
          900: '#1a3a6e',
          950: '#0a1628',
        },
        surface: {
          DEFAULT: '#0f1d35',
          light: '#152642',
          dark: '#0a1628',
        },
        glass: {
          DEFAULT: 'rgba(15, 29, 53, 0.7)',
          border: 'rgba(62, 102, 179, 0.2)',
          hover: 'rgba(15, 29, 53, 0.85)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0a1628 0%, #1a3a6e 50%, #0066cc 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0066cc 0%, #00b4d8 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(15, 29, 53, 0.6) 0%, rgba(26, 58, 110, 0.4) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 102, 204, 0.15)',
        'glow-lg': '0 0 40px rgba(0, 102, 204, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
