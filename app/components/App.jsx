import React from 'react';
import Tasks from './Tasks';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.itemEdited = this.itemEdited.bind(this);
        this.state = {
             tasks: [
                {summary: "task1"},
                {summary: "task2"},
                {summary: "task3"}
            ]};
        }
        render() {
            const tasks = this.state.tasks;

            return (
                <div>
                <button onClick={this.addItem}>+</button>
                <Tasks items={tasks} />
                </div>
            );
        }
        addItem() {
            this.setState({
                tasks: this.state.tasks.concat([{
                    summary: "new task"
                }])
            });
        }
}