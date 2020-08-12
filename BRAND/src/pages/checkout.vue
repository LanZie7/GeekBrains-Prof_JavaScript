<template>
  <section class="checkout">
    <article class="checkout__info center">
      <h3 class="checkout__info__h3">01. Shipping Address</h3>
      <div class="checkout__info__box">
        <div class="checkout__info__box__block">
          <p class="checkout__info__box__block__p1">Check as a guest or register</p>
          <p class="checkout__info__box__block__p2">Register with us for future convenience</p>
          <label class="radio">
            <input type="radio" name="radio1"/>
            <div class="radio__text padding-radio">checkout as guest</div>
          </label>
          <label class="radio">
            <input type="radio" name="radio1"/>
            <div class="radio__text">register</div>
          </label>
          <p class="checkout__info__box__block__p1">Register and save time!</p>
          <p class="checkout__info__box__block__p2">Register with us for future convenience</p>
          <p style="margin-top: 25px;" class="checkout__info__box__block__p2">Fast and easy
            checkout</p>
          <p style="margin-bottom: 38px;" class="checkout__info__box__block__p2">Easy access to your
            order history and status</p>
          <a class="checkout__button" href="#">Continue</a>
        </div>
        <div style="margin-left: 293px;" class="checkout__info__box__block">
          <p class="checkout__info__box__block__p1">Already registered?</p>
          <p class="checkout__info__box__block__p2">Please log in below</p>
          <div class="checkout__input">
            <h4 class="checkout__input__text__h4">EMAIL ADDRESS <span>*</span></h4>
            <input class="checkout__input__field" type="text" id="input">
            <label for="input"></label>
          </div>
          <div class="checkout__input">
            <h4 class="checkout__input__text__h4">PASSWORD <span>*</span></h4>
            <input class="checkout__input__field" type="text" id="data input">
            <label for="data input"></label>
          </div>
          <p style="margin-top: 22px; margin-bottom: 32px;"><span>* Required Fields</span></p>
          <div class="checkout__button__block">
            <a class="checkout__button" href="#">Log in</a>
            <div class="checkout__button__text__incl__block">
              <p class="checkout__button__text__incl">Forgot Password ?</p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="checkout__info__h3-more">02. Billing information</h3>
      <h3 class="checkout__info__h3-more">03. Shipping information</h3>
      <h3 class="checkout__info__h3-more">04. Shipping method</h3>
      <h3 class="checkout__info__h3-more">05. Payment method</h3>
      <h3 class="checkout__info__h3-more" style="margin-bottom: 125px">06. Order review</h3>
    </article>
  </section>
</template>

<script>
export default {
  name: 'checkout'
};
</script>

<style scoped>

</style>
