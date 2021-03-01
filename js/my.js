'use strict';
const API = "https://raw.githubusercontent.com/dr-arntholcz/online-store-api/master/responses";

let basket1 = new class Basket {
    constructor(cssClassProductItem) {
        this.listProducts = [];
    }
    listCount(listproducts) {
        return listproducts.length;
    }
    basketSum() {
        this.sum = 0;
        this.listProducts.forEach((element) => {
            this.sum += element.price
        });
        return this.sum;
    }

    deletedProductInBasket() {}
}

class BasketItem {
    constructor() {}
}

let ProductItem1 = new class ProductsItem {
    constructor() {}

    addProductToBasket(products) {
        let ButtonProducts = document.querySelectorAll('.product-item > .by-btn');
        let SummaTotal = document.querySelector('.SummaTotal');
        for (let i = 0; i < ButtonProducts.length; i++) {
            ButtonProducts[i].addEventListener('click', (event) => {
                if (event.target.textContent === 'Добавить в корзину') {
                    event.target.textContent = 'Добавлено';
                    basket1.listProducts.push(products[i]);
                    SummaTotal.innerHTML = `Итого: ${basket1.basketSum()}р.`;
                }
            });

        }
    }

    addProductToList(targetTag, targetObj) {
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

    getProducts = (url, target) => {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true); // true - асинхронный запрос
            xhr.onreadystatechange = () => {
                // xhr.readyState
                // 0 - запрос не инициализирован
                // 1 - загрузка данных
                // 2 - запрос принят сервером
                // 3 - идет обмен данными
                // 4 - запрос выполнен
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) {
                    console.log('Error ' + xhr.status + ' ' + xhr.statusText);
                } else {
                    // console.log('Ok! ', xhr.responseText);
                    let data = JSON.parse(xhr.responseText);
                    // console.log(data);
                    this.addProductToList(target, data);
                    this.addProductToBasket(data)
                }
            }
            xhr.send();
        });
    };
}
let products = ProductItem1.getProducts(`${API}/listProducts.json`, document.querySelector('.products'));
///////////////////////////////////////////////////////////
// var products = fetch(`${API}/listProducts.json`)
// .then((response) =>
//     response.json()
// )
// .then((data) => {
//     // console.log(data);
//     // products = data;
//     return data;
// })
// .catch((error) => {
//     console.log(error);
// });
/////////////////////////////////////////////////////////////////
// Promise

///////////////////////////////////////////////////////////////////////////////////
// console.log(products);
// ProductItem1.addProductToList(document.querySelector('.products'), products);
// ProductItem1.addProductToBasket(products);