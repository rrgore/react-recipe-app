import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../../components/HomePage';
import App from '../../components/App';
import { MemoryRouter } from 'react-router';

xit('Should show Home component for / router', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>      
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
    wrapper.unmount();
});

xit('Should render Home page title correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('#recipeAppTitle').text()).toBe('Recipe App');
    wrapper.unmount();
});

xit('Should render Signup button correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('#signUp')).toHaveLength(1);
    wrapper.unmount();
});

xit('Should render Login button correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('#login')).toHaveLength(1);
    wrapper.unmount();
});

xit('Should render Pre Login String correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('#preLoginString').text()).toBe('Add and see your recipes, along with the ingredients and tags');
    wrapper.unmount();
});