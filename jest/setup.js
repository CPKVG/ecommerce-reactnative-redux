// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import 'jest-enzyme';

// enzyme.configure({ adapter: new Adapter() });



//FOR REACT NATIVE NAVIGATE
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });