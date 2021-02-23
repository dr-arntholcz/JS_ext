'use strict';
const products = [
    { id: 1, title: 'Notebook', price: 20000, img_src: "img/1.jpg" },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000, img_src: 'img/3.jpg' },
    { id: 4, title: 'Gamepad', price: 4500 },
];

const renderProduct = (title, price, img_src = "img/" + title + ".jpg") => {
    return `<div class="product-item">
    <img class="product-item-img" src="${img_src}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

const renderProducts = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price, item.img_src);
    });

    console.log(productList);
    console.log(Object.keys(products[0]).length);
    // document.querySelector('.products').innerHTML = productList;
    let insert = '';
    for (let i = 0; i < productList.length; i++) {
        insert += productList[i];

    };
    document.querySelector('.products').innerHTML = insert;
}

renderProducts(products);