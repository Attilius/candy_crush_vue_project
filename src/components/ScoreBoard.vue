<template>
  <div class="score-board">
    <div class="moves" id="moves">
      <h1 class="movesTitle">Moves</h1>
      <h1>{{ moves }}</h1>
    </div>
    <div class="score-bar">
        <div class="border-of-level-stars-1 bar-star"></div>
        <div class="border-of-level-stars-2 bar-star"></div>
        <div class="border-of-level-stars-3 bar-star"></div>
        <div class="border-of-level-stars-4 bar-star"></div>
        <div class="border-of-level-stars-5 bar-star"></div>
        <div class="border-of-level-stars-6 bar-star"></div>
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
  props: ['moves', 'score'],

  data() {
    return {
      bar: 100
    };
  },


  watch: {
    score(newValue, oldValue) {
      if (newValue) {
        this.bar -= 1.8;
        this.actionBar();
      }
    }
  },

  methods: {
    actionBar() {
      const bar = document.getElementById('score-action');

      if (this.score > 50) {
        bar.style.width = `${this.bar}%`;
        bar.style.borderTopLeftRadius = 0;
        bar.style.borderBottomLeftRadius = 0;
      }
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
  text-shadow: -2px 0 firebrick, 0 2px firebrick, 2px 0 firebrick, 0 -2px firebrick;
  font-size: 30px;
}

.taskSheet {
  height: 350px;
  width: 100%;
  background: url("../assets/images/task_sheet_background.jpg") no-repeat;
  background-size: cover;
  font-family: "Emilys Candy", cursive;
  font-size: 20px;
  color: #fff8dc;
  text-shadow: -2px 0 firebrick, 0 2px firebrick, 2px 0 firebrick, 0 -2px firebrick;
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

#score-action {
  background: rgb(70, 90, 122);
  border-radius: 100px;
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
}

.bar-star {
  width: 10%;
  height: 100%;
  background: url("../assets/images/3D_star.png") no-repeat center;
  background-size: cover;
  z-index: 1;
}

.border-of-level-stars-1 {
  position: absolute;
  top: -13px;
  left: 20%;
}
.border-of-level-stars-2 {
  position: absolute;
  top: -13px;
  left: 40%;
}
.border-of-level-stars-3 {
  position: absolute;
  top: -13px;
  left: 44%;
}
.border-of-level-stars-4 {
  position: absolute;
  top: -13px;
  left: 70%;
}
.border-of-level-stars-5 {
  position: absolute;
  top: -13px;
  left: 74%;
}
.border-of-level-stars-6 {
  position: absolute;
  top: -13px;
  left: 78%;
}
</style>
