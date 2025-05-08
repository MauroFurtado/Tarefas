const { loadTasks, saveTasks } = require('../models/task');

function addTask(description, priority = 'Média') {
    const tasks = loadTasks();
    const newTask = {
        id: Date.now(),
        description,
        createdAt: new Date().toISOString(),
        completed: false,
        priority // Adiciona o campo de prioridade
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

function filterByPriority(priority) {
    const tasks = loadTasks();
    return tasks.filter(task => task.priority.toLowerCase() === priority.toLowerCase());
}

function listTasksByPriority() {
    const tasks = loadTasks();
    const priorityOrder = { Alta: 1, Média: 2, Baixa: 3 };
    return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

module.exports = {
    addTask,
    listTasks,
    removeTask,
    markAsCompleted,
    filterTasks,
    filterByPriority,
    listTasksByPriority
};
