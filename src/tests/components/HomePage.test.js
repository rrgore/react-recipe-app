import React from 'react';
import { shallow, mount } from 'enzyme';
import { 
    BrowserRouter as Router, 
    MemoryRouter 
} from 'react-router-dom';

import HomePage from '../../components/HomePage';
import App from '../../components/App';
import PreLoginMsg from '../../components/PreLoginMsg';
import ContentPanel from '../../components/ContentPanel';
import AccountPanel from '../../components/AccountPanel';


describe('HomePage testing - common', () => {    
    it('Should show Home component for / router', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(HomePage)).toHaveLength(1);
        wrapper.unmount();
    });

    it('Should render Home page title correctly', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('#recipeAppTitle').prop('content')).toBe('Recipe App');
        wrapper.unmount();
    });

    it('Should render AccountPanel correctly', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('#accountPanel')).toHaveLength(1);
        wrapper.unmount();
    });
});

describe(`Home Page testing - without login`, () => {
    it(`Should show Pre Login Message`, () => {
        const wrapper = mount(
            <Router>
                <HomePage />
            </Router>
        );
        // console.log( wrapper.find(PreLoginMsg).closest('p') );
        expect(wrapper.find('#preLoginMsg')).toHaveLength(2);
        expect(wrapper 
                .find(PreLoginMsg)
                .find('p')
                .text()
            ).toBe('Login to add and see your recipes, along with the ingredients and tags');
        // expect(wrapper.find('#recipeAppTitle').prop('content')).toBe('Recipe App');
        wrapper.unmount();
    });

    it(`Should not show Content Panel`, () => {
        const wrapper = mount(
            <Router>
                <HomePage />
            </Router>
        );
        expect(wrapper.find(ContentPanel)).toHaveLength(0);
        wrapper.unmount();
    });

    it(`Account Panel should show Login and Signup`, () => {
        const wrapper = mount(
            <Router>
                <HomePage />
            </Router>
        );
        // console.log( wrapper.find(AccountPanel).debug() );
        expect(wrapper
                .find(AccountPanel)
                .find('#login')
                .length
            ).toBeGreaterThan(0);
        expect(wrapper
                .find(AccountPanel)
                .find('#signUp')
                .length
            ).toBeGreaterThan(0);
        wrapper.unmount();
    });

    it(`Account Panel should not show User Profile and Logout`, () => {
        const wrapper = mount(
            <Router>
                <HomePage />
            </Router>
        );
        expect(wrapper
            .find(AccountPanel)
            .find('#profile')
            .length
        ).toBe(0);
        expect(wrapper
            .find(AccountPanel)
            .find('#logout')
            .length
        ).toBe(0);
        wrapper.unmount();
    });
});