import MockAsyncStorage from 'mock-async-storage';

const mockImpl = new MockAsyncStorage()
jest.mock('@react-native-community/async-storage', () => mockImpl);

jest.mock('react-native-fs', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  }
})
