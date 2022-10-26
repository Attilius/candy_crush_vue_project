<template>
  <div class="bonus-board">
    <SoundButton id="sound-btn" />
  </div>
</template>

<script>
import SoundButton from "@/components/SoundButton.vue";

export default {
    name: "BonusBoard",
    components: {
        SoundButton
    }
}
</script>

<style>
.bonus-board {
  background-color: cornflowerblue;
  color: white;
  width: 100px;
  height: 650px;
  position: absolute;
  right: 340px;
  top: 80px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

#sound-btn {
}
</style>