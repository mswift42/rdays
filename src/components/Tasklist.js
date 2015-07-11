'use strict';

var React = require('react/addons');


require('styles/Tasklist.sass');

var Tasklist = React.createClass({

    displayTasks: function() {
        var tasks = [{summary: 'task1'}, {summary: 'task2'}];
      var tasklist = [];
        for (var i = 0; i < tasks.length; i++) {
            tasklist.push(<p>{tasks[i].summary}</p>);
        }
        return tasklist;

    },


  render: function () {
    return (
        <div className="Tasklist">
            { this.displayTasks() }
        </div>
      );
  }
});

module.exports = Tasklist;
