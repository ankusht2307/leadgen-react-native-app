module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'react-native', 'react-hooks'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'global-require': 0,
    indent: 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
  globals: {
    fetch: false,
  },
};
