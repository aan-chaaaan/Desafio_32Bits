<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <a class="navbar-brand p-2" href="#">32Bit Store</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/busquedas" class="nav-link">Búsquedas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ventas" class="nav-link">Ventas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/total" class="nav-link">Total</router-link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    juegos: { type: String, require: true },
  },
};
</script>