'use strict';
///////////create object massive////////////
const products = [
    { id: 1, title: 'Notebook', price: 20000, imgSrc: "img/1.jpg" },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000, imgSrc: 'img/3.jpg' },
    { id: 4, title: 'Gamepad', price: 4500 },
];
///////////create object massive////////////

///////////init class basket///////////////////////
class Basket {
    constructor(cssClassProductItem) {
            this.listProducts = [];
            this.listCount = this.listProducts.length;
        }
        ////////////metod calculate products
    BasketSum() {
            this.sum = 0;
            this.listProducts.forEach((element) => {
                this.sum += element.price
            });
            return this.sum;
        }
        ///////////////metod deleted products in basket//////
    DeletedProductInBasket() {}
}
///////////init class basket///////////////////////
///////////init class BasketItem//////////////////
class BasketItem {
    constructor() {}
}
///////////init class BasketItem//////////////////
///////////init class ProductsItem//////////////////
class ProductsItem {
    constructor() {}
        ///////////////metod apply even 'click' to buttons///////////////////////
    AddProductToBasket() {
            let ButtonProducts = document.querySelectorAll('.product-item > .by-btn');
            let SummaTotal = document.querySelector('.SummaTotal');
            for (let i = 0; i < ButtonProducts.length; i++) {
                ButtonProducts[i].addEventListener('click', (event) => {
                    if (event.target.textContent === 'Добавить в корзину') {
                        event.target.textContent = 'Добавлено';
                        basket1.listProducts.push(products[i]);
                        SummaTotal.innerHTML = `Итого: ${basket1.BasketSum()}р.`;
                    }
                });

            }
        }
        ///////////////metod apply even 'click' to buttons///////////////////////
        ////////////////create metod for added products//////////////////
    AddProductToList(targetTag, targetObj) {
        let insert = '',
            imgSrc = '';
        for (let i = 0; i < targetObj.length; i++) {
            if (typeof targetObj[i].imgSrc === "undefined") { imgSrc = "img/" + targetObj[i].title + ".jpg" } else { imgSrc = targetObj[i].imgSrc };
            insert += `<div class="product-item">
    <img class="product-item-img" src="${imgSrc}">
                <h3>${targetObj[i].title}</h3>
                <p>${targetObj[i].price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
        };
        targetTag.innerHTML = insert;
    };
    ////////////////create metod for added products//////////////////
}
///////////init class ProductsItem//////////////////
///////////create object basket//////////////////
let basket1 = new Basket(),
    ///////////create object ProductsItem//////////////////
    ProductItem1 = new ProductsItem();

ProductItem1.AddProductToList(document.querySelector('.products'), products);
ProductItem1.AddProductToBasket();