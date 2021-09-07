import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    disponible: true,
    productos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: "100",
        precio: "30000",
        color: "red",
        destacado: "true",
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: "100",
        precio: "25000",
        color: "blue",
        destacado: "false",
      },
      {
        codigo: "0003",
        nombre: "Gears Of War 4",
        stock: "100",
        precio: "15000",
        color: "green",
        destacado: "true",
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: "100",
        precio: "35000",
        color: "yellow",
        destacado: "false",
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: "100",
        precio: "30000",
        color: "blue",
        destacado: "false",
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: "100",
        precio: "20000",
        color: "red",
        destacado: "true",
      },
    ],
  },
  getters: {
    productosEnStock: (state) => {
      return state.productos.filter((producto) => {
        return producto.stock > 0;
      });
    },
    productoDisponibleCodigo: (state, getters) => (codigo)=>{
      return getters.productosEnStock.filter((producto)=>{
      return producto.codigo == codigo
      })
    }
  },
  // mutations: {},
  // actions: {},
});

export default store;
