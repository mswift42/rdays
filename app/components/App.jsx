import React from 'react';
import Tasks from './Tasks';
import uuid from 'node-uuid';
import AltContainer from 'alt/AltContainer';
import TaskActions from '../actions/TaskActions';
import TaskStore from '../stores/TaskStore';
import connect from '../decorators/connect';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
            <button onClick={this.addItem}>+</button>
            <AltContainer
            stores={[TaskStore]}
            inject={{
                items: () => TaskStore.getState().tasks
            }}
            >
            <Tasks onEdit={this.itemEdited} />
            </AltContainer>
            </div>
        );

    }
    addItem() {
        TaskActions.create({id: uuid.v4(), summary: 'New Task'});
    }
    itemEdited(id, summary) {
        if(summary) {
            TaskActions.update({id, summary});
        } else {
            TaskActions.delete(id);
        }
    }
}
