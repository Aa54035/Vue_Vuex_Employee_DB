import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { name: 'Orange', price: 30 },
      { name: 'Banana', price: 50 },
      { name: 'Apple', price: 100 },
      { name: 'Television set', price: 60000 },
      { name: 'Mobile phone ', price: 155 },
      { name: 'Laptops ', price: 50000 }
    ]
  },
  getters: {

    saleProducts: state => {
      var saleProducts = state.products.map(item => {
        return {
          name: item.name,
          price: item.price / 2
        }
      });
      return saleProducts;
    }

  },
  mutations: {
    reducePrice: state => {
      state.products.forEach(item => { item.price -= 1 }
      )
    }
  },


  actions: {
    reducePrice: context => {
      setTimeout(() => {
        context.commit('reducePrice')
      }, 2000);

    }

  },
  modules: {
  }
})
