import React from 'react';
import Task from './Task';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.renderTask = this.renderTask.bind(this);
    }
    render() {
        const tasks = [
            {summary: "task1"},
            {summary: "task2"},
            {summary: "task3"}
        ];
        return (
            <div>
                <ul>{tasks.map(this.renderTask)}</ul>
            </div>
        );
    }
    renderTask(task, i) {
        return (
            <li key={'note${i}'}>
                <Task value={task.summary} />
                </li>
        );
    }
}