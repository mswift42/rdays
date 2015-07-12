'use strict';

var React = require('react/addons');


require('styles/Tasklist.sass');
require('./SingleTask');
var Tasklist = React.createClass({

    taskList: function() {
      return [{summary: 'task1'}, {summary: 'task2'}];
    },

    getInitialState: function() {
        return {
            tasklist: [
                {summary: 'task1'},
                {summary: 'task2'}
            ]
        };
    },

  render: function () {
    return (
        (<div className="Tasklist">
         {this.state.tasklist.map(function(task, i) {
             return (
                     <SingleTask key={i}>{task.summary}</SingleTask>
             );
         })}
         </div>
        )
    );
  }
});

module.exports = Tasklist;
