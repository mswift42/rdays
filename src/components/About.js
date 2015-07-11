'use strict';

var React = require('react/addons');


require('styles/About.sass');

var About = React.createClass({

  render: function () {
    return (
        <div className="About">
            <h2>Days</h2>
          <p>a simple Task planner implemented in</p>
            <p>React.js</p>
        </div>
      );
  }
});

module.exports = About;
