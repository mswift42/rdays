'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import About from 'components/About.js';

describe('About', () => {
    let AboutComponent;

    beforeEach(() => {
        AboutComponent = createComponent(About);
    });

    it('should have its component name as default className', () => {
        expect(AboutComponent._store.props.className).toBe('About');
    });
});
