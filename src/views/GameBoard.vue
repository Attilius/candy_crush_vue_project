<template>
  <div class="game-board">
    <Navbar />
    <div>
       <div v-if="levelEndVisibility === 'visible'" class="skin"></div>
      <ScoreBoard :moves="moves" :score="score" />
      <GameTable
        @updateScore="(setScore) => (score += setScore)"
        @updateGetScore="(setScore) => (getScore = setScore)"
        @updateIndex="(setIndex) => (index = setIndex)"
        @updateColor="(setColor) => (color = setColor)"
        @decrementMoves="(setMoves) => (moves -= setMoves)"
      />
      <BonusBoard />
      <SugarCrush :visibility="sugarCrushVisibility" />
      <LevelEndBoard 
        :visibility="levelEndVisibility" 
        :won="isWon" 
        :score="score"
      />
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
import BonusBoard from "@/components/BonusBoard.vue";

export default {
  name: "GameBoard",
  components: {
    Navbar,
    ScoreBoard,
    GameTable,
    SugarCrush,
    LevelEndBoard,
    Score,
    BonusBoard,
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
        this.isWon = true;
        this.levelEndVisibility = "visible";
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

.skin {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, .7);
  z-index: 11;
}
</style>
