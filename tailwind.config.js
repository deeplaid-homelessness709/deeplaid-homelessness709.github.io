/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#faf5eb', light: '#fff8ee', dark: '#f5efe4' },
        amber: { DEFAULT: '#e8a838', light: '#f5c25a', dark: '#d4952a', soft: '#fef3d6' },
        earth: { light: '#f0e8d8', DEFAULT: '#d4c5a9', dark: '#b8a88a' },
        ink: { DEFAULT: '#3a2a1a', soft: '#5a4a3a', muted: '#8a7a6a' },
        border: { DEFAULT: '#e8dcc8', hover: '#f5d78a' },
        card: '#ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-warm': 'glowWarm 3s ease-in-out infinite alternate',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowWarm: {
          '0%': { boxShadow: '0 0 30px rgba(232,168,56,0.1), 0 0 60px rgba(232,168,56,0.05)' },
          '100%': { boxShadow: '0 0 50px rgba(232,168,56,0.25), 0 0 100px rgba(232,168,56,0.1)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
