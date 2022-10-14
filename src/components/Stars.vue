<template>
  <div class="stars">
    <div id="star"></div>
    <div id="earned-stars">{{setStars}}</div>
  </div>
</template>

<script>
export default {
  name: "Stars",

  computed: {
    setStars() {
      return this.$store.getters.stars;
    }
  }
};
</script>

<style>
.stars {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  height: 60%;
}

#earned-stars {
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background-color: rgb(73, 62, 84);
  border: 1px solid goldenrod;
  font-family: "Emilys Candy", cursive;
  font-size: 22px;
  text-align: center;
  text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick,
    0 -1px firebrick;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff8dc;
}

#star {
  height: 120%;
  width: 40%;
  background: url("../assets/images/star.png") no-repeat center;
  background-size: cover;
  position: relative;
  bottom: 0;
  left: 30px;
}
</style>
