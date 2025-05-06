const fs = require('fs');
const path = './models/tasks.json';

function loadTasks() {
    if (!fs.existsSync(path)) return [];
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

function saveTasks(tasks) {
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

module.exports = { loadTasks, saveTasks };
