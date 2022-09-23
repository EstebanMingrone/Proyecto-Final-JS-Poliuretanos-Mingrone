const poliuretanos = [
    [{
        "producto": "Melacril",
        "litros": [1,4,10],
        "base": ["Laca", "Hidrolaca"],
        "altoTransito": true,
        "precio": 3000
    }],
    [{
        "producto": "Petrilac",
        "litros": [1,4,10],
        "base": ["Laca", "Hidrolaca"],
        "altoTransito": true,
        "precio": 2000
    }],
    [{
        "producto": "Plastibril",
        "litros": [1,4,10],
        "base": ["Laca", "Hidrolaca"],
        "altoTransito": false,
        "precio": 1000
    }]
];


const form = document.getElementById('form');
const cantidadMetros = document.getElementById('cantidadMetros');
const elegirProducto = document.getElementById('elegirProducto');

form.addEventListener('submit', enviarForm);

function enviarForm(e) {
    e.preventDefault();

    
}