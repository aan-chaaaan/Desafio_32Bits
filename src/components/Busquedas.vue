<template>
  <div>
      <h1>Búsqueda de productos disponibles</h1>
    <input type="text" v-model="buscarCodigo" />
    <ul v-if="productoDisponibleCodigo.length > 0">
      <li v-for="(producto, index) in productoDisponibleCodigo" :key="index">
        <label v-text="producto.nombre"></label>
      </li>
    </ul>
    <ul v-else>
      <p>...nada aún :)</p>
    </ul>
    <hr>
    <h1>Cantidad de juegos totales y de stock total</h1>
    <p>Juegos totales: {{productosEnStock.length}}</p>
    <p> Stock total: {{$store.getters.stockTotal}}</p>
    <hr>
    <h1>Listado de juegos</h1>
    <table >
      <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </tr>
      <tr v-for="(producto, $index) in productosEnStock" :key="$index" :style="{ 'background-color': producto.color }">
        <td>{{producto.codigo}}</td>
        <td>{{producto.nombre}}</td>
        <td>{{producto.stock}}</td>
        <td>{{producto.precio}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      buscarCodigo: "",
    }
  },
  computed: {
    productosEnStock() {
      return this.$store.getters.productosEnStock;
    },
    ...mapState({
      productoDisponibleCodigo() {
      return this.$store.getters.productoDisponibleCodigo(this.buscarCodigo);
    },
    }),
  },
};
</script>
<style scoped>

</style>
