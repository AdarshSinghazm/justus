/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          page: 'var(--bg-page)',
          nav: 'var(--bg-nav)',
          card: 'var(--card-bg)',
          border: 'var(--card-border)',
          pill: 'var(--pill-bg)',
          pillText: 'var(--pill-text)',
          pillBorder: 'var(--pill-border)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
          subtle: 'var(--text-subtle)',
          modal: 'var(--modal-bg)',
          modalCard: 'var(--modal-card)',
          polaroid: 'var(--polaroid-bg)',
          polaroidCard: 'var(--polaroid-card)',
        },
        brand: {
          bg: '#FAF4ED',
          bgDark: '#170E1A',
          plum: '#342033',
          pink: '#FF2B75',
          pinkDark: '#E01760',
          pinkPill: '#FADCE7',
          pinkBorder: '#F5B8CE',
          yellowTape: '#FEE371',
          pillPurple: '#F0EBF8',
          pillPurpleBorder: '#DCD2EE',
          pillYellow: '#FEF7DE',
          pillYellowBorder: '#F4E7B0',
          pillPeach: '#FDF0E7',
          pillPeachBorder: '#F7DAC5',
          darkCard: '#241527',
          darkBorder: '#47274D',
          darkPill: '#3D1C36',
          darkText: '#F7E7F0',
          darkTextMuted: '#CBB2C1',
        }
      },
      fontFamily: {
        cute: ['"Quicksand"', 'sans-serif'],
        cursive: ['"Caveat"', 'cursive'],
        sans: ['"Quicksand"', 'sans-serif'],
      },
      boxShadow: {
        'btn': '0 3px 0 0 var(--btn-shadow, #342033)',
        'polaroid': '0 12px 30px -4px rgba(52, 32, 51, 0.1), 0 4px 10px -2px rgba(52, 32, 51, 0.05)',
      }
    },
  },
  plugins: [],
}
