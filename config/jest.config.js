module.exports = {
  preset: 'react-native',
  rootDir: '../',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-config|react-native-camera|react-native-fs|react-native-document-picker|react-native-linear-gradient|react-native-safe-area-view|react-native-gesture-handler|react-native-iphone-x-helper|lodash|react-native-reanimated|react-native-snap-carousel|@twotalltotems/react-native-otp-input|react|jest-runtime|react-native-screens|@react-native-community/masked-view|@react-navigation/stack|react-native-skeleton-placeholder|react-native-barcode-builder|react-native-vector-icons|@react-native-community/datetimepicker|react-native-keyboard-aware-scroll-view|react-native-dash|react-native-flip-card|react-native-image-crop-picker|react-native-secure-key-store|react-native-image-resizer|react-native-webview|react-native-stripe-checkout-webview)/)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.js',
    '!./src/**/*-test.js',
    '!./src/assets/'
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
  testMatch: [
    '<rootDir>/src/components/**/**/__tests__/*-test.js',
    '<rootDir>/src/components/**/**/!(styles|types|config)/*-test.js'
  ],
  testPathIgnorePatterns: ['src/components/atoms/Chip/config/index.js'],
  moduleDirectories: ['node_modules'],
  modulePathIgnorePatterns: ['/styles/', '/assets/', '/types/', '/icons/'],
  setupFiles: [
    '<rootDir>/config/jestSetupFile.js',
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ]
};
