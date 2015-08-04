import React from 'react';
import Task from './Task';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.renderTask = this.renderTask.bind(this);
  }
  render() {
    const tasks = this.props.items;

    return <ul className='tasks'>{tasks.map(this.renderTask)}</ul>;
  }
  renderTask(task) {
    return (
      <li className='task' key={`task${task.id}`}>
        <Task value={task.summary}
          onEdit={this.props.onEdit.bind(null, task.id)}/>
      </li>
    );
  }
}