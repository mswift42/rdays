'use strict';

var React = require('react/addons');


require('styles/About.sass');

var About = React.createClass({

  render: function () {
    return (
        <div className="About">
          <p>Content for About</p>
        </div>
      );
  }
});

module.exports = About;
