<template>
  <div class="coins">
    <div id="coin"></div>
    <div id="available-coins">{{ coins }}</div>
  </div>
</template>

<script>
export default {
  name: "Coins",
  props: ['coins']
};
</script>

<style>
.coins {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 60%;
}

#available-coins{
    height: 100%;
    width: 100%;
    border-radius: 50px;
    background-color: rgb(73, 62, 84);
    border: 1px solid goldenrod;
    font-family: 'Emilys Candy', cursive;
    font-size: 22px;
    text-align: center;
    text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick, 0 -1px firebrick;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF8DC;
}

#coin {
    height: 140%;
    width: 40%;
    background: url("../assets/images/coin.png") no-repeat center;
    background-size: cover;
    position: relative;
    bottom: 0;
    left: 30px;
}

</style>
