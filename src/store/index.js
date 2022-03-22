import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { name: 'Banana', price: 50 },
      { name: 'Apple', price: 100 },
      { name: 'Television set', price: 60000 },
      { name: 'Mobile phone ', price: 155 },
      { name: 'Laptops ', price: 50000 }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
