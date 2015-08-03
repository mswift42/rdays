import React from 'react';
import Tasks from './Tasks';
import uuid from 'node-uuid';
import TaskActions from '../actions/TaskActions';
import TaskStore from '../stores/TaskStore';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.storeChanged = this.storeChanged.bind(this);
        this.state = TaskStore.getState();
    }
    componentDidMount() {
        TaskStore.listen(this.storeChanged);
    }
    componentWillUnmount() {
        TaskStore.unlisten(this.storeChanged);
    }
    storeChanged(state) {
        this.setState(state);
    }
    render() {
        const tasks = this.state.tasks;

        return (
            <div>
                <button onClick={this.addItem}>+</button>
                <Tasks items={tasks} onEdit={this.itemEdited} />
            </div>
        );

    }
    addItem() {
        TaskActions.create({id: uuid.v4(), summary: 'New Task'});
    }
    ItemEdited(id, summary) {
        if(summary) {
            TaskActions.update({id, summary});
        } else {
            TaskActions.delete(id);
        }
    }
}
