import { homeController } from "./controllers/homeController.js";
import { poliuretanos } from "./data/stock.js"

const carrito = [];

function renderProductos() {
   
    poliuretanos.forEach((p)=> {
        
        let producto = document.createElement('div');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${p.img}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.producto}</h5>
                <p class="card-text">El producto viene presentado en ${p.litros} litros.</p>
                <p>$${p.precio}</p>
                <button class="btn btn-primary" id="${p.id}">Añadir al carrito</button>
            </div>
        </div>`;

        shop.appendChild(producto);

        producto.querySelector('button').addEventListener('click', ()=>{
            addToCart(p.id);
            Toastify({
                text: 'Producto Añadido al Carrito!',
                duration: 4000,
                gravity: 'bottom',  
                style: {
                    background: "linear-gradient(to right, #c97e3d, #6b3c13)"
                }
            }).showToast();
        })
    })
};

renderProductos(poliuretanos);

function addToCart(id) {
    let producto = poliuretanos.find(producto => producto.id === id);
    let cartProduct = carrito.find(producto => producto.id === id);

    if (cartProduct) {
        cartProduct.cantidad++;
        console.log(carrito)
    } else{
        producto.cantidad = 1;
        carrito.push(producto);
        console.log(carrito);
    }
    renderCart();
    totalPrice();
};

function renderCart() {
    let cartHTML = document.querySelector('#carrito');

    cartHTML.innerHTML = '';

    carrito.forEach((p, index)=>{
        let producto = document.createElement('div');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML = `
        <div class="card" style="width: 12rem;">
            <img src="${p.img}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.producto}</h5>
                <p>$${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger" id="btn-delete">Eliminar</button>
            </div>
        </div>`

        producto.querySelector('button').addEventListener('click', ()=>{
            deleteCartProduct(index);
        })

        cartHTML.appendChild(producto);
        saveStorageCart(carrito);
    })
}

function deleteCartProduct(indice) {

    carrito[indice].cantidad--;

    if (carrito[indice].cantidad === 0) {
        carrito.splice(indice,1);
    }

    renderCart();
    totalPrice();
}

function totalPrice() {
    let total=0;

    carrito.forEach((p)=>{
        total += p.precio * p.cantidad;
    })

    const t = document.getElementById('total');
    t.innerHTML = `<h5>TOTAL: $${total}</hs>`;
}

const saveStorageCart = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const getStorageCart = () => {
    const storageCart = JSON.parse(localStorage.getItem('carrito'));
    return storageCart;
};

document.addEventListener('DOMContentLoaded', async() => {
    const poliuretanos = await homeController();
    
    renderProductos(poliuretanos);
    if (localStorage.getItem('carrito')) {
        const carrito = getStorageCart();
        renderCart(carrito);
        totalPrice(carrito);
    }
});