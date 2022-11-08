module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'postcss-preset-env': {
			// Using tailwind nesting above
      features: { 'nesting-rules': false },
			stage: 2
    },
    'autoprefixer': {},
  }
}