<template>
  <div class="game-board">
    <Navbar />
    <div>
      <ScoreBoard :moves="moves" :score="score" />
      <GameTable
        @updateScore="(setScore) => (score += setScore)"
        @decrementMoves="(setMoves) => (moves -= setMoves)"
      />
      <SugarCrush :visibility="visibility" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ScoreBoard from "../components/ScoreBoard.vue";
import GameTable from "../components/GameTable.vue";
import SugarCrush from "../components/SugarCrush.vue";

export default {
  name: "GameBoard",
  components: {
    Navbar,
    ScoreBoard,
    GameTable,
    SugarCrush
  },

  data() {
    return {
      moves: 20,
      score: 0,
      visibility: 'hidden'
    };
  },

  watch: {
    score(newValue, oldValue) {
      if (newValue >= 500) {
        this.visibility = 'visible';
      }
    }
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
