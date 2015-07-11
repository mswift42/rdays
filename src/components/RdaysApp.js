'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');
require('./Tasklist');

var RdaysApp = React.createClass({
  render: function() {
      return (
          <div>
            <p>Content:</p>
              <tasklist />
              </div>
    );
  }
});

module.exports = RdaysApp;
