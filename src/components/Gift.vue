<template>
  <div class="card">

  </div>
</template>

<script>
export default {
    name: "Gift",

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
</style>