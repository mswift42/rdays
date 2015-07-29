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
  renderNote(task, i) {
    return (
      <li className='task' key={'task${i}'}>
        <Task value={task.summary} />
      </li>
    );
  }
}