<template>
  <div class="score-board">
    <div class="moves" id="moves">
      <h1 class="movesTitle">Moves</h1>
      <h1>{{ moves }}</h1>
    </div>
    <div class="score-bar">
      <div id="score-action"></div>
    </div>
    <div class="score">
      <h1>{{ score }}</h1>
    </div>
    <div class="taskSheet">
      <h1>Points:</h1>
      <h1>{{ score }}</h1>
      <h1>/500</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",

  data() {
    return {
      moves: 20,
      score: 0,
      bar: 100
    };
  },

  mounted() {
    const moves = document.getElementById('moves');

      moves.addEventListener('click', () => {
        this.score += 10;
        this.bar -= 4;
      });
  },

  methods: {
    actionBar() {
      const bar = document.getElementById('score-action');

    }
  }
};
</script>

<style>
.score-board {
  background-color: cornflowerblue;
  color: white;
  width: 250px;
  height: 565px;
  position: absolute;
  left: 250px;
  top: 80px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.moves {
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6px;
  position: absolute;
  top: -20px;
  left: 65px;
}

.movesTitle {
  font-size: 30px;
}

.score {
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 180px;
  left: 50px;
}

.score,
.moves {
  background: rgb(70, 90, 122);
  border-radius: 100px;
  margin: 50px auto;
  font-family: "Emilys Candy", cursive;
  color: #fff8dc;
  text-align: center;
}

.score h1,
.moves h1 {
  margin: 0;
  text-shadow: purple 1px 1px;
  font-size: 30px;
}

.taskSheet {
  height: 350px;
  width: 100%;
  background: url("../assets/images/task_sheet_background.jpg") no-repeat;
  background-size: cover;
  font-family: "Emilys Candy", cursive;
  font-size: 20px;
  color: #ff00ff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  position: relative;
  bottom: -300px;
}

.taskSheet h1 {
  margin: 0;
  text-align: center;
  text-shadow: purple 1px 1px;
}

.score-bar {
  width: 90%;
  height: 20px;
  background: linear-gradient(90deg, blue, lime);
  border-radius: 100px;
  position: absolute;
  top: 190px;
  left: 12px;
}
</style>
