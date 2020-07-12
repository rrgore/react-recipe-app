import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../../components/HomePage';
import App from '../../components/App';
import { MemoryRouter } from 'react-router';

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
    expect(wrapper.find('#recipeAppTitle').text()).toBe('Recipe App');
    wrapper.unmount();
});

it('Should render Signup button correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('#signUp')).toHaveLength(1);
    wrapper.unmount();
});

it('Should render Login button correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('#login')).toHaveLength(1);
    wrapper.unmount();
});

it('Should render Pre Login String correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('#preLoginString').text()).toBe('Add and see your recipes, along with the ingredients and tags');
    wrapper.unmount();
});