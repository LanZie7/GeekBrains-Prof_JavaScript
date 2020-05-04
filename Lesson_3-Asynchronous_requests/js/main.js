"use strict";

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

    // ДЗ - переработка объекта XMLHttpRequest в Promise
    let makeGETRequest = (url) => {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
          const response = xhr.responseText;lement
          resolve(response);
          reject(console.log('error'));
          if(xhr.readyState === 4) {
            if (xhr.status !== 200) {
              reject('Error');
            } else {
              resolve(xhr.responseText);
            }
          }
        };

        xhr.send();
      })
    };

// Объект XMLHttpRequest
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// }

class ProductList {
  constructor(url, container, list = dictList) {
    this.url = url;
    this.container = container;
    this.list = list; 
    this.goods = [];
    this.allProducts = [];
    this._init();
  }

  // получаем данные с сервера
  getJson(url) {
    return fetch(url ? url : `${API + this.url}`)
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    })
  }

  handleData(data) {
    this.goods = [...data];
    this.render();
  }

  calculateSum() {
    return this.allProducts.reduce((sum, goods) => sum + goods.price, 0);
  } 

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      console.log(this.constructor.name);
      const productObject = new this.list[this.list.constructor.name](product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  _init() {
    return false;
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return ``;
  }
}

  class ProductsList extends List {
    constructor(cart, container = '.products', url = "/catalogData.json") {
      super(url, container);
      this.cart = cart;
      this.getJson()
        .then(data => this.handleData(data));
    }

    _init() {
      document.querySelector(this.container).addEventListener('click', element => {
        if (element.target.classList.contains('buy-btn')) {
          this.cart.addProduct(element.target);
        }
      });
      document.querySelector('.search-form').addEventListener('submit', element => {
        element.preventDefault();
        this.filter(document.querySelector('.search-field').value)
      })
    }
  }

class ProductItem extends Item {
  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.product_name}</h3>
                  <p>${this.price} ₽</p>
                  <button class="buy-btn"
                  data-id="${this.id}"
                  data-name="${this.product_name}"
                  data-price="${this.price}">Купить</button>
              </div>
          </div>`;
  }
}

class Cart extends List {
  constructor(container = ".cart-block", url = "/getBasket.json") {
    super(url, container);
    this.getJson()
      .then(data => {
        this.handleData(data.contents);
      });
  }

  addProduct(element) {
    this.getJson(`${API}/addToBasket.json`)
      .then(data => {
        if (data.result === 1) {
          let productId = +element.dataset['id'];
          let find = this.allProducts.find(product => product.id === productId);
          if (find) {
            find.quantity++;
            this._updateCart(find);
          } else {
            let product = {
              id: productId,
              price: +element.dataset['price'],
              product_name: element.dataset['name'],
              quantity: 1
            };
            this.goods = [product];
            this.render();
          }
        } else {
          alert('Error');
        }
      })
  }

  removeProduct(element) {
    this.getJson(`${API}/deleteFromBasket.json`)
      .then(data => {
        if (data.result === 1) {
          let productId = +element.dataset['id'];
          let find = this.allProducts.find(product => product.id === productId);
          if (find.quantity > 1) {
            find.quantity--;
            this._updateCart(find);
          } else { // удаляем
            this.allProducts.splice(this.allProducts.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
          }
        } else {
          alert('Error');
        }
      })
  }

  _updateCart(product) {
    let block = document.querySelector(`.cart-item[data-id="${product.id}"]`);
    block.querySelector('.product-quantity').textContent = `Количество: ${product.quantity}`;
    block.querySelector('.product-price').textContent = `${product.quantity * product.price} ₽`;
  }
  _init() {
    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible');
    });
    document.querySelector(this.container).addEventListener('click', e => {
      if (e.target.classList.contains('del-btn')) {
        this.removeProduct(e.target);
      }
    })
  }
}

class CartItem extends Item {
  constructor(el, img = 'https://placehold.it/50x100') {
    super(el, img);
    this.quantity = el.quantity;
  }
  render() {
    return `<div class="cart-item" data-id="${this.id}">
          <div class="product-bio">
          <img src="${this.img}" alt="Some image">
          <div class="product-desc">
          <p class="product-title">${this.product_name}</p>
          <p class="product-quantity">Количество: ${this.quantity}</p>
      <p class="product-single-price">${this.price} за ед.</p>
      </div>
      </div>
      <div class="right-block">
          <p class="product-price">${this.quantity * this.price} ₽</p>
          <button class="del-btn" data-id="${this.id}">&times;</button>
      </div>
      </div>`;
  }
}

const dictList = {
  ProductList: ProductItem,
  Cart: CartItem
}

let cart = new Cart;
let products = new ProductList(cart);