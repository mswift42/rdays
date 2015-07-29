import React from 'react';
import Tasks from './Tasks';

export default class App extends React.Component {
    render() {
        const tasks = [
            {summary: "task1"},
            {summary: "task2"},
            {summary: "task3"}
        ];
        
        return (
            <div>
            <Tasks items={tasks} />
            </div>
        );
    }
}