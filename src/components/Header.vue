<template>
  <div class="header">
    <Life />
    <Star />
    <Coins />
    <SoundButton />
  </div>
</template>

<script>
// @ is an alias to /src
import Life from "@/components/Life.vue";
import Star from "@/components/Stars.vue";
import Coins from "@/components/Coins.vue";
import SoundButton from "@/components/SoundButton.vue";

export default {
  name: "Header",
  components: {
    Life,
    Star,
    Coins,
    SoundButton
  },
};
</script>

<style>
.header {
  width: 800px;
  height: 60px;
  background: url("../assets/images/header_background.jpg") no-repeat center fixed;
  z-index: 11;
  position: fixed;
  top: 35px;
  left: 25%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
