'use strict';

describe('RdaysApp', () => {
  let React = require('react/addons');
  let RdaysApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    RdaysApp = require('components/RdaysApp.js');
    component = React.createElement(RdaysApp);
  });

  it('should create a new instance of RdaysApp', () => {
    expect(component).toBeDefined();
  });
});
