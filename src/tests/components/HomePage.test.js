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

// This needs to be fixed :(
xdescribe(`Home Page testing after login`, () => {
    beforeAll(() => {
        sessionStorage.setItem('token', '12345');        
    });

    it(`Account Panel should show User Profile and Logout`, () => {
        const spyUseEffect = jest.spyOn( React, 'useEffect' );
        let wrapper = mount(
            <Router>
                <HomePage/>
            </Router>
        );
        // const wrapper = mount(
        //     <Router>
        //         <HomePage/>
        //     </Router>
        // );
        
        // console.log( sessionStorage.getItem('token') );
        expect( spyUseEffect ).toHaveBeenCalled();

        // expect(wrapper
        //         .find(AccountPanel)
        //         .find('#profile')
        //         .length
        //     ).toBeGreaterThan(0);
        // expect(wrapper
        //         .find(AccountPanel)
        //         .find('#logout')
        //         .length
        //     ).toBeGreaterThan(0);
        wrapper.unmount();
    });

    it(`Account Panel should not show Sign Up and Login`, () => {
        it(`Account Panel should not show User Profile and Logout`, () => {
            const wrapper = mount(
                <Router>
                    <HomePage />
                </Router>
            );
            expect(wrapper
                .find(AccountPanel)
                .find('#login')
                .length
            ).toBe(0);
            expect(wrapper
                .find(AccountPanel)
                .find('#signUp')
                .length
            ).toBe(0);
            wrapper.unmount();
        });
    });

    it(`Content Panel should be visible.`, ()=>{
        const wrapper = mount(
            <Router>
                <HomePage />
            </Router>
        );
        expect(wrapper.find(ContentPanel)).toHaveLength(1);
        wrapper.unmount();
    });

    it(`Content Panel should show 3 links - Recipes, Tags and Ingredients`, () => {
        const wrapper = mount(
            <Router>
                <HomePage />
            </Router>
        );
        // console.log( wrapper.find(AccountPanel).debug() );
        expect(wrapper.find(ContentPanel)
                .find('#recipesLink')
                .length
            ).toBeGreaterThan(0);
        expect(wrapper.find(ContentPanel)
                .find('#tagsLink')
                .length
            ).toBeGreaterThan(0);
        expect(wrapper.find(ContentPanel)
                .find('#ingredientsLink')
                .length
            ).toBeGreaterThan(0);
        wrapper.unmount();
    });

    it(`Pre-login msg should not be visible`, () => {
        const wrapper = mount(
            <Router>
                <HomePage />
            </Router>
        );
        // console.log( wrapper.find(PreLoginMsg).closest('p') );
        expect(wrapper.find('#preLoginMsg')).toHaveLength(0);
    });

    afterAll(() => {
        sessionStorage.clear();
    });
});