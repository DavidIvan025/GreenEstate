export default {
  plugins: {
    'postcss-import': ({
      path: ['src/css/**/*.css'],
    }),
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-properties': false
      }
    }
  },
}
