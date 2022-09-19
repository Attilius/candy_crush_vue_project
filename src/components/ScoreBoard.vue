<template>
  <div class="score-board">
    <div class="moves">
      <h1 class="movesTitle">Moves</h1>
      <h1>{{ moves }}</h1>
    </div>
    <div class="score">
      <h1>{{ score }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",

  data() {
    return {
      moves: 20,
      score: 0
    };
  },
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
  top: 120px;
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
}

.score, .moves {
  background: rgb(70, 90, 122);
  border-radius: 100px;
  margin: 50px auto;
  font-family: "Emilys Candy", cursive;
  color: #fff8dc;
  text-align: center;
}

.score h1, .moves h1 {
  margin: 0;
  text-shadow: purple 1px 1px;
  font-size: 30px;
}
</style>
