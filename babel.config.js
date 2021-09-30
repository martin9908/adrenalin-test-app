module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@atoms': './src/components/atoms',
          '@clients': './src/clients',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@core': './src/core',
          '@colors': './src/core/colors',
          '@layouts': './src/components/layouts',
          '@molecules': './src/components/molecules',
          '@navigation': './src/navigation',
          '@organisms': './src/components/organisms',
          '@pages': './src/pages',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
      },
    ],
    'transform-inline-environment-variables',
  ],
  retainLines: true,
};
