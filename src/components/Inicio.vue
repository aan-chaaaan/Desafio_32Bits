<template>
  <div id="App">
    <h1>31bits</h1>
    <h2>Juegos de pc y consolas</h2>
    <ul>
      <li><router-link to="/">inicio</router-link></li>
      <li><router-link to="/busquedas">Busquedas</router-link></li>
      <li><router-link to="/ventas">Ventas</router-link></li>
      <li><router-link to="/total">Total</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchCode: "",
    };
  },
  computed: {
    ...mapState({}),
  },
};
</script>
