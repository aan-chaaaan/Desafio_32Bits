<template>
  <div class="m-4 align-items-center text-center">
    <Navbar></Navbar>
    <section class="pt-5 pb-3">
      <h2 class="text-center">Búsqueda de productos disponibles</h2>
      <input class="input"
        type="text"
        placeholder="Escribe un codigo para encontrar tu juego"
        v-model="buscarCodigo"
      />
      <ul v-if="productoDisponibleCodigo.length > 0">
        <li v-for="(producto, index) in productoDisponibleCodigo" :key="index">
          <label>{{producto.nombre}}</label>
        </li>
      </ul>
      <ul class="text-center" v-else>
        <p>...nada aún :)</p>
      </ul>
    </section>
    <section class="pt-3 pb-3">
      <hr />
      <h2>Cantidad de juegos totales y de stock total</h2>
      <p>Juegos totales: {{ $store.state.productos.length }}</p>
      <p>Stock total: {{ $store.getters.stockTotal }}</p> 
      <hr />
    </section>
    <section class="pt-3 pb-3 container">
     <ListaJuegos :juegos="$store.state.juegos"></ListaJuegos>
    </section>
  </div>   
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ListaJuegos from "../components/ListaJuegos.vue";
import { mapState } from "vuex";

export default {
  components: { ListaJuegos, Navbar },
  data(){
    return {
      buscarCodigo: "",
    };
  },
  computed: {
    ...mapState({
      productoDisponibleCodigo() {
        return this.$store.getters.productoDisponibleCodigo(this.buscarCodigo);
      },
    }),
  },
};
  
</script>
<style scoped>

.input{
  width: 315px;
}

</style>
