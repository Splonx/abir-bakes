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
        ivory: '#FBF8F1',
        porcelain: '#F4EFE5',
        champagne: '#D8BF87',
        gold: '#B08A4A',
        ink: '#171411',
        charcoal: '#2A2621',
        rose: '#CFA7A0',
        sage: '#7F8A72'
      },
      fontFamily: {
        elegant: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
