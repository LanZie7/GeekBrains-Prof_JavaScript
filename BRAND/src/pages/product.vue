<template>
  <div class="product">
    <section class="new__arrivals__single__page">
      <article class="new__arrivals__single__page__img"><img :src="makeImagePath(product)" alt="">
      </article>
      <article class="new__arrivals__single__page__women__description">
        <h3 class="new__arrivals__single__page__women__description__h3">{{ product.gender_collection }}</h3>
        <div class="underline"></div>
        <h2 class="new__arrivals__single__page__women__description__h2">{{ product.description }}</h2>

        <article class="new__arrivals__single__page__women__description__details">
          <div class="new__arrivals__single__page__women__description__details__text">
            <p>Compellingly actualize fully
              researched processes before proactive outsourcing. Progressively
              syndicate collaborative architectures before cutting-edge services. Completely visualize parallel
              core competencies rather than exceptional portals.</p>
          </div>
          <div class="new__arrivals__single__page__women__description__details__material__designer">
            <div class="new__arrivals__single__page__women__description__details__material">MATERIAL:
              <b style="color: #2f2f2f; font-size: 14px; font-weight: bold;">{{ product.material }}</b></div>
            <div class="new__arrivals__single__page__women__description__details__designer">DESIGNER:
              <b style="color: #2f2f2f; font-size: 14px; font-weight: bold;">{{ product.designer }}</b></div>
          </div>
          <div class="new__arrivals__single__page__women__description__details__price">{{ product.price }}$</div>
        </article>
        <article class="new__arrivals__single__page__women__description__details__filter center">
          <div class="choose__color choose">
            <b style="color: #2f2f2f; font-size: 14px; font-weight: bold;">CHOOSE COLOR</b>
            <select name="color" id="color" class="choose__color__selector">
              <option value="red" selected>Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
            </select>
          </div>
          <div class="choose__size choose">
            <b style="color: #2f2f2f; font-size: 14px; font-weight: bold;">CHOOSE SIZE</b>
            <select name="size" id="size" class="choose__size__selector">
              <option value="XXL" selected>XXL</option>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="S">S</option>
              <option value="XS">XS</option>
              <option value="XXS">XXS</option>
            </select>
          </div>
          <div class="choose__quantity choose">
            <b style="color: #2f2f2f; font-size: 14px; font-weight: bold;">QUANTITY</b>
            <select name="quantity" id="quantity" class="choose__quantity__selector">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </article>
        <button @click="addToCart" class="product__add__to__cart__button">Add to Cart</button>
      </article>
    </section>
  </div>
</template>

<script>
import { imagePath } from "../mixins/imagePath.js";
import genderOverview from './genderOverview';

export default {
  name: 'product',
  components: { genderOverview },
  mixins: [imagePath],
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id)
    }
  }
};
</script>
