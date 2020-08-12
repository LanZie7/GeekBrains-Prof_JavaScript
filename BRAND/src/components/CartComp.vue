<template>
  <div class="header__cart__drop">
    <div class="drop__flex">
      <div v-for="product in cartItems" :key="product.id" class="header__cart__drop__product">
        <div class="header__cart__drop__product__pic">{{ product.img }}</div>
        <div class="header__cart__drop__product__details">
          <h2 class="header__cart__drop__product__details__h2">{{ product.name }}</h2>
          <div class="header__cart__drop__product__details__stars">
            <i class="far fa-star"></i>
          </div>
          <p class="header__cart__drop__product__details__p">{{ product.quantity }} x {{ product.price }}</p>
        </div>
      </div>
      <div class="drop__cart">
        <div class="header__cart__drop__product__details__total__sum">
          <p class="cart__empty__hover" v-if="!cartItems.length">Cart is empty</p>
          <div v-for="item of cartItems" :key="item.id" :cart-item="item" @remove="removeFromCart"><i class="fas fa-times-circle"></i></div>
          <div class="header__cart__drop__product__details__total__sum__h1"
               v-show="cartItems.length">TOTAL&#36;{{ sumPrice }}
          </div>
        </div>
        <div class="header__cart__drop__product__buttons">
          <router-link to="/checkout/" class="header__cart__drop__product__button">CHECKOUT</router-link>
          <router-link to="/cart/" class="header__cart__drop__product__button">GO TO CART</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "header-cart-drop",
  props: ['cartItem'],

  data() {
    return {
      cartItems: [],
    }
  },
  computed:{
    sumPrice() {
      return this.cartItems.reduce((total, item) => total += item.price * item.quantity, 0)
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId)
    }
  }
}
</script>
