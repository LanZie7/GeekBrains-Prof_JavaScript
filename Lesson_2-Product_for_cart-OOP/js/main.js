"use strict"

class ProductList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
    this._getTotalSum();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Laptop', price: 80000 },
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 3000},
      {id: 4, title: 'Gamepad', price: 4500},
    ]
  }

  _render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product); // для каждого элемента массива goods создаем экземпляр класса ProductItem
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  calculateSumOfProducts() {
    return this.goods.reduce((sum, goods) => sum + goods.price, 0);
  }

  _getTotalSum() {
    let totalSum = 0;
    for (let product of this.goods) {
      totalSum += product.price;
    }
    console.log(totalSum);
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="img">
                  <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                  </div>
                </div>`;
  }
}
new ProductList();

class Cart {
  constructor(container = '.btn-cart') {
    this.container = container;
    this.goodsInCart = [];
    this.Amount = [];
    this.totalSum = 0;
  }
}

let list = new ProductsList();
list.render();
list.sumOfAllProducts();