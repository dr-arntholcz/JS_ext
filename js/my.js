'use strict';
///////////create object massive////////////
const products = [
    { id: 1, title: 'Notebook', price: 20000, img_src: "img/1.jpg" },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000, img_src: 'img/3.jpg' },
    { id: 4, title: 'Gamepad', price: 4500 },
];
///////////create object massive////////////
////////////////create function for added products//////////////////
function blabla(targetTag, targetObj) {
    let insert = '',
        img_src = '';
    for (let i = 0; i < targetObj.length; i++) {
        if (typeof targetObj[i].img_src === "undefined") { img_src = "img/" + targetObj[i].title + ".jpg" } else { img_src = targetObj[i].img_src };
        insert += `<div class="product-item">
    <img class="product-item-img" src="${img_src}">
                <h3>${targetObj[i].title}</h3>
                <p>${targetObj[i].price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
    };
    targetTag.innerHTML = insert;
};
////////////////create function for added products//////////////////
blabla(document.querySelector('.products'), products);

///////////init class basket///////////////////////
class basket {
    constructor(cssClassProductItem) {
            this.listProducts = [];
            this.listCount = this.listProducts.length;
        }
        ////////////metod calculate products
    bskt_sum() {
            this.sum = 0;
            this.listProducts.forEach((element) => {
                this.sum += element.price
            });
            return this.sum;
        }
        ///////////////metod deleted products in basket//////
    bskt_prd_del() {}
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
    prdts_add_bskt() {
            let btnsPdts = document.querySelectorAll('.product-item > .by-btn');
            let summaTotal = document.querySelector('.summaTotal');
            for (let i = 0; i < btnsPdts.length; i++) {
                btnsPdts[i].addEventListener('click', (event) => {
                    if (event.target.textContent === 'Добавить в корзину') {
                        event.target.textContent = 'Добавлено';
                        bsk.listProducts.push(products[i]);
                        summaTotal.innerHTML = `Итого: ${bsk.bskt_sum()}р.`;
                    }
                });

            }
        }
        ///////////////metod apply even 'click' to buttons///////////////////////
}
///////////init class products_item//////////////////
///////////create object basket//////////////////
let bsk = new basket(),
    prdts_item = new products_item();
prdts_item.prdts_add_bskt();