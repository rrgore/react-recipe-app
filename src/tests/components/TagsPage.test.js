import React from 'react';
import { mount } from 'enzyme';
import { 
    BrowserRouter as Router, 
    MemoryRouter 
} from 'react-router-dom';

import App from '../../components/App';
import TagsPage from '../../components/TagsPage';


describe(`Tags Page loaded`, () => {
    it(`Should show Tags component for '/tags' router`, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/tags']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(TagsPage)).toHaveLength(1);
        wrapper.unmount();
    });
});

describe(`Tags Page tests`, () => {
    let wrapper;

    beforeEach(() => { 
        wrapper = mount( 
            <Router>
                <TagsPage />
            </Router>             
        );
    });

    it(`Title on the Tags Page`, () => {
        expect(wrapper.find('#tagsPageTitle').text()).toBe('Tags Page');
    });

    it(`List of recipes the Tags Page`, () => {
        expect( true ).toBeTruthy();
    });

    afterEach(() => { wrapper.unmount() })
});