const readline = require('readline');
const taskController = require('../controllers/taskController');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log(`
===== Gerenciador de Tarefas =====
1. Adicionar tarefa
2. Listar tarefas
3. Remover tarefa
4. Marcar como concluída
5. Filtrar tarefas por prioridades
6. Pesquisar tarefa
7. Sair
`);
}

function prompt() {
    showMenu();
    rl.question('Escolha uma opção: ', answer => {
        switch (answer) {
            case '1':
                rl.question('Descrição da tarefa: ', desc => {
                    rl.question('Prioridade (Alta, Média, Baixa): ', priority => {
                        taskController.addTask(desc, priority || 'Média'); // Define prioridade padrão como "Média"
                        console.log('Tarefa adicionada!');
                        prompt();
                    });
                });
                break;
            case '2':
                const tasks = taskController.listTasksByPriority();
                if (tasks.length === 0) {
                    console.log('Nenhuma tarefa encontrada.');
                } else {
                    tasks.forEach(task => {
                        console.log(`${task.id} | ${task.completed ? '[✔]' : '[ ]'} ${task.description} (Prioridade: ${task.priority}, Criada em: ${task.createdAt})`);
                    });
                }
                prompt();
                break;
            case '3':
                rl.question('ID da tarefa para remover: ', id => {
                    taskController.removeTask(Number(id));
                    console.log('Tarefa removida!');
                    prompt();
                });
                break;
            case '4':
                rl.question('ID da tarefa para marcar como concluída: ', id => {
                    taskController.markAsCompleted(Number(id));
                    console.log('Tarefa marcada como concluída!');
                    prompt();
                });
                break;
            case '5':
                rl.question('Prioridade para filtrar (Alta, Média, Baixa): ', priority => {
                    const filtered = taskController.filterByPriority(priority);
                    if (filtered.length === 0) {
                        console.log('Nenhuma tarefa encontrada com essa prioridade.');
                    } else {
                        filtered.forEach(task => {
                            console.log(`${task.id} | ${task.completed ? '[✔]' : '[ ]'} ${task.description} (Prioridade: ${task.priority}, Criada em: ${task.createdAt})`);
                        });
                    }
                    prompt();
                });
                break;
            case '6':
                rl.question('Palavra-chave para pesquisar: ', keyword => {
                    const filtered = taskController.filterTasks(keyword);
                    if (filtered.length === 0) {
                        console.log('Nenhuma tarefa encontrada com essa palavra-chave.');
                    } else {
                        filtered.forEach(task => {
                            console.log(`${task.id} | ${task.completed ? '[✔]' : '[ ]'} ${task.description} (Prioridade: ${task.priority}, Criada em: ${task.createdAt})`);
                        });
                    }
                    prompt();
                });
                break;
            case '7':
                rl.close();
                break;
            default:
                console.log('Opção inválida.');
                prompt();
                break;
        }
    });
}

prompt();
