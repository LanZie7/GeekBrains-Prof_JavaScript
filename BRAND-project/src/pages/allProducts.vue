<template>
  <div class="featured__items">
    <h3> All Featured Items</h3>
    <ul class="featured__product__box center">
      <li v-for="product in allProducts" :key="product.id" class="featured__product">
        <router-link :to="{ name: 'product', params: {id: product.id} }">
          <img class="product__img" :src="makeImagePath(product)" alt="product photo">
          <div class="featured__product__content">
            <a href="#" class="featured__product__name">{{ product.name }}</a>
            <p class="featured__product__price"><span>${{ product.price }}</span></p>
          </div>
        </router-link>
        <button @click="addToCart" class="product__add">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { imagePath } from '../mixins/imagePath';

export default {
  name: 'all-products',
  mixins: ['imagePath'],
  data() {
    return this.$store.products
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.id)
    }
  },
  computed: {
    allProducts: function () {
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped>

</style>
