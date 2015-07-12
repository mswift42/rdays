'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import SingleTask from 'components/SingleTask.js';

describe('SingleTask', () => {
    let SingleTaskComponent;

    beforeEach(() => {
        SingleTaskComponent = createComponent(SingleTask);
    });

    it('should have its component name as default className', () => {
        expect(SingleTaskComponent._store.props.className).toBe('SingleTask');
    });
});
