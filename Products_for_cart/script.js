"use strict";

const goodsList = [
    {id: 1, title: 'Laptop', price: 80000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 3000},
    {id: 4, title: 'Gamepad', price: 4500},
];

// функция возвращает разметку для конкретного товара
const renderGoodsItem = (title, price, img) => {
    return `<div class="goods__item">
        <img onerror ="this.src ='http://placehold.it/180x135/2ecc71/ecf0f1';" alt ="pic" src ="${img}"></img>
        <h3 class="goods__item__h3">${title}</h3>
        <p class="goods__item__p">${price}</p>
        <button class="add__btn">Add to Cart</button>
        </div>`;
};

// функция собирает все товары в один список и записывает его в goodsList
const renderGoodsList = list => {
    const products = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods__list').innerHTML = products.join("");
};

renderGoodsList(goodsList);