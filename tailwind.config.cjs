module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7ED',
        pink: '#FADCD9',
        beige: '#F5EDE6',
        chocolate: '#5C3A21'
      },
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
