'use strict';

var React = require('react/addons');


require('styles/SingleTask.sass');

var SingleTask = React.createClass({

  render: function () {
    return (
        <div className="SingleTask">
            <h3 className="tasksummary">{task.summary}</h3>
        </div>
      );
  }
});

module.exports = SingleTask;
