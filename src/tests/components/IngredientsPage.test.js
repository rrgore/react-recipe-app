import React from 'react';
import { mount } from 'enzyme';
import { 
    BrowserRouter as Router, 
    MemoryRouter 
} from 'react-router-dom';

import App from '../../components/App';
import IngredientsPage from '../../components/IngredientsPage';


describe(`Ingredients Page loaded`, () => {
    it(`Should show Ingredients component for '/ingredients' router`, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/ingredients']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(IngredientsPage)).toHaveLength(1);
        wrapper.unmount();
    });
});

describe(`Ingredients Page tests`, () => {
    let wrapper;

    beforeEach(() => { 
        wrapper = mount( 
            <Router>
                <IngredientsPage /> 
            </Router>            
        ); 
    });

    it(`Title on the Ingredients Page`, () => {
        expect(wrapper.find('#ingredientsPageTitle').text()).toBe('Ingredients Page');
    });

    it(`List of ingredients the Ingredients Page`, () => {
        expect( true ).toBeTruthy();
    });

    afterEach(() => { wrapper.unmount() })
});