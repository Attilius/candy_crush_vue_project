<template>
  <div class="game-board">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
    name: "GameBoard",
    components: {
        Navbar
    }
};
</script>

<style>
.game-board {
  height: 97.9vh;
  width: 100%;
  background: url("../assets/images/background.jpg") no-repeat left;
  background-position-x: 50%;
}
</style>
