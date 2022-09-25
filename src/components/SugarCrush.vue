<template>
  <div class="sugar-crush" :style="{visibility: visibility}">
    <h1>SUGAR CRUSH!</h1>
    <audio v-if="visibility == 'visible'"
      ref="audio"
      src="@/assets/sounds/Sugar_Crush.mp3"
      preload
      autoplay
    ></audio>
  </div>
</template>

<script>
export default {
    name: 'SugarCrush',
    props: ['visibility']

}
</script>

<style>
.sugar-crush {
  width: 506px;
  height: 505px;
  background: transparent;
  position: absolute;
  left: 520px;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sugar-crush h1 {
  color: #fff8dc;
  text-shadow: -4px 0 firebrick, 0 4px firebrick, 4px 0 firebrick, 0 -4px firebrick;
  font-family: "Emilys Candy", cursive;
  font-size: 65px;
}
</style>