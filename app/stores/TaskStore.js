import alt from '../libs/alt';
import TaskActions from '../actions/TaskActions';
import findIndex from '../libs/find_index';

class TaskStore {
    constructor() {
        this.bindActions(TaskActions);
        this.tasks = this.tasks || [];
    }
    create(task) {
        const tasks = this.tasks;
        this.setState({
            tasks: tasks.concat(task)
        });
    }
    update(task) {
        const tasks = this.tasks;
        const targetId = findIndex(tasks, (o) => o.id === task.id);

        tasks[targetId].summary = task.summary;
        this.setState({tasks});
    }
    delete(id) {
        const tasks = this.tasks;
        const targetId = findIndex(tasks, (o) => o.id === task.id);
        this.setState({
            tasks: tasks.slice(0, targetId).concat(tasks.slice(targetId+1))
        });
    }
}
export default alt.createStore(TaskStore, 'TaskStore');
