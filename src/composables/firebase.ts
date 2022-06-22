import { collection } from "@firebase/firestore";
import { addDoc, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "src/boot/firebase";
import { Todo } from "src/interfaces/Todo";
import { useTodoStore } from "src/stores/todo";



export const todoCollection = collection(db, "todos");

export function useTodoCollection() {

  const store = useTodoStore();

  const addTodo = async (todo: Todo) => {
    try {
      await addDoc(todoCollection, todo);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  const deleteTodo = async (todo: Todo) => {
    try {
      await deleteDoc(doc(todoCollection, todo.id));
    } catch (error) {
      console.log(error);
    }
  }

  const getAllTodos = async () => {
    const querySnapshot = await getDocs(todoCollection);
    store.todos = [];
    querySnapshot.forEach((doc) => {

      const newTodo: Todo = {
        id: doc.id,
        content: (doc.data() as Todo).content,
        done: (doc.data() as Todo).done,
        createdAt: (doc.data() as Todo).createdAt
      }

      store.addTodo(newTodo);
    });
  }

  return {
    addTodo, getAllTodos, deleteTodo
  }
}

