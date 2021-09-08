import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productos: [
      {
        codigo: "1",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "2",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "3",
        nombre: "Gears Of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "4",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "5",
        nombre: "Bloodborne",
        stock: 100,
        precio: 30000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "6",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {

    stockTotal(state){
      return state.productos.reduce((accumulator, producto) => {
        accumulator = accumulator + producto.stock
        return accumulator;
      }, 0);
    },
    
    productoDisponibleCodigo: (state) => (codigo)=>{
      return state.productos.filter((producto)=>{
      return producto.codigo == codigo
      })
    }
  },
  // mutations: {},
  // actions: {},
});

export default store;
