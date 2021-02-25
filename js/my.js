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
class basket {
    constructor(cssClassProductItem) {
            this.listProducts = [];
            this.listCount = this.listProducts.length;
        }
        ////////////metod calculate products
    basket_sum() {
            this.sum = 0;
            this.listProducts.forEach((element) => {
                this.sum += element.price
            });
            return this.sum;
        }
        ///////////////metod deleted products in basket//////
    deleted_product_in_basket() {}
}
///////////init class basket///////////////////////
///////////init class basket_item//////////////////
class basket_item {
    constructor() {}
}
///////////init class basket_item//////////////////
///////////init class products_item//////////////////
class products_item {
    constructor() {}
        ///////////////metod apply even 'click' to buttons///////////////////////
    add_product_to_basket() {
            let ButtonProducts = document.querySelectorAll('.product-item > .by-btn');
            let SummaTotal = document.querySelector('.SummaTotal');
            for (let i = 0; i < ButtonProducts.length; i++) {
                ButtonProducts[i].addEventListener('click', (event) => {
                    if (event.target.textContent === 'Добавить в корзину') {
                        event.target.textContent = 'Добавлено';
                        basket1.listProducts.push(products[i]);
                        SummaTotal.innerHTML = `Итого: ${basket1.basket_sum()}р.`;
                    }
                });

            }
        }
        ///////////////metod apply even 'click' to buttons///////////////////////
        ////////////////create metod for added products//////////////////
    add_product_to_list(targetTag, targetObj) {
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
///////////init class products_item//////////////////
///////////create object basket//////////////////
let basket1 = new basket(),
    ///////////create object products_item//////////////////
    productItem1 = new products_item();

productItem1.add_product_to_list(document.querySelector('.products'), products);
productItem1.add_product_to_basket();