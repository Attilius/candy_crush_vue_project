<template>
  <div>
      <div class="sound" id="sound" @click="soundToggle">
        <i class="fa-solid fa-volume-high"></i>
      </div>
      <audio
      ref="audio"
      src="@/assets/sounds/Longloop.mp3"
      preload
      loop
      id="audio"
      autoplay
    ></audio>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>