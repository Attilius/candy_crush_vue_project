<template>
  <div id="game-table">
    <img v-for="candy in candies" :key="candy.id"
        :src="'/img/' + candy.candy_image"
        :alt="candy.alt"
        :id="candy.id"
        :style="{
            background : candy.candy_image === '' ? 'transparent' : '#465a7abf',
            visibility : candy.candy_image === '' ? 'hidden' : 'visible'
            }"
        :draggable="true"
        @dragover="(e) => e.preventDefault()"
        @dragenter="(e) => e.preventDefault()"
        @dragleave="(e) => e.preventDefault()"
        @dragstart="dragStart"
        @drop="dragDrop"
        @dragend="dragEnd"
    />
  </div>
</template>

<script>
export default {
  name: "GameTable"

};
</script>

<style>

</style>
