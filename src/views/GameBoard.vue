<template>
  <div class="game-board">
    <Navbar />
    <div>
      <ScoreBoard :moves="moves" :score="score" />
      <GameTable
        @updateScore="(setScore) => (score += setScore)"
        @updateGetScore="(setScore) => (getScore = setScore)"
        @updateIndex="(setIndex) => (index = setIndex)"
        @updateColor="(setColor) => (color = setColor)"
        @decrementMoves="(setMoves) => (moves -= setMoves)"
      />
      <SugarCrush :visibility="sugarCrushVisibility" />
      <LevelEndBoard :visibility="levelEndVisibility" />
      <Score
        :score="getScore"
        :index="index"
        :color="color"
        @resetGetScore="(resetGetScore) => (getScore = resetGetScore)"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import ScoreBoard from "@/components/ScoreBoard.vue";
import GameTable from "@/components/GameTable.vue";
import SugarCrush from "@/components/SugarCrush.vue";
import LevelEndBoard from "@/components/LevelEndBoard.vue";
import Score from "@/components/Score.vue";

export default {
  name: "GameBoard",
  components: {
    Navbar,
    ScoreBoard,
    GameTable,
    SugarCrush,
    LevelEndBoard,
    Score,
  },

  data() {
    return {
      moves: 20,
      score: 0,
      getScore: 0,
      index: 0,
      isWon: false,
      color: "",
      sugarCrushVisibility: "hidden",
      levelEndVisibility: "hidden",
    };
  },

  watch: {
    score(newValue, oldValue) {
      if (newValue >= 500) {
        this.sugarCrushVisibility = "visible";
      }
    },
    moves(newValue, oldValue) {
      if (newValue === 0) {
        this.levelEndVisibility = "visible";
      }
    },
  },
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
