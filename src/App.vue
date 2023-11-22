<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos/>
      <TodosComponent/>
    </div>
  </div>
</template>

<script>
import TodosComponent from './components/TodosComponent.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue';

export default {
  components: {
    TodosComponent,
    AddTodo,
    FilterTodos,
  }
}
</script>

<style>
body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
