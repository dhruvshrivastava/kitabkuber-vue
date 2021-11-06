import { toTypeString } from '@vue/shared'
import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: " ",
    buy: {
      item: []
    },
    rent: {
      item: []
    }
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('buy')) {
        state.buy = JSON.parse(localStorage.getItem('buy'))
      } else {
        localStorage.setItem('buy', JSON.stringify(state.buy))
      }
      if (localStorage.getItem('rent')) {
        state.buy = JSON.parse(localStorage.getItem('rent'))
      } else {
        localStorage.setItem('rent', JSON.stringify(state.rent))
      }


      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true

      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    addToBuy(state, item) {
      state.buy.item.push(item)
    },
    addToRent(state, item) {
      state.rent.item.push(item)
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
