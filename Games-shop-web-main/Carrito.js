function actualizarCarrito() {
    // Obtener la tabla del carrito
    let tabla = document.getElementById('carrito').getElementsByTagName('tbody')[0];
    
    // Borrar todas las filas de la tabla
    tabla.innerHTML = '';
    
    // Recorrer todos los productos en el carrito
    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
      // Crear una nueva fila en la tabla
      let fila = tabla.insertRow(i);
      // Agregar celdas con los detalles del producto
      let celdaNombre = fila.insertCell(0);
      let celdaPrecio = fila.insertCell(1);
      celdaNombre.innerHTML = producto.nombre;
      celdaPrecio.innerHTML = '$' + producto.precio;
    }
  }
  