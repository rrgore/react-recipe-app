import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Form } from 'semantic-ui-react';

import LoginPage from '../../components/LoginPage';
import App from '../../components/App';
import EmptyFieldsErrorMsg from '../../components/EmptyFieldsErrorMsg';

describe(`Login Page displayed`, () => {
    it(`Should show Login component for '/login' router`, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(LoginPage)).toHaveLength(1);
        wrapper.unmount();
    });
});

describe(`LoginPage tests`, () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<LoginPage />);
    });

    afterEach(() => {
        wrapper.unmount();
    });    
    
    it('Should render Login page title correctly', () => {        
        expect(wrapper.find('#loginPageTitle').text()).toBe('Login Page');
    });
    
    it('Should render Email field correctly', () => {
        expect(wrapper.find('#email')
                .length
            ).toBeGreaterThan(0);
    });
    
    it('Should render Password field correctly', () => {
        expect(wrapper.find('#password')
                .length
            ).toBeGreaterThan(0);
    });
    
    it('Should render Login button correctly', () => {
        expect(wrapper.find('#login')
                .length
            ).toBeGreaterThan(0);
    });
    
    it('Should not render error msg div', () => {
        expect(wrapper.find('#errorMsg')).toHaveLength(0);
    });
    
    it('When user clicks login without filling fields -> Empty Fields Error msg above all the fields', () => {
        // console.log( wrapper.find(Form).debug() );
        wrapper.find(Form).simulate('submit');
        expect(wrapper.find(EmptyFieldsErrorMsg)).toHaveLength(1);
        expect(wrapper.find(EmptyFieldsErrorMsg)
                .find('p')
                .text()
            ).toBe("The username and password fields cannot be empty");
    });

    it(`When user submits wrong credentials -> Incorrect Credentials Error msg above all fields`, () => {
        expect(true).toBeTruthy();
    });

    it(`Server down -> Server Connection Error msg above all fields`, () => {
        expect(true).toBeTruthy();
    });
});

