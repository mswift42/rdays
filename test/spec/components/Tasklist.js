'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Tasklist from 'components/Tasklist.js';

describe('Tasklist', () => {
    let TasklistComponent;

    beforeEach(() => {
        TasklistComponent = createComponent(Tasklist);
    });

    it('should have its component name as default className', () => {
        expect(TasklistComponent._store.props.className).toBe('Tasklist');
    });
});
