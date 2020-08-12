<template>
  <div class="home">
    <div class="promo center">
      <div class="promo__content">
        <div class="promo__content__text">
          <h1 class="promo__h1">THE BRAND</h1>
          <h2 class="promo__h2">OF LUXURIOUS <span>FASHION</span></h2>
        </div>
      </div>
    </div>

    <section class="category center">
      <section class="category__box">
        <article class="category__big1">
          <div class="badge">
            <h4 class="badge__text">HOT DEAL</h4>
            <h3 class="badge__span__text"><span>FOR MEN</span></h3>
          </div>
        </article>
        <article class="category__small1">
          <div class="badge">
            <h4 class="badge__text">LUXURIOUS & TRENDY</h4>
            <h3 class="badge__span__text"><span>ACCESSORIES</span></h3>
          </div>
        </article>
      </section>
      <section class="category__box">
        <article class="category__small2">
          <div class="badge">
            <h4 class="badge__text">30% OFFER</h4>
            <h3 class="badge__span__text"><span>WOMEN</span></h3>
          </div>
        </article>
        <article class="category__big2">
          <div class="badge">
            <h4 class="badge__text">NEW ARRIVALS</h4>
            <h3 class="badge__span__text"><span>FOR KIDS</span></h3>
          </div>
        </article>
      </section>
    </section>

    <div class="featured__items">
      <h3>Featured Items</h3>
      <p class="featured__items__description">Shop for items based on what we featured in this
        week</p>
      <ul class="featured__product__box center">
          <li v-for="product in featuredProducts" :key="product.id" class="featured__product">
            <router-link :to="{ name: 'product', params: { id: product.id} }">
              <img class="product__img" :src="makeImagePath(product)" alt="product photo">
              <div class="featured__product__content">
                <a href="#" class="featured__product__name">{{ product.name }}</a>
                <p class="featured__product__price"><span>${{ product.price }}</span></p>
              </div>
            </router-link>
          </li>
      </ul>
        <router-link to="/all-products" class="featured__product__button">
          <a href="#" class="button" style="margin-top: 15px">Browse All Products →</a>
        </router-link>
    </div>

    <section class="super__offer center">
      <article class="super__offer__pic">
        <div class="badge__super__offer">
          <h2 class="badge__super__offer__text">30% <span>OFFER</span></h2>
          <h3 class="badge__super__offer__span__text">FOR WOMEN</h3>
        </div>
      </article>
      <article class="super__offer__details">
        <article class="super__offer__box">
          <article class="super__offer__info-img">
            <img src="../assets/img/super_offers/img/super_offer_img-1.png" alt="img 1">
          </article>
          <article class="super__offer__info-text">
            <h3 class="super__offer__info-title">Free Delivery</h3>
            <p class="super__offer__info-description">
              Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive
              models.
            </p>
          </article>
        </article>
        <article class="super__offer__box">
          <article class="super__offer__info-img">
            <img src="../assets/img/super_offers/img/super_offer_img-2.png" alt="img 1">
          </article>
          <article class="super__offer__info-text">
            <h3 class="super__offer__info-title">Sales & discounts</h3>
            <p class="super__offer__info-description">
              Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive
              models.
            </p>
          </article>
        </article>
        <article class="super__offer__box">
          <article class="super__offer__info-img">
            <img src="../assets/img/super_offers/img/super_offer_img-3.png" alt="img 1">
          </article>
          <article class="super__offer__info-text">
            <h3 class="super__offer__info-title">Quality assurance</h3>
            <p class="super__offer__info-description">
              Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive
              models.
            </p>
          </article>
        </article>
      </article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { imagePath } from "../mixins/imagePath";

export default {
  name: 'home',
  mixins: [imagePath],
  computed: {
    featuredProducts: function() {
      return this.$store.getters.featuredProducts.slice(0, 4);
    }
  }
};
</script>

<style scoped>
  .featured__product {
    list-style-type: none;
  }
</style>
