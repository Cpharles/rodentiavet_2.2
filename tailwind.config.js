/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-iris': '#16165c',
        'iris-shadow': '#232269',
        'iris-glow': '#403cd5',
        'iris-pulse': '#5350cc',
        'iris-border': '#4846c6',
        'iris-veil': '#524fe1',
        'lilac-mist': '#b1a6f6',
        'clinical-cyan': '#00b1ff',
        'cyan-soft': '#59b4ff',
        'mint-vital': '#00ffaa',
        'teal-signal': '#2ee9ff',
        'cloud-white': '#ffffff',
        'pearl': '#f4f4f6',
        'ash': '#d8d8e3',
        'fog': '#9494a9',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'Plus Jakarta Sans', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
      },
      borderRadius: {
        'tags': '9999px',
        'cards': '24px',
        'cards-elevated': '32px',
        'icons': '7px',
        'inputs': '16px',
        'buttons': '9999px',
        'full': '9999px',
      },
      letterSpacing: {
        'display': '-0.075em',
        'heading': '-0.04em',
        'subheading': '-0.03em',
        'caption': '0.02em',
      },
      boxShadow: {
        'cta': '0 0 20px rgba(60, 57, 185, 0.4)',
        'cta-hover': '0 0 28px rgba(83, 80, 204, 0.65)',
        'card-dark': '0 4px 20px rgba(10, 10, 45, 0.4)',
        'card-hover': '0 16px 36px -8px rgba(10, 10, 50, 0.7), 0 0 24px rgba(64, 60, 213, 0.35)',
        'card-glow-cyan': '0 12px 32px -4px rgba(0, 177, 255, 0.18)',
        'card-light': '0 4px 20px rgba(22, 22, 92, 0.06)',
        'card-light-hover': '0 12px 32px rgba(22, 22, 92, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(64, 60, 213, 0.3)' },
          '50%': { boxShadow: '0 0 28px rgba(64, 60, 213, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
