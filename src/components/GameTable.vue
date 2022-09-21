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
  name: "GameTable",

  data() {
    return {
        candies: [
            {
                id : 1,
                candy_image : "red.png",
                alt : "red"
            },
            {
                id : 2,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 3,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 4,
                candy_image : "blue.png",
                alt : "blue"
            },
            {
                id : 5,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 6,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 7,
                candy_image : "red.png",
                alt : "red"
            },
            {
                id : 8,
                candy_image : "",
                alt : ""
            },
            {
                id : 9,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 10,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 11,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 12,
                candy_image : "blue.png",
                alt : "blue"
            },
            {
                id : 13,
                candy_image : "blue.png",
                alt : "blue"
            },
            {
                id : 14,
                candy_image : "",
                alt : ""
            },
            {
                id : 15,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 16,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 17,
                candy_image : "blue.png",
                alt : "blue"
            },
            {
                id : 18,
                candy_image : "red.png",
                alt : "red"
            },
            {
                id : 19,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 20,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 21,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 22,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 23,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 24,
                candy_image : "red.png",
                alt : "red"
            },
            {
                id : 25,
                candy_image : "blue.png",
                alt : "blue"
            },
            {
                id : 26,
                candy_image : "red.png",
                alt : "red"
            },
            {
                id : 27,
                candy_image : "blue.png",
                alt : "blue"
            },
            {
                id : 28,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 29,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 30,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 31,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 32,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 33,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 34,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 35,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 36,
                candy_image : "",
                alt : ""
            },
            {
                id : 37,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 38,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 39,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 40,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 41,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 42,
                candy_image : "",
                alt : ""
            },
            {
                id : 43,
                candy_image : "red.png",
                alt : "red"
            },
            {
                id : 44,
                candy_image : "blue.png",
                alt : "blue"
            },
            {
                id : 45,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 46,
                candy_image : "green.png",
                alt : "green"
            },
            {
                id : 47,
                candy_image : "purple.png",
                alt : "purple"
            },
            {
                id : 48,
                candy_image : "yellow.png",
                alt : "yellow"
            },
            {
                id : 49,
                candy_image : "red.png",
                alt : "red"
            },
        ],

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
            this.candies[fromIndex].candy_image = replaced_image;
            this.candies[toIndex].candy_image = chosen_image;
            this.candies[fromIndex].alt = replaced_alt;
            this.candies[toIndex].alt = chosen_alt;
        }
        
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
