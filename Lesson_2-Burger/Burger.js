"use strict";

class BurgerData {
    constructor(element) {
        this.name = element.value;
        this.price = parseInt(element.dataset['price']);
        this.calories = parseInt(element.dataset['calories']);
    }
}

class Burger {
    constructor(burgersize, stuffing, topping) {
        this.burgersize = new BurgerData(this._select(burgersize));
        this.stuffing = new BurgerData(this._select(stuffing));
        this.toppings = this._getTopping(topping);
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }

    _getTopping(name) {
        let result = [];
        this._selectAll(name).forEach(point => result.push(new BurgerData(point)));
        return result;
    }

    _sumPrice() {
        let sum = this.burgersize.price + this.stuffing.price;
        this.toppings.forEach(topping => sum += topping.price);
        return sum;
    }

    _sumCalories() {
        let sum = this.burgersize.calories + this.stuffing.calories;
        this.toppings.forEach(topping => sum += topping.calories);
        return sum;
    }

    _showTotalSum(price, calories) {
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}
