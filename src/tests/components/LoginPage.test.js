import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginPage from '../../components/LoginPage';
import App from '../../components/App';
import { MemoryRouter } from 'react-router';

it(`Should show Login component for '/login' router`, () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/login']}>
            <App />
        </MemoryRouter>
    );
    expect(wrapper.find(LoginPage)).toHaveLength(1);
    wrapper.unmount();
});

it('Should render Login page title correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('#loginPageTitle').text()).toBe('Login Page');
    wrapper.unmount();
});

it('Should render Email field correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('#email')).toHaveLength(1);
    wrapper.unmount();
});

it('Should render Password field correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('#password')).toHaveLength(1);
    wrapper.unmount();
});

it('Should render Login button correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('#login')).toHaveLength(1);
    wrapper.unmount();
});

it('Should not render error msg div', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('#errorMsg')).not.toBeVisible();
    wrapper.unmount();
});

it('When user clicks login without filling fields -> Error msg above all the fields', () => {
    const wrapper = shallow(<LoginPage />);
    wrapper.find('#login').simulate('click');
    expect(wrapper.find('#errorMsg')).toBeVisible();
    expect(wrapper.find('#errorMsg').text()).toBe("The username and password fields cannot be empty");
    wrapper.unmount();
});