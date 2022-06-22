import { defineStore } from 'pinia';
import { Todo } from 'src/interfaces/Todo';


export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[]
  }),

  getters: {
    getAllTodos(state) {
      return state.todos;
    }
  },

  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    }
  }
});
