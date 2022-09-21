<template>
  <div class="game-board">
    <Navbar />
    <div>
        <ScoreBoard />
        <GameTable />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ScoreBoard from "../components/ScoreBoard.vue";
import GameTable from "../components/GameTable.vue";

export default {
    name: "GameBoard",
    components: {
        Navbar,
        ScoreBoard,
        GameTable
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

.game-board div {
  display: flex;
}
</style>
