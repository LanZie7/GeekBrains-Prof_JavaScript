import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [],
    products: [
      {
        id: 1001,
        name: "T-shirt",
        featured: true,
        price: 52,
        color: "white",
        material: "cotton",
        img: "1001.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People T-Shirt",
        designer: "BINBURHAN"
      },
      {
        id: 1002,
        name: "T-shirt",
        featured: true,
        price: 60,
        color: "red",
        material: "cotton",
        img: "1002.png",
        gender: "women",
        gender_collection: "Women Collection",
        description: "Mango People T-Shirt",
        designer: "BINBURHAN"
      },
      {
        id: 1003,
        name: "Jacket",
        featured: true,
        price: 68,
        color: "blue",
        material: "cotton",
        img: "1003.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Jacket",
        designer: "BINBURHAN"

      },
      {
        id: 1004,
        name: "T-shirt",
        featured: true,
        price: 47,
        color: "white",
        material: "cotton",
        img: "1004.png",
        gender: "women",
        gender_collection: "Women Collection",
        description: "Mango People T-Shirt",
        designer: "BINBURHAN"
      },
      {
        id: 1005,
        name: "T-shirt",
        featured: true,
        price: 50,
        color: "black",
        material: "cotton",
        img: "1005.png",
        gender: "women",
        gender_collection: "Women Collection",
        description: "Mango People T-Shirt",
        designer: "BINBURHAN"
      },
      {
        id: 1006,
        name: "Jacket",
        featured: true,
        price: 64,
        color: "blue",
        material: "cotton",
        img: "1006.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Jacket",
        designer: "BINBURHAN"
      },
      {
        id: 1007,
        name: "Trousers",
        featured: true,
        price: 64,
        color: "yellow",
        material: "cotton",
        img: "1007.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Trousers",
        designer: "BINBURHAN"
      },
      {
        id: 1008,
        name: "Trousers",
        featured: true,
        price: 60,
        color: "white",
        material: "cotton",
        img: "1008.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Trousers",
        designer: "BINBURHAN"
      },
      {
        id: 1009,
        name: "Jacket",
        price: 64,
        color: "black",
        material: "cotton",
        img: "1009.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Jacket",
        designer: "BINBURHAN"
      },
      {
        id: 1010,
        name: "Jacket",
        price: 64,
        color: "brown",
        material: "cotton",
        img: "1010.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Jacket",
        designer: "BINBURHAN"
      },
      {
        id: 1011,
        name: "T-Shirt",
        price: 60,
        color: "grey",
        material: "cotton",
        img: "1011.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People T-Shirt",
        designer: "BINBURHAN"
      },
      {
        id: 1012,
        name: "Trousers",
        price: 60,
        color: "black",
        material: "cotton",
        img: "1012.png",
        gender: "women",
        gender_collection: "Women Collection",
        description: "Mango People Trousers",
        designer: "BINBURHAN"
      },
      {
        id: 1013,
        name: "Trousers",
        price: 60,
        color: "blue",
        material: "cotton",
        img: "1012.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Trousers",
        designer: "BINBURHAN"
      },
      {
        id: 1014,
        name: "Jacket",
        price: 60,
        color: "green",
        material: "cotton",
        img: "1012.png",
        gender: "men",
        gender_collection: "Men Collection",
        description: "Mango People Jacket",
        designer: "BINBURHAN"
      }
    ],
  },
  mutations: {
    addToCart(state, payload) {
      state.cartItems.push(Number(payload));
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cartItems.indexOf(Number(payload));
      state.cartItems.splice(indexToDelete, 1)
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
    }
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0];
    },
    featuredProducts: (state) => {
      return state.products.filter(p => p.featured);
    },
    productsByGender: (state) => (gender) => {
      return state.products.filter(p => p.gender === gender);
    },
    cartItems: (state) => {
      return state.cartItems.map(
        itemId => state.products.find(
          product => product.id === itemId
        )
      )
    },
  }
});
