// let producto = "";
// let precio = 0;
// let litros = 0;
// let otraCompra = false;
// let precioTotal=0;

// let consulta = false;
// let info = "";

// const poliuretanos = [
//     [{
//         "producto": "Melacril",
//         "litros": [1,4,10],
//         "base": ["Laca", "Hidrolaca"],
//         "altoTransito": true,
//     }],
//     [{
//         "producto": "Petrilac",
//         "litros": [1,4,10],
//         "base": ["Laca", "Hidrolaca"],
//         "altoTransito": true,
//     }],
//     [{
//         "producto": "Plastibril",
//         "litros": [1,4,10],
//         "base": ["Laca", "Hidrolaca"],
//         "altoTransito": false,
//     }]
// ];

// function total(a,b) {
//     precioTotal = a*b;
//     return precioTotal;
// };

// do {
//     info = prompt("Ingrese el nombre del producto del que desea recibir información: \n1)Melacril \n2)Petrilac \n3)Plastibril" ).toUpperCase();

//     switch (info) {
//         case "MELACRIL":
//             for (const informacion of poliuretanos[0]) {
//                 alert("El producto " + info + " viene presentado en formatos de " + informacion.litros.join(", ") + " litros y su base puede ser de " + informacion.base.join(", ") + " y es alto tránsito")};
//             break;
//         case "PETRILAC":
//             for (const informacion of poliuretanos[1]) {
//                 alert("El producto " + info + " viene presentado en formatos de " + informacion.litros.join(", ") + " litros y su base puede ser de " + informacion.base.join(", ") + " y es alto tránsito")};
//             break;
//         case "PLASTIBRIL":
//             for (const informacion of poliuretanos[2]) {
//                 alert("El producto " + info + " viene presentado en formatos de " + informacion.litros.join(", ") + " litros y su base puede ser de " + informacion.base.join(", ") + " y no es alto tránsito")};
//             break
//         default:
//             alert("Ingrese un producto válido");
//             break;
//     }
// } while (consulta);

// do {
//     producto = prompt("Ingrese el producto que desea comprar: " + "\n1. Melacril" + "\n2. Petrilac" + "\n3. Plastribril").toUpperCase();
//     litros = prompt("¿Cuantos litros desea? Ingrese la cantidad: " + "\na. 1 Litro" + "\nb. 4 Litros" + "\nc. 10 Litros");

//     switch (producto) {
//         case "MELACRIL":
//             precio = 3000;
//             litros=litros;
//             precioTotal = total(precio,litros); 
//             break;
//         case "PETRILAC":
//             precio = 2000;
//             litros=litros;
//             precioTotal = total(precio,litros); 
//             break;
//         case "PLASTIBRIL":
//             precio = 1000;
//             litros=litros;
//             precioTotal = total(precio,litros); 
//             break
//         default:
//             alert("Error");
//             precio=0;
//             litros=0;
//             break;
//     }

// } while (otraCompra);

// alert("El costo total llevando " + producto + " es de $" + precioTotal);