<template>
  <div>
    <div class="shopping__cart__products__details-table-descr center">
      <div class="shopping__cart__products__details">
        <h3 class="shopping__cart__product__details__h3">Product Details</h3>
      </div>
      <div class="shopping__cart__products__details">
        <h3 class="shopping__cart__product__details__h3" style="margin-left: 340px;">Unite Price</h3>
      </div>
      <div class="shopping__cart__products__details">
        <h3 class="shopping__cart__product__details__h3" style="margin-left: 60px;">Quantity</h3>
      </div>
      <div class="shopping__cart__products__details">
        <h3 class="shopping__cart__product__details__h3" style="margin-left: 60px;">Shipping</h3>
      </div>
      <div class="shopping__cart__products__details">
        <h3 class="shopping__cart__product__details__h3" style="margin-left: 60px;">Subtotal</h3>
      </div>
      <div class="shopping__cart__products__details">
        <h3 class="shopping__cart__product__details__h3" style="margin-left: 30px;">Action</h3>
      </div>
    </div>

    <article v-for="item in cartItems" :key="item.id" class="shopping__cart center">
      <div class="shopping__cart__product__block">
        <div class="shopping__cart__product__details">
          <div class="shopping__cart__product__pic">
            <img :src="makeImagePath(item)" alt="">
            <div class="shopping__cart__product__details">
              <h3 class="shopping__cart__product__details__h3" style="padding-left: 10px;">{{ item.description }}</h3>
              <p class="shopping__cart__product__details__p1" style="padding-left: 10px;">Color: <span class="grey">{{ item.color }}</span></p>
              <p class="shopping__cart__product__details__p2" style="padding-left: 10px;">Size: <span class="grey">{{ item.size }}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="shopping__cart__products__details">
        <div class=" shopping__cart__product__details">
          <h4 class="shopping__cart__product__details__h4">{{ item.price }}</h4>
        </div>
      </div>
      <div class="shopping__cart__products__details">
        <div class="shopping__cart__number">
          <label for="number"></label>
          <input class="shopping__cart__number__input" id="number" type="number" required min="1" max="10">
        </div>
      </div>
      <div class="shopping__cart__products__details">
        <div class="shopping__cart__product__details">
          <h4 class="shopping__cart__product__details__h4">FREE</h4>
        </div>
      </div>
      <div class="shopping__cart__products__details">
        <div class="shopping__cart__product__details">
          <h4 class="shopping__cart__product__details__h4">{{ Subtotal }}</h4>
        </div>
      </div>
      <div class="shopping__cart__products__details">
        <div class="shopping__cart__product__details">
          <div @click="removeFromCart(item.id)"><i class="fas fa-times-circle"></i></div>
        </div>
      </div>
    </article>
    <article class="shopping__cart__buttons center">
      <a class="shopping__cart__button">CLEAR SHOPPING CART</a>
      <a class="shopping__cart__button" href="#">CONTINUE SHOPPING</a>
    </article>
    <article class="shopping__cart__shipping__details center">
      <div class="shopping__cart__shipping__details-1">
        <h2 class="shopping__cart__shipping__details__h2">Shipping Address</h2>
        <div class="shopping__cart__shipping__details__block">
          <div class="shopping__cart__shipping__details__summary">
            <details class="shopping__cart__shipping__details__summary1">
              <summary class="shopping__cart__shipping__details__summary__text">Bangladesh</summary>
            </details>
          </div>
          <div class="shopping__cart__shipping__details__summary">
            <details class="shopping__cart__shipping__details__summary2">
              <summary class="shopping__cart__shipping__details__summary__text2">State</summary>
            </details>
          </div>
          <div class="shopping__cart__shipping__details__summary">
            <details class="shopping__cart__shipping__details__summary3">
              <summary class="shopping__cart__shipping__details__summary__text3">Postcode / Zip</summary>
            </details>
          </div>
        </div>
        <a class="shopping__cart__shipping__details__button" href="#">GET A QUOTE</a>
      </div>
      <div class="shopping__cart__shipping__details-2">
        <h2 class="shopping__cart__shipping__details__h2">Coupon Discount</h2>
        <p class="shopping__cart__shipping__details__p">
          Enter your coupon code if you have one
        </p>
        <div class="shopping__cart__shipping__details__block">
          <div class="shopping__cart__shipping__details__summary" style="margin-bottom: 40px;">
            <details class="shopping__cart__shipping__details__summary2">
              <summary class="shopping__cart__shipping__details__summary__text2">State</summary>
            </details>
          </div>
        </div>
        <a class="shopping__cart__shipping__details__button" href="#">APPLY COUPON</a>
      </div>
      <div class="shopping__cart__proceed__to__check">
        <p class="shopping__cart__shipping__details__total__p">
          Sub total {{ total }}
        </p>
        <h2 class="shopping__cart__shipping__details__total__h2">GRAND TOTAL <span style="font-size: 16px; font-weight: bold;">{{ subtotal }}</span></h2>
        <a style=" margin-top: 40px; margin-left: 44px; margin-right: 44px;" class="shopping__cart__button" href="../../public/catalog/checkout.html">PROCEED TO CHECKOUT</a>
      </div>
    </article>
  </div>
</template>

<script>
import { imagePath } from "../mixins/imagePath";

export default {
  name: 'cart',
  mixins: [imagePath],
  data() {
    return this.$store.getters.cartItems;
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId);
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    subtotal() {
      if(this.cartItemsCount > 0) {
        return Number(this.itemsSubtotal);
      }
      return '---';
    },
    total() {
      if(this.cartItemsCount > 0) {
        return Number(this.subtotal);
      }
      return '---';
    },
  },
};
</script>

<style scoped>
  .center {
    padding: 0 calc(50% - 570px);
  }

  .shopping__cart__products__details-table-descr {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1170px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
</style>
