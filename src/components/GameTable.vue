<template>
  <div id="game-table">
    <img v-for="candy in $store.state.candies" :key="candy.id"
        :src="'/img/' + candy.image"
        :alt="candy.alt"
        :id="candy.id"
        :style="{
            background : candy.image === '' ? 'transparent' : '#465a7abf',
            visibility : candy.image === '' ? 'hidden' : 'visible',
            display: candy.image === null ? 'none' : 'flex'
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
import candyColors from "../static/candyColors.js";

export default {
  name: "GameTable",

  data() {
    return {
        drag_start : '',
        drag_drop : ''
    }
  },

  methods: {
    dragStart(e) {
        this.drag_start = e.target;
    },

    dragDrop(e) {
        this.drag_drop = e.target;
    },

    dragEnd() {
        const fromIndex = parseInt(this.drag_start.getAttribute('id')) - 1;
        const toIndex = parseInt(this.drag_drop.getAttribute('id')) - 1;
        const chosen_image = this.drag_start.getAttribute('src').split('/')[2];
        const replaced_image = this.drag_drop.getAttribute('src').split('/')[2];
        const chosen_alt = this.drag_start.getAttribute('alt');
        const replaced_alt = this.drag_drop.getAttribute('alt');
        const validMoves = [
                fromIndex - 1,
                fromIndex - 7,
                fromIndex + 1,
                fromIndex + 7
            ];
        const validMove = validMoves.includes(toIndex)

        if (validMove) {
            this.$store.state.candies[fromIndex].image = replaced_image;
            this.$store.state.candies[toIndex].image = chosen_image;
            this.$store.state.candies[fromIndex].alt = replaced_alt;
            this.$store.state.candies[toIndex].alt = chosen_alt;
        }
    },

    moveIntoSquareBelow() {
    for (let i = 0; i <= 48; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6];
      const isFirstRow = firstRow.includes(i);
      const fixedFields = [7, 13, 35, 41];
      const isFixedField = fixedFields.includes(i);
      const blank = "blank.png";

      if (isFirstRow && this.$store.state.candies[i].image === blank || this.$store.state.candies[i].image === blank) {
        let randomNumber = Math.floor(Math.random() * candyColors.length);
        this.$store.state.candies[i].image = candyColors[randomNumber].src;
        this.$store.state.candies[i].alt = candyColors[randomNumber].alt;
      }

      try {
        if (this.$store.state.candies[i + 7].image === blank && !isFixedField) {
            this.$store.state.candies[i + 7].image = this.$store.state.candies[i].image;
            this.$store.state.candies[i + 7].alt = this.$store.state.candies[i].alt;
            this.$store.state.candies[i].image = blank;
            this.$store.state.candies[i].alt = "blank";
        }
      } catch {}
    }
  },

  itemRemover(matchingArray, decidedColor, isBlank) {
    if (matchingArray.every(square => this.$store.state.candies[square].image === decidedColor && !isBlank)) {
        matchingArray.forEach(square => this.$store.state.candies[square].image = "blank.png");
        return true;
      }
  },

  checkForColumnOfFive() {
    for (let i = 0; i <= 21; i++) {
      const columnOfFive = [i, i + 7, i + 7 * 2, i + 7 * 3, i + 7 * 4];
      const decidedColor = this.$store.state.candies[i].image;
      const blank = "blank.png";
      const isBlank = this.$store.state.candies[i].image === blank;

      if (columnOfFive.every(square => this.$store.state.candies[square].image === decidedColor && !isBlank)) {
        columnOfFive.forEach(square => this.$store.state.candies[square].image = blank);
        return true;
      }
    }
  },

  checkForRowOfFive() {
    for (let i = 0; i < 48; i++) {
      const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
      const decidedColor = this.$store.state.candies[i].image;
      const notValid = [3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 17, 18, 19, 20, 24, 25, 26, 27, 31, 32, 33,
        34, 35, 37, 38, 39, 40, 41, 45, 46, 47, 48];
      const blank = "blank.png";
      const isBlank = this.$store.state.candies[i].image === blank;

      if (notValid.includes(i)) continue;

      if (rowOfFive.every(square => this.$store.state.candies[square].image === decidedColor && !isBlank)) {
        rowOfFive.forEach(square => this.$store.state.candies[square].image = blank);
        return true;
      }
    }
  },

    checkForRowOfFour() {
    for (let i = 0; i < 48; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = this.$store.state.candies[i].image;
      const notValid = [4, 5, 6, 7, 10, 11, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34, 35, 38, 39, 40, 41, 46, 47, 48];
      const blank = "blank.png";
      const isBlank = this.$store.state.candies[i].image === blank;

      if (notValid.includes(i)) continue;

      if (rowOfFour.every(square => this.$store.state.candies[square].image === decidedColor && !isBlank)) {
        rowOfFour.forEach(square => this.$store.state.candies[square].image = blank);
        return true;
      }
    }
  },

  checkForColumnOfFour() {
    for (let i = 0; i <= 28; i++) {
      const columnOfThree = [i, i + 7, i + 7 * 2, i + 7 * 3];
      const decidedColor = this.$store.state.candies[i].image;
      const blank = "blank.png";
      const isBlank = this.$store.state.candies[i].image === blank;

      if (columnOfThree.every(square => this.$store.state.candies[square].image === decidedColor && !isBlank)) {
        columnOfThree.forEach(square => this.$store.state.candies[square].image = blank);
        return true;
      }
    }
  },

    checkForRowOfThree() {
    for (let i = 0; i < 48; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = this.$store.state.candies[i].image;
      const notValid = [5, 6, 7, 11, 12, 13, 19, 20, 26, 27, 33, 34, 35, 39, 40, 41, 47, 48];
      const blank = "blank.png";
      const isBlank = this.$store.state.candies[i].image === blank;

      if (notValid.includes(i)) continue;

      this.itemRemover(rowOfThree, decidedColor, isBlank);
    }
  },

 checkForColumnOfThree () {
    for (let i = 0; i <= 35; i++) {
      const columnOfThree = [i, i + 7, i + 7 * 2];
      const decidedColor = this.$store.state.candies[i].image;
      const blank = "blank.png";
      const isBlank = this.$store.state.candies[i] === blank;

      this.itemRemover(columnOfThree, decidedColor, isBlank);
    }
  },

  },

  mounted() {
    setInterval(()=> {
        if (this.$store.state.candies.image !== null) {
            this.$store.state.candies.push({image: null})
        } else {
            this.$store.state.candies.pop({image: null})
        }
        this.moveIntoSquareBelow();
    }, 100);
  },

  watch: {
    '$store.state.candies' : {
        handler() {
            this.checkForColumnOfFive();
            this.checkForRowOfFive();
            this.checkForColumnOfFour();
            this.checkForRowOfFour();
            this.checkForRowOfThree();
            this.checkForColumnOfThree();
      },
      immediate: true
    }
  }

};
</script>

<style>
#game-table {
  width: 505px;
  height: 505px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 100px;
  border-radius: 8px;
  position: absolute;
  left: 520px;
  top: 50px;
}

img {
  width: 70px;
  height: 70px;
  border: 1px solid lightblue;
  background-color: #465a7abf;
}
</style>
