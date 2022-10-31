const poliuretanos = [
    {
        "id": 001,
        "producto": "Melacril",
        "litros": [1,4],
        "base": ["Laca", "Hidrolaca"],
        "altoTransito": true,
        "precio": 3000,
        "img": "./assets/img/melacril.png"
    },
    {
        "id": 002,
        "producto": "Petrilac",
        "litros": [1,4,10],
        "base": ["Laca", "Hidrolaca"],
        "altoTransito": true,
        "precio": 2000,
        "img": "./assets/img/petrilac.png"
    },
    {
        "id": 003,
        "producto": "Plastibril",
        "litros": [1,4,10],
        "base": ["Laca", "Hidrolaca"],
        "altoTransito": false,
        "precio": 1000,
        "img": "./assets/img/plastibril.png"
    }
];

let precioTotal = 0;
let precio = 0;

function total(a,b) {
    precioTotal = a*b;
    return precioTotal;
};

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const cantidadMetros = document.getElementById('cantidadMetros').value;
    const elegirProducto = document.getElementById('elegirProducto').value;

    const cantidad = cantidadMetros / 14;

    switch (elegirProducto) {
        case "MELACRIL":
            precio = 3000;
            precioTotal = total(cantidad,precio); 
            break;
        case "PETRILAC":
            precio = 2000;
            precioTotal = total(cantidad,precio);
            break;
        case "PLASTIBRIL":
            precio = 1000;
            precioTotal = total(cantidad,precio);
            break;
        default:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!',
                text: 'Ingrese un dato válido',
              });
            precio=0;
            cantidad=0;
            break;
    }
    Swal.fire("El total comprando " + elegirProducto + " para " + cantidadMetros + "m2 es de $" + precioTotal);    
});

