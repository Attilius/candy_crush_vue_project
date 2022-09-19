<template>
  <div class="game-board">
    <Navbar />
    <div>
        <ScoreBoard />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ScoreBoard from "../components/ScoreBoard.vue";

export default {
    name: "GameBoard",
    components: {
        Navbar,
        ScoreBoard
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
