const { loadTasks, saveTasks } = require('../models/task');

function addTask(description) {
    const tasks = loadTasks();
    const newTask = {
        id: Date.now(),
        description,
        createdAt: new Date().toISOString(),
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
}

function listTasks() {
    return loadTasks();
}

function removeTask(id) {
    let tasks = loadTasks();
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
}

function markAsCompleted(id) {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        saveTasks(tasks);
    }
}

function filterTasks(keyword) {
    const tasks = loadTasks();
    return tasks.filter(task => task.description.toLowerCase().includes(keyword.toLowerCase()));
}

module.exports = {
    addTask,
    listTasks,
    removeTask,
    markAsCompleted,
    filterTasks
};
