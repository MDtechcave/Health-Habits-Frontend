import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),

  getters: {
    cartCount: (state) => state.cart.length
  },

  actions: {
    addToCart(item) {
      this.cart.push(item)
    }
  }
})
