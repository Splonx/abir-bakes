module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7EF',
        warm: '#FFFDF8',
        cream: '#FFFDF8',
        cashmere: '#EEE3D4',
        beige: '#E4D5C1',
        latte: '#B99F82',
        cocoa: '#4A3428',
        taupe: '#76675B',
        nude: '#D8C2B3',
        dusty: '#B9948F',
        bronze: '#A77A45',
        gold: '#C5A56B',
        ink: '#14110F',
        charcoal: '#2A2521'
      },
      fontFamily: {
        elegant: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
