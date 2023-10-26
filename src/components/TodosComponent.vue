<template>
  <div>
    <div>Todos</div> 
    <div class="todos">
        <div v-for="todo in allTodos" :key="todo.id" class="todo">
          {{ todo.title }}
          <i class="fas fa-trash-alt"></i>
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  /*
    getters are called in computed
    actions are called in methods
  */
  methods: {
    ...mapActions(['fetchTodos']), // spread operation is needed to allow local methods

  },
  computed: mapGetters(['allTodos']),
  created (){
    this.fetchTodos()
  }
}
</script>

<style scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo{
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

</style>