let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id ;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">
                    Add To Cart
                </button>
            `;
            listProductHTML.appendChild(newProduct);

        })
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
})

const addToCart = (id_product) => {
    let positionThisProductInCart = carts.findIndex((value) => value.id_product == id_product);
    if(carts.length <= 0){
        carts = [{
            id_product: id_product,
            quantity: 1
        }]
    }else if(positionThisProductInCart < 0){
        carts.push({
            id_product: id_product,
            quantity: 1
        });
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML ();
    addCartToMemory ();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));

}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.id_product;
            let positionProduct = listProducts.findIndex((value) => value.id == cart.id_product);
            let info = listProducts[positionProduct];
            newCart.innerHTML = `
             <div class="img">
            <img src="${info.image}" alt="">
            </div>
            <div class="name">
                ${info.name}
            </div>
            <div class="totalPrice">
                $${info.price * cart.quantity}
            </div>
            <div class="quantity">
                <span class="minus"> - </span>
                <span>${cart.quantity}</span>
                <span class="plus"> + </span>
            </div>`;
        listCartHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let id_product = positionClick.closest('.item').dataset.id; // Assurez-vous que le dataset.id est correctement accédé.
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantity(id_product, type); // C'est un appel de fonction.
    }
});

const changeQuantity = (id_product, type) => {
    let positionItemInCart = carts.findIndex((value) => value.id_product == id_product);
    if (positionItemInCart >= 0) {
        if (type === 'plus') {
            carts[positionItemInCart].quantity += 1;
        } else if (type === 'minus') {
            if (carts[positionItemInCart].quantity > 1) {
                carts[positionItemInCart].quantity -= 1;
            } else {
                carts.splice(positionItemInCart, 1);
            }
        }
        addCartToMemory();
        addCartToHTML();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('items.json')
      .then(response => response.json())
      .then(items => {
        const listProduct = document.querySelector('.listProduct');
        items.forEach(item => {
          const itemElement = `
            <div class="item">
              <img src="${item.image}" alt="${item.name}">
              <h2>${item.name}</h2>
              <div class="price">$${item.price}</div>
              <button class="addCart">Add To Cart</button>
            </div>
          `;
          listProduct.innerHTML += itemElement;
        });
      })
      .catch(error => console.error('Error loading menu items:', error));
  });
  


const initApp = () => {
    fetch('items.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        console.log(listProducts);
        addDataToHTML();


        if(localStorage.getItem('cart')){
            carts= JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();
