
# Tarefas

Aplicação de terminal para criação e modificação de tarefas. Feito no ambito da disciplina de Tecnologias Web 2

## Funcionalidades

- **Adicionar Tarefa**: Crie novas tarefas com uma descrição.
- **Listar Tarefas**: Veja todas as tarefas cadastradas, incluindo o status de conclusão.
- **Remover Tarefa**: Exclua tarefas pelo ID.
- **Marcar como Concluída**: Atualize o status de uma tarefa para concluída.
- **Filtrar Tarefas**: Pesquise tarefas por palavras-chave.

## Estrutura do Projeto

- **`controllers/taskController.js`**: Contém a lógica para manipulação de tarefas.
- **`models/task.js`**: Gerencia a leitura e escrita de tarefas no arquivo `tasks.json`.
- **`models/tasks.json`**: Armazena as tarefas em formato JSON.
- **`views/cli.js`**: Interface de linha de comando para interação com o usuário.

## Como Usar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório:

```sh
   git clone https://github.com/MauroFurtado/tarefas.git
```
