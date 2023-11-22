import axios from 'axios'

// state stores the data
const state = {
  todos: [],
}

// getters accesses the data
const getters = {
  allTodos: (state) => state.todos,
}

// actions are methods to manage data. e.g. CRUD operations
const actions = {
  async fetchTodos ({commit}) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

    commit('setTodos', response.data) 
    /* 2. 'commit 'calls setTodos mutation with 'response.data' as a parameter
        that is to be passed to the 'todos' parameter (2nd parameter).
        state parameter (1st parameter) can be skipped. */
  }, 

  async addTodo ({commit}, title ) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false,
    })
    commit('newTodo', response.data) 
  },
  
  async deleteTodo ({commit}, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo', id)
  },

  async filterTodos ({commit}, e) {
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

    commit('setTodos', response.data) 
  }, 


}

// updates the state base on the results of mutation
const mutations = {
  setTodos: (state, todos) => (state.todos = todos), // 1. function that sets todos state as todos taken from the parameter
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
}

export default {
  state,
  getters,
  actions,
  mutations,
}