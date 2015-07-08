'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');


var RdaysApp = React.createClass({
  render: function() {
    return (
      <div className="main">
            <p>Some Text</p>
      </div>
    );
  }
});

module.exports = RdaysApp;
