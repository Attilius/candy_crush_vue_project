<template>
  <div class="game-board">
    <Navbar />
    <div>
      <ScoreBoard :moves="moves" :score="score" />
      <GameTable
        @updateScore="(setScore) => (score += setScore)"
        @decrementMoves="(setMoves) => (moves -= setMoves)"
      />
      <SugarCrush :visibility="sugarCrushVisibility" />
      <LevelEndBoard :visibility="levelEndVisibility" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ScoreBoard from "../components/ScoreBoard.vue";
import GameTable from "../components/GameTable.vue";
import SugarCrush from "../components/SugarCrush.vue";
import LevelEndBoard from "../components/LevelEndBoard.vue";

export default {
  name: "GameBoard",
  components: {
    Navbar,
    ScoreBoard,
    GameTable,
    SugarCrush,
    LevelEndBoard
  },

  data() {
    return {
      moves: 20,
      score: 0,
      sugarCrushVisibility: 'hidden',
      levelEndVisibility: 'hidden'
    };
  },

  watch: {
    score(newValue, oldValue) {
      if (newValue >= 500) {
        this.sugarCrushVisibility = 'visible';
      }
    },
     moves(newValue, oldValue) {
      if (newValue === 0) {
        this.levelEndVisibility = 'visible';
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
