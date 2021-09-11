<template>
  <div>
      <h2>Listado de juegos</h2>
      <table class="mt-4 text-center justify-content-center table ">
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
        <tr
          v-for="(producto, $index) in $store.state.productos"
          :key="$index"
          :style="{ 'background-color': producto.color }"
        >
          <td>{{ producto.codigo }}</td>
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.stock }}</td>
          <td>{{ producto.precio }}</td>
        </tr>
      </table>
  </div>
</template>
<script>
export default {
  name: "ListaJuegos",
  props: {
    juegos: { type: Array, require: true },
  },
};
</script>

