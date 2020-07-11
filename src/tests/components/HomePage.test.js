import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../../components/HomePage';
import App from '../../components/App';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

it('Should show Home component for / router', () => {
    const component = mount(
        <MemoryRouter initialentries="{['/']}">
            <App />
        </MemoryRouter>      
    );
    expect(component.find(HomePage)).toHaveLength(1);
});

it('Should render Home page title correctly', () => {
    const component = shallow(<HomePage />);
    expect(component.find('#title').text()).toBe('Recipe App');
});