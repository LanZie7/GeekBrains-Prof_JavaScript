<template>
  <div>
    <ul class="wrapper item-grid">
      <li v-for="product in clothesByGender" :key="product.id" class="item-grid__item">
        <router-link :to="{ name: 'product', params: { id: product.id}}">
          <img class="product-image" :src="makeImagePath(product)" alt="">
          <p class="product-title">{{ product.name }}</p>
          <p><em>${{ product.price }}</em></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { imagePath } from "../mixins/imagePath";

export default {
  name: "genderOverview",
  mixins: [imagePath],
  data() {
    return {
      productsByGenderId: null
    }
  },
  created() {
    this.recommendRandomOutfit()
  },
  computed: {
    gender() {
      return this.$route.params.gender;
    },
    productsByGender() {
      return this.$store.getters.productsByGender(this.gender);
    },
    clothesByGender() {
      return this.$store.getters.product(this.productsByGenderId);
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id)
    },
    productsByGenderIdCategory(gender) {
      let allProductsInCategory = this.productsByGender.filter(prod => prod.gender === gender);
      let randomIndex = Math.floor(Math.random() * allProductsInCategory.length);
      return allProductsInCategory[randomIndex];
    },
    recommendRandomOutfit() {
      this.clothesByGender = this.productsByGenderIdCategory("men")
      this.clothesByGender = this.productsByGenderIdCategory("women")
    }
  }
}
</script>

<style>
  .item-grid {
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item-grid__item {
    box-sizing: border-box;
    text-align: center;
    padding: 1rem;
    flex: 0 0 33.3%;
    @media only screen and (max-width: 832px) {
      flex: 0 0 50%;
    }
    @media only screen and (max-width: 475px) {
      flex: 0 0 100%;
    }
  }
</style>
