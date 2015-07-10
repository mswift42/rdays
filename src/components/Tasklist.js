'use strict';

var React = require('react/addons');


require('styles/Tasklist.sass');

var Tasklist = React.createClass({

  render: function () {
    return (
        <div className="Tasklist">
          <p>Content for Tasklist</p>
        </div>
      );
  }
});

module.exports = Tasklist;
