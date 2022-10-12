<template>
  <div id="game-table">
    <img
      v-for="candy in $store.state.candies"
      :key="candy.id"
      :src="'/img/' + candy.image"
      :alt="candy.alt"
      :id="candy.id"
      :style="{
        background: candy.image === '' ? 'transparent' : '#465a7abf',
        visibility: candy.image === '' ? 'hidden' : 'visible',
        display: candy.image === 'null.png' ? 'none' : 'block',
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
      drag_start: "",
      drag_drop: "",
    };
  },

  methods: {
    dragStart(e) {
      this.drag_start = e.target;
    },

    dragDrop(e) {
      this.drag_drop = e.target;
    },

    dragEnd() {
      const fromIndex = parseInt(this.drag_start.getAttribute("id")) - 1;
      const toIndex = parseInt(this.drag_drop.getAttribute("id")) - 1;
      const chosen_image = this.drag_start.getAttribute("src").split("/")[2];
      const replaced_image = this.drag_drop.getAttribute("src").split("/")[2];
      const chosen_alt = this.drag_start.getAttribute("alt");
      const replaced_alt = this.drag_drop.getAttribute("alt");
      const validMoves = [
        fromIndex - 1,
        fromIndex - 7,
        fromIndex + 1,
        fromIndex + 7,
      ];
      const validMove = validMoves.includes(toIndex);

      if (validMove) {
        this.$store.state.candies[fromIndex].image = replaced_image;
        this.$store.state.candies[toIndex].image = chosen_image;
        this.$store.state.candies[fromIndex].alt = replaced_alt;
        this.$store.state.candies[toIndex].alt = chosen_alt;
        this.checkForDoubleThreeUpRight(50);
        this.checkForDoubleThreeUpLeft(50);
        this.checkForDoubleThreeDownRight(50);
        this.checkForDoubleThreeDownLeft(50);
        this.checkForColumnOfFive(50);
        this.checkForRowOfFive(50);
        this.checkForColumnOfFour(40);
        this.checkForRowOfFour(40);
        this.checkForRowOfThree(30);
        this.checkForColumnOfThree(30);
      }

      this.setMoves();
    },

    moveIntoSquareBelow() {
      for (let i = 0; i <= 48; i++) {
        const firstRow = [0, 1, 2, 3, 4, 5, 6];
        const isFirstRow = firstRow.includes(i);
        const fixedFields = [7, 13, 35, 41];
        const isFixedField = fixedFields.includes(i);
        const blank = "blank.png";

        if (
          (isFirstRow && this.$store.state.candies[i].image === blank) ||
          this.$store.state.candies[i].image === blank
        ) {
          let randomNumber = Math.floor(Math.random() * candyColors.length);
          this.$store.state.candies[i].image = candyColors[randomNumber].src;
          this.$store.state.candies[i].alt = candyColors[randomNumber].alt;
        }

        try {
          if (
            this.$store.state.candies[i + 7].image === blank &&
            !isFixedField
          ) {
            this.$store.state.candies[i + 7].image =
              this.$store.state.candies[i].image;
            this.$store.state.candies[i + 7].alt =
              this.$store.state.candies[i].alt;
            this.$store.state.candies[i].image = blank;
            this.$store.state.candies[i].alt = "blank";
          }
        } catch {}
      }
    },

    itemRemover(matchingArray, decidedColor, score) {
      if (
        matchingArray.every(
          (square) => this.$store.state.candies[square].alt === decidedColor
        )
      ) {
        if (
          matchingArray.every(
            (square) => this.$store.state.candies[square].image !== "blank.png"
          )
        ) {
          this.setScore(score);
          this.getCurrentScore(score);
          this.setIndex(matchingArray[1]);
          this.setColor(this.$store.state.candies[matchingArray[1]].alt);
        }

        matchingArray.forEach(
          (square) => (this.$store.state.candies[square].image = "blank.png")
        );
        return true;
      }
    },

    checkForColumnOfFive(score = 60) {
      for (let i = 0; i <= 21; i++) {
        const columnOfFive = [i, i + 7, i + 7 * 2, i + 7 * 3, i + 7 * 4];
        const decidedColor = this.$store.state.candies[i].alt;

        this.itemRemover(columnOfFive, decidedColor, score);
      }
    },

    checkForRowOfFive(score = 60) {
      for (let i = 0; i < 48; i++) {
        const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
        const decidedColor = this.$store.state.candies[i].alt;
        const notValid = [
          3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 17, 18, 19, 20, 24, 25, 26, 27, 31,
          32, 33, 34, 35, 37, 38, 39, 40, 41, 45, 46, 47, 48,
        ];

        if (notValid.includes(i)) continue;

        this.itemRemover(rowOfFive, decidedColor, score);
      }
    },

    checkForRowOfFour(score = 48) {
      for (let i = 0; i < 48; i++) {
        const rowOfFour = [i, i + 1, i + 2, i + 3];
        const decidedColor = this.$store.state.candies[i].alt;
        const notValid = [
          4, 5, 6, 7, 10, 11, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34, 35,
          38, 39, 40, 41, 46, 47, 48,
        ];

        if (notValid.includes(i)) continue;

        this.itemRemover(rowOfFour, decidedColor, score);
      }
    },

    checkForColumnOfFour(score = 48) {
      for (let i = 0; i <= 28; i++) {
        const columnOfFour = [i, i + 7, i + 7 * 2, i + 7 * 3];
        const decidedColor = this.$store.state.candies[i].alt;

        this.itemRemover(columnOfFour, decidedColor, score);
      }
    },

    checkForDoubleThreeUpRight(score = 60) {
      for (let i = 0; i < 48; i++) {
        const rowOfUpLeftDoubleThree = [i, i + 1, i + 2, i - 7, i - 7 * 2];
        const decidedColor = this.$store.state.candies[i].alt;
        const notValid = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20, 21, 26, 27,
          28, 33, 34, 35, 39, 40, 41, 42, 47, 48,
        ];

        if (notValid.includes(i)) continue;

        this.itemRemover(rowOfUpLeftDoubleThree, decidedColor, score);
      }
    },

    checkForDoubleThreeUpLeft(score = 60) {
      for (let i = 0; i < 48; i++) {
        const rowOfUpLeftDoubleThree = [i, i - 1, i - 2, i - 7, i - 7 * 2];
        const decidedColor = this.$store.state.candies[i].alt;
        const notValid = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 27,
          28, 29, 35, 36, 37, 41, 42, 43, 48,
        ];

        if (notValid.includes(i)) continue;

        this.itemRemover(rowOfUpLeftDoubleThree, decidedColor, score);
      }
    },

    checkForDoubleThreeDownRight(score = 60) {
      for (let i = 0; i < 48; i++) {
        const rowOfUpLeftDoubleThree = [i, i + 1, i + 2, i + 7, i + 7 * 2];
        const decidedColor = this.$store.state.candies[i].alt;
        const notValid = [
          0, 5, 6, 7, 11, 12, 13, 19, 20, 21, 26, 27, 28, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        ];

        if (notValid.includes(i)) continue;

        this.itemRemover(rowOfUpLeftDoubleThree, decidedColor, score);
      }
    },

    checkForDoubleThreeDownLeft(score = 60) {
      for (let i = 0; i < 48; i++) {
        const rowOfUpLeftDoubleThree = [i, i - 1, i - 2, i + 7, i + 7 * 2];
        const decidedColor = this.$store.state.candies[i].alt;
        const notValid = [
          0, 1, 6, 7, 8, 9, 13, 14, 15, 21, 22, 27, 28, 29, 34, 35, 36, 37, 38,
          39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        ];

        if (notValid.includes(i)) continue;

        this.itemRemover(rowOfUpLeftDoubleThree, decidedColor, score);
      }
    },

    checkForRowOfThree(score = 36) {
      for (let i = 0; i < 48; i++) {
        const rowOfThree = [i, i + 1, i + 2];
        const decidedColor = this.$store.state.candies[i].alt;
        const notValid = [
          5, 6, 7, 11, 12, 13, 19, 20, 26, 27, 33, 34, 35, 39, 40, 41, 47, 48,
        ];

        if (notValid.includes(i)) continue;

        this.itemRemover(rowOfThree, decidedColor, score);
      }
    },

    checkForColumnOfThree(score = 36) {
      for (let i = 0; i <= 35; i++) {
        const columnOfThree = [i, i + 7, i + 7 * 2];
        const decidedColor = this.$store.state.candies[i].alt;

        this.itemRemover(columnOfThree, decidedColor, score);
      }
    },

    setColor(color) {
      this.$emit("updateColor", color);
    },

    setIndex(index) {
      this.$emit("updateIndex", index);
    },

    setScore(score) {
      this.$emit("updateScore", score);
    },

    getCurrentScore(score) {
      this.$emit("updateGetScore", score);
    },

    setMoves() {
      this.$emit("decrementMoves", 1);
    },
  },

  mounted() {
    setInterval(() => {
      const lastIndex = this.$store.state.candies.length - 1;

      if (this.$store.state.candies[lastIndex].image !== "null.png") {
        this.$store.state.candies.push({ image: "null.png" });
      } else {
        this.$store.state.candies.pop();
      }
      this.moveIntoSquareBelow();
    }, 100);
  },

  watch: {
    "$store.state.candies": {
      handler() {
        this.checkForDoubleThreeUpRight();
        this.checkForDoubleThreeUpLeft();
        this.checkForDoubleThreeDownRight();
        this.checkForDoubleThreeDownLeft();
        this.checkForColumnOfFive();
        this.checkForRowOfFive();
        this.checkForColumnOfFour();
        this.checkForRowOfFour();
        this.checkForRowOfThree();
        this.checkForColumnOfThree();
      },
      immediate: true,
    },
  },
};
</script>

<style>
#game-table {
  width: 505px;
  height: 504px;
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
