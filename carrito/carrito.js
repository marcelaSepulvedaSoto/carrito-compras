// Porcentaje de descuento: 0.1 significa 10%
const descuentoMayor = 0.1;

// Buscamos en el HTML el div donde se mostrarán los productos
let contenedorProductos = document.getElementById("productos");

// Buscamos en el HTML el h2 donde se mostrará el total
let totalHTML = document.getElementById("total");

// Lista de productos del carrito
let carrito = [
    {
        nombre: "Notebook",
        precio: 450000,
        cantidad: 1,
        imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        nombre: "Mouse",
        precio: 15000,
        cantidad: 2,
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
    },
    {
        nombre: "Teclado",
        precio: 30000,
        cantidad: 1,
        imagen: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
    }
];

// Esta función dibuja/muestra el carrito en la página
function mostrarCarrito(){

    // Reiniciamos el total cada vez que se actualiza la página
    let total = 0;

    // Limpiamos el contenido anterior para no repetir productos
    contenedorProductos.innerHTML = "";

    // Recorremos cada producto del carrito
    carrito.forEach((producto, index) => {

        // Calculamos el subtotal de cada producto
        let subtotal = producto.precio * producto.cantidad;

        // Sumamos el subtotal al total general
        total += subtotal;

        // Creamos una caja div para el producto
        let productoHTML = document.createElement("div");

        // Le agregamos una clase para poder darle diseño con CSS
        productoHTML.classList.add("card-producto");

        // Escribimos el contenido HTML dentro de la caja
        productoHTML.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="info-producto">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>

                <div class="controles">
                    <button onclick="disminuirCantidad(${index})">-</button>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button onclick="aumentarCantidad(${index})">+</button>
                </div>
            </div>

            <div class="subtotal">
                <h3>Subtotal</h3>
                <p>$${subtotal}</p>
            </div>
        `;

        // Agregamos la caja del producto al contenedor principal
        contenedorProductos.appendChild(productoHTML);
    });

    // Si el total es mayor a 50.000, se aplica descuento
    if(total > 50000){

        // Calculamos el descuento
        let descuento = total * descuentoMayor;

        // Restamos el descuento al total
        total = total - descuento;

        // Creamos un texto para mostrar el descuento
        let descuentoHTML = document.createElement("p");

        // Escribimos el mensaje del descuento
        descuentoHTML.textContent = "Se aplicó un descuento de $" + descuento;

        // Mostramos el descuento en la página
        contenedorProductos.appendChild(descuentoHTML);
    }

    // Mostramos el total final en el HTML
    totalHTML.textContent = "Total a pagar: $" + total;
}

// Función para aumentar la cantidad
function aumentarCantidad(index){

    // Aumenta en 1 la cantidad del producto seleccionado
    carrito[index].cantidad++;

    // Vuelve a mostrar el carrito actualizado
    mostrarCarrito();
}

// Función para disminuir la cantidad
function disminuirCantidad(index){

    // Solo disminuye si la cantidad es mayor que 1
    if(carrito[index].cantidad > 1){

        // Disminuye en 1 la cantidad del producto seleccionado
        carrito[index].cantidad--;
    }

    // Vuelve a mostrar el carrito actualizado
    mostrarCarrito();
}

// Llamamos la función para mostrar el carrito al cargar la página
mostrarCarrito();