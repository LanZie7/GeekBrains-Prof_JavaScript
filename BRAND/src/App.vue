<template>
  <div id="app">
    <div>
      <header class="header center">
        <header class="header__left">
          <router-link to="/" class="logo">
            <img class="logo__img" src="./assets/img/logo.png" alt="logo">BRAN<span>D</span>
          </router-link>
          <form class="header__form" action="#">
            <details class="header__browse">
              <summary>Browse</summary>
              <div class="drop">
                <div class="drop__flex">
                  <h3 class="drop__h3">Women</h3>
                  <ul class="drop__ul">
                    <li><a href="#" class="drop__link">Dresses</a></li>
                    <li><a href="#" class="drop__link">Tops</a></li>
                    <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                    <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                    <li><a href="#" class="drop__link">Blazers</a></li>
                    <li><a href="#" class="drop__link">Denim</a></li>
                    <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                    <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                    <li><a href="#" class="drop__link">Accessories</a></li>
                    <li><a href="#" class="drop__link">Bags/Purses</a></li>
                    <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                    <li><a href="#" class="drop__link">Nightwear</a></li>
                    <li><a href="#" class="drop__link">Shoes</a></li>
                    <li><a href="#" class="drop__link">Beauty</a></li>
                  </ul>
                  <h3 class="drop__h3">Men</h3>
                  <ul class="drop__ul">
                    <li><a href="#" class="drop__link">Tees/Tank tops</a></li>
                    <li><a href="#" class="drop__link">Shirts/Polos</a></li>
                    <li><a href="#" class="drop__link">Sweaters</a></li>
                    <li><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
                    <li><a href="#" class="drop__link">Blazers</a></li>
                    <li><a href="#" class="drop__link">Jackets/vests</a></li>
                  </ul>
                </div>
              </div>
            </details>
            <input type="text" placeholder="Search for Item..." style="padding-left: 16px;"/>
            <button type="submit"><a href="#" class="menu-link-search"><img src="./assets/img/search.png" alt="search"></a>
            </button>
          </form>
        </header>
        <header class="header__right">
          <div class="header__cart">
            <router-link to="/cart" class="shopping__cart center">
              <img class="header__cart__pic" src="./assets/img/cart.png" alt="cart">
              <counter-badge :count="cartCount"></counter-badge>
            </router-link>
            <header-cart-drop></header-cart-drop>
          </div>
          <a href="#" class="button">My Account</a>
        </header>
      </header>
      <nav class="nav center">
        <div class="menu">
          <li class="menu__list">
            <router-link to="/" class="menu__link">Home</router-link>
          </li>
          <li class="menu__list">
            <router-link :to="{ name: 'all-products', params: {gender: 'men'} }" class="menu__link">Men</router-link>
            <div class="drop">
              <div class="drop__flex">
                <h3 class="drop__h3">Men</h3>
                <ul class="drop__ul">
                  <li><a href="#" class="drop__link">Tees/Tank tops</a></li>
                  <li><a href="#" class="drop__link">Shirts/Polos</a></li>
                  <li><a href="#" class="drop__link">Sweaters</a></li>
                  <li><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
                  <li><a href="#" class="drop__link">Blazers</a></li>
                  <li><a href="#" class="drop__link">Jackets/vests</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__list">
            <router-link :to="{ name: 'all-products', params: {gender: 'women'} }" class="menu__link">Women</router-link>
            <div class="drop">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li><a href="#" class="drop__link">Dresses</a></li>
                  <li><a href="#" class="drop__link">Tops</a></li>
                  <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                  <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                  <li><a href="#" class="drop__link">Blazers</a></li>
                  <li><a href="#" class="drop__link">Denim</a></li>
                  <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                  <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                  <li><a href="#" class="drop__link">Accessories</a></li>
                  <li><a href="#" class="drop__link">Bags/Purses</a></li>
                  <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                  <li><a href="#" class="drop__link">Nightwear</a></li>
                  <li><a href="#" class="drop__link">Shoes</a></li>
                  <li><a href="#" class="drop__link">Beauty</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Kids</a>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Accessories</a>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Featured</a>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Hot Deals</a>
            <div class="drop drop__last">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li><a href="#" class="drop__link">Dresses</a></li>
                  <li><a href="#" class="drop__link">Tops</a></li>
                  <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                  <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                  <li><a href="#" class="drop__link">Blazers</a></li>
                  <li><a href="#" class="drop__link">Denim</a></li>
                  <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                  <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                  <li><a href="#" class="drop__link">Accessories</a></li>
                  <li><a href="#" class="drop__link">Bags/Purses</a></li>
                  <li><a href="#" class="drop__link">Swimwear/Underwear</a></li>
                  <li><a href="#" class="drop__link">Nightwear</a></li>
                  <li><a href="#" class="drop__link">Shoes</a></li>
                  <li><a href="#" class="drop__link">Beauty</a></li>
                </ul>
              </div>
            </div>
          </li>
        </div>
      </nav>
    </div>

    <router-view/>

    <div class="subscribe">
      <article class="subscribe__back center">
        <article class="feedback">
          <img class="feedback__person__pic" src="./assets/img/Bin_Burhan_Dhaka.png" alt="person pic">
          <article class="feedback__quote">
            <blockquote class="feedback__text">
              <q>Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
                condimentum a. Aliquam condimentum mattis neque sed pretium</q>
            </blockquote>
            <br>
            <article class="feedback__person__data">
              <p class="feedback__person__name">Bin Burhan</p>
              <p class="feedback__person__location">Dhaka, Bd</p>
            </article>
          </article>
          <div class="feedback__pagination">
            <div class="feedback__pagina"></div>
            <div class="feedback__pagina"></div>
            <div class="feedback__pagina"></div>
          </div>
        </article>
        <article class="subscribe__form">
          <h2 class="subscribe__main__text">SUBSCRIBE</h2>
          <h3 class="subscribe__text">FOR OUR NEW LETTER AND PROMOTION</h3>
          <form id="form">
            <input class="email__input" type="email" placeholder="Enter Your Email"/>
            <a class="subscribe__button__link" href="#"><input class="subscribe__button" type="submit"
                                                               value="Subscribe"/></a>
          </form>
        </article>
      </article>
    </div>

    <section class="company center">
      <article class="company__info-block-1">
        <div class="logo">
          <a href="" class="logo">
            <img class="logo__img" src="./assets/img/logo.png" alt="logo">BRAN<span>D</span>
          </a>
        </div>
        <article class="company__short__descr">
          <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally
            syndicate
            multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
            processes and cross-unit partnerships.</p>
          <p> Efficiently plagiarize 24/365 action items and focused infomediaries.
            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
        </article>
      </article>
      <article class="company__info-block-2">
        <article class="company__info__sections">
          <h2 class="company__info__sections-title">COMPANY</h2>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Home</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Shop</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">About</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">How It Works</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Contact</a></p>
        </article>
        <article class="company__info__sections">
          <h2 class="company__info__sections-title">INFORMATION</h2>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Terms &
            Conditions</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Privacy Policy</a>
          </p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">How to Buy</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">How to Sell</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Promotion</a></p>
        </article>
        <article class="company__info__sections">
          <h2 class="company__info__sections-title">SHOP CATEGORY</h2>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Men</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Women</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Child</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Apparel</a></p>
          <p class="company__info__section"><a class="company__info__section__link" href="#">Browse All</a></p>
        </article>
      </article>
    </section>
    <footer class="footer center">
      <p style="color: rgba(122, 122, 122, 1); font-size: 16px;">© 2020 Brand All Rights Reserved</p>
      <section class="social__nets">
        <div class="social__net__icon"><a class="social__net__icon__link" href="#"><i
          class="fab fa-facebook-f"></i></a></div>
        <div class="social__net__icon"><a class="social__net__icon__link" href="#"><i
          class="fab fa-twitter"></i></a></div>
        <div class="social__net__icon"><a class="social__net__icon__link" href="#"><i
          class="fab fa-linkedin-in"></i></a></div>
        <div class="social__net__icon"><a class="social__net__icon__link" href="#"><i
          class="fab fa-pinterest-p"></i></a></div>
        <div class="social__net__icon"><a class="social__net__icon__link" href="#"><i
          class="fab fa-google-plus-g"></i></a></div>
      </section>
    </footer>
  </div>
</template>

<script>
import CounterBadge from "./components/CounterBadgeComp";
import HeaderCartDrop from './components/CartComp';

export default {
  name: 'app',
  components: {
    CounterBadge,
    HeaderCartDrop
  },
  computed: {
    cartCount() {
      return this.$store.state.cartItems.length;
    }
  },
};

</script>
