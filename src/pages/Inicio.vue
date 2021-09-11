<template>
<Navbar></Navbar>
</template>
<script>
import { mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  components:{ Navbar },
  computed: {
    ...mapState({}),
  },
};
</script>
<style scoped>
</style>
