<template>
  <div class="card" :style="{ visibility: visibility }">
    <div class="cover">
      <div class="exit" id="exit" @click="backToMain">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="buttonGroup">
        <div class="again">Claim</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Gift",
    props: ["visibility"],

    data() {
        return {
            prizes: [50, 75, 100, 125, 150, 200, 250]
        }
    }
}
</script>

<style>
.card {
  height: 515px;
  width: 515px;
  background: #fff8dc;
  position: absolute;
  left: 115px;
  top: 145px;
  border-radius: 20px;
  visibility: visible;
  z-index: 11;
}

.cover {
  height: 515px;
  width: 515px;
  background: url("../assets/images/level_end_background.png");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.buttonGroup {
  width: 100%;
  height: 10%;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Emilys Candy", cursive;
}


</style>