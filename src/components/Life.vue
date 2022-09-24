<template>
  <div class="life">
    <div id="heart">{{ life }}</div>
    <div id="life-regeneration">{{ life_status }}</div>
  </div>
</template>

<script>
export default {
  name: "Life",
  props: ['life', 'life_status']
};
</script>

<style>
.life {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 60%;
}

#life-regeneration {
    height: 100%;
    width: 100%;
    border-radius: 50px;
    padding-left: 20px;
    background-color: rgb(73, 62, 84);
    border: 1px solid goldenrod;
    font-family: 'Emilys Candy', cursive;
    font-size: 22px;
    text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick, 0 -1px firebrick;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF8DC;
}

#heart {
    height: 140%;
    width: 55%;
    background: url("../assets/images/heart.png") no-repeat center;
    background-size: cover;
    font-family: 'Emilys Candy', cursive;
    font-size: 20px;
    text-align: center;
    text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick, 0 -1px firebrick;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF8DC;
    position: relative;
    bottom: 2px;
    left: 35px;
}
</style>
