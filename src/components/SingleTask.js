'use strict';

var React = require('react/addons');


require('styles/SingleTask.sass');

var SingleTask = React.createClass({

  render: function () {
    return (
        <div className="SingleTask">
          <p>Content for SingleTask</p>
        </div>
      );
  }
});

module.exports = SingleTask;
