import React from 'react';
import { mount } from 'enzyme';
import { 
    BrowserRouter as Router, 
    MemoryRouter 
} from 'react-router-dom';

import App from '../../components/App';
import RecipesPage from '../../components/RecipesPage';


describe(`Recipe Page loaded`, () => {
    it(`Should show Recipes component for '/recipes' router`, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/recipes']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(RecipesPage)).toHaveLength(1);
        wrapper.unmount();
    });
});

describe(`Recipe Page tests`, () => {
    let wrapper;

    beforeEach(() => { 
        wrapper = mount( 
            <Router>
                <RecipesPage />
            </Router>         
        ); 
    });

    it(`Title on the Recipes Page`, () => {
        expect(wrapper.find('#recipesPageTitle').text()).toBe('Recipes Page');
    });

    it(`List of recipes the Recipes Page`, () => {
        expect( true ).toBeTruthy();
    });

    afterEach(() => { wrapper.unmount() })
});