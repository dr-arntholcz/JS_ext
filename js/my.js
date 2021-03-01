'use strict';
const API = "https://raw.githubusercontent.com/dr-arntholcz/online-store-api/master/responses";

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

    addProductToList(targetTag, targetObj, buttonName = 'Добавить в корзину') {
        let insert = '',
            imgSrc = '';
        for (let i = 0; i < targetObj.length; i++) {
            if (typeof targetObj[i].imgSrc === "undefined") { imgSrc = "img/" + targetObj[i].title + ".jpg" } else { imgSrc = targetObj[i].imgSrc };
            insert += `<div class="product-item">
    <img class="product-item-img" src="${imgSrc}">
                <h3>${targetObj[i].title}</h3>
                <p>${targetObj[i].price}</p>
                <button class="by-btn">${buttonName}</button>
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
let basket1 = new class Basket {
    constructor(cssClassProductItem) {
        this.listProducts = [];
        this.listProductsPreview = 'catalog';

    }
    viewBasket(targetButtton, targetDiv, ProductItem) {
        targetButtton.addEventListener('click', () => {
            if (this.listProducts.length > 0 && this.listProductsPreview === 'catalog') {
                targetButtton.textContent = 'Вернуться к выбору товаров';
                // this.listProductsPreview = targetDiv.innerHTML;
                targetDiv.innerHTML = '';
                // console.log(this.listProducts);
                ProductItem.addProductToList(targetDiv, this.listProducts, 'Удалить из корзины');
                this.deletedProductInBasket(this.listProducts);
                this.listProductsPreview = 'basket';
            } else if (this.listProductsPreview === 'basket') {
                targetButtton.textContent = 'Корзина';
                // targetDiv.innerHTML = this.listProductsPreview;
                // this.listProductsPreview = '';
                ProductItem.getProducts(`${API}/listProducts.json`, document.querySelector('.products'));
                this.listProductsPreview = 'catalog';
            }
        })
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

    deletedProductInBasket(products) {
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
}

class BasketItem {
    constructor() {}
}

ProductItem1.getProducts(`${API}/listProducts.json`, document.querySelector('.products'));
basket1.viewBasket(document.querySelector('.btn-cart'), document.querySelector('.products'), ProductItem1);
///////////////////////////////////////////////////////////