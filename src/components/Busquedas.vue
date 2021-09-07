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
      <li><label>...</label></li>
    </ul>
    <hr>
    <h1>Cantidad de juegos totales y de stock total</h1>
    <ul>
      <li v-for="(producto, index) in productosEnStock" :key="index">
        <label v-text="producto.nombre"></label>
      </li>
    </ul>
    <hr>
    <h1>Listado de juegos</h1>
    <ul v-for="(producto, index) in productosEnStock" :key="index">
      <li>{{producto.nombre}}</li>
    </ul>
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

