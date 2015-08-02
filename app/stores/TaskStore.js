import alt from '../libs/alt';
import TaskActions from '../actions/TaskActions';
import findIndex from '../libs/find_index';

class TaskStore {
    constructor() {
        this.bindActions(TaskActions);
        this.tasks = [];
    }
    create(task) {
        const tasks = this.tasks;
        this.setState({
            tasks: tasks.concat(task)
        });
    }
    update(task) {
        const tasks = this.tasks;
        const targetId = findIndex(tasks, 'id', task.id);

        tasks[targetId].summary = task.summary;
        this.setState({tasks});
    }
    delete(task) {
        const tasks = this.tasks;
        const targetId = findIndex(tasks, 'id', task.id);
        this.setState({
            tasks: tasks.slice(0, targetId).concat(tasks.slice(targetId+1))
        });
    }
}
export default alt.createStore(TaskStore, 'TaskStore');