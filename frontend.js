module.exports = {
  extends: ['./base.js', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
  },
};