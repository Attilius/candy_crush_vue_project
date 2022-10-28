<template>
  <div class="bonus-board">
    <img src="../assets/images/hand.png" id="hand" alt="hand">
    <img src="../assets/images/lollipop.png" id="lollipop" alt="lollipop">
    <img src="../assets/images/striped_wrapped.png" >
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
  position: absolute;
  left: 110px;
  top: 570px;
}

#hand {
  background: transparent;
  border: none;
  margin: 100px auto 0;
}

#lollipop {
  background: transparent;
  border: none;
  position: absolute;
  top: 220px;
  left: 15px;
}
</style>