<template>
  <div class="score-board">
    <div class="moves">

    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
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

.moves {
  background: rgb(70, 90, 122);
  border-radius: 100px;
  margin: 50px auto;
  font-family: 'Emilys Candy', cursive;
  color: #FFF8DC;
  text-align: center;
}
</style>
