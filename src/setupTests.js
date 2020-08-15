global.window = {};

import 'mock-local-storage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';

Enzyme.configure({
    adapter: new Adapter()
});

Object.defineProperty(
    window, 
    'localStorage', 
    { value: global.localStorage, configurable:true, enumerable:true, writable:true }
);

Object.defineProperty(
    window, 
    'sessionStorage', 
    { value: global.localStorage, configurable:true, enumerable:true, writable:true }
);