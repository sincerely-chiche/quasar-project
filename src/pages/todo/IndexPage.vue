<template>
  <q-page class="container mx-auto pt-20 sm:px-20">

    <div class="sm:w-2/5 sm:mx-auto">
      <p class="text-center text-3xl font-semibold text-white pb-4">Awesome Todo</p>
      <q-form @submit="saveTodo" class="q-gutter-md">
        <q-input dark v-model="todo" debounce="500" width="50" filled placeholder="Enter name of todo" hint="Add todo">
          <template v-slot:append>
            <q-icon @click="saveTodo" class="cursor-pointer" name="add" />
          </template>
        </q-input>

      </q-form>
      <transition-group name="list" appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <q-card v-for="todo in todos" :key="todo.id" class="my-card mt-6 bg-white rounded-md shadow-sm">
          <q-card-section class="flex items-center justify-between ">
            <span class="text-grey-10">
              {{ todo.content }}
            </span>
            <div>
              <q-btn size="sm" class="py-2.5 px-2.5 rounded-md" unelevated color="grey-3" text-color="grey-7"
                icon="check" />
              <q-btn @click="deleteTodoFromDb(todo)" size="sm" class="py-2.5 px-2.5 rounded-md ml-2" unelevated
                color="red-5" text-color="grey-3" icon="cancel" />
            </div>
          </q-card-section>
        </q-card>
      </transition-group>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { Todo } from 'src/interfaces/Todo';
import { onMounted, ref } from 'vue';
import { useTodoCollection } from "../../composables/firebase";
import { computed } from '@vue/reactivity';
import { useTodoStore } from 'src/stores/todo';

const todo = ref<string>("");
const store = useTodoStore();
// const todos = ref<Todo[]>([
// ]);
const { addTodo, getAllTodos, deleteTodo } = useTodoCollection();
const todos = computed((): Todo[] => {
  return store.getAllTodos;
})


const saveTodo = async () => {
  const newTodo: Todo = {
    content: todo.value,
    done: false,
    createdAt: Date.now()
  }
  await addTodo(newTodo);
  await getAllTodos();
  todo.value = "";

}
const deleteTodoFromDb = async (todo: Todo) => {
  await deleteTodo(todo);
  todos.value.splice(todos.value.indexOf(todo), 1);
}


onMounted(async () => {
  await getAllTodos();
})


</script>

<style scoped>
.list-leave-active {
  position: absolute;

}
</style>
