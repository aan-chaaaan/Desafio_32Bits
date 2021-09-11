<template>
  <div>
    <section>
      <h2>Productos con Stock</h2>
      <table class="mt-4 text-center justify-content-center table ">
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
        <tr
          v-for="(producto, $index) in $store.getters.productosConStock"
          :key="$index"
        >
          <td>{{ producto.codigo }}</td>
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.stock }}</td>
          <td>{{ producto.precio }}</td>
        </tr>
      </table>
    </section>
    <section>
      <h2>Venta de juegos</h2>
      <ul>
        <li></li>
      </ul>
      <hr />
    </section>
  </div>
</template>
<script>
export default {};
</script>
