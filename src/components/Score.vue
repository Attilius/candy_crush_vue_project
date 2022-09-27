<template>
  <div class="current-score" id="score">
    <h1>+{{ score }}</h1>
  </div>
</template>

<script>
export default {
  name: "score",
  props: ["score", "index"],

  data() {
    return {
      matrix: [
        {
          top: "150px",
          left: "520px",
        },
        {
          top: "150px",
          left: "590px",
        },
        {
          top: "150px",
          left: "660px",
        },
        {
          top: "150px",
          left: "730px",
        },
        {
          top: "150px",
          left: "800px",
        },
        {
          top: "150px",
          left: "870px",
        },
        {
          top: "150px",
          left: "940px",
        },

        {
          top: "220px",
          left: "520px",
        },
        {
          top: "220px",
          left: "590px",
        },
        {
          top: "220px",
          left: "660px",
        },
        {
          top: "220px",
          left: "730px",
        },
        {
          top: "220px",
          left: "800px",
        },
        {
          top: "220px",
          left: "870px",
        },
        {
          top: "220px",
          left: "940px",
        },

        {
          top: "290px",
          left: "520px",
        },
        {
          top: "290px",
          left: "590px",
        },
        {
          top: "290px",
          left: "660px",
        },
        {
          top: "290px",
          left: "730px",
        },
        {
          top: "290px",
          left: "800px",
        },
        {
          top: "290px",
          left: "870px",
        },
        {
          top: "290px",
          left: "940px",
        },

        {
          top: "360px",
          left: "520px",
        },
        {
          top: "360px",
          left: "590px",
        },
        {
          top: "360px",
          left: "660px",
        },
        {
          top: "360px",
          left: "730px",
        },
        {
          top: "360px",
          left: "800px",
        },
        {
          top: "360px",
          left: "870px",
        },
        {
          top: "360px",
          left: "940px",
        },

        {
          top: "430px",
          left: "520px",
        },
        {
          top: "430px",
          left: "590px",
        },
        {
          top: "430px",
          left: "660px",
        },
        {
          top: "430px",
          left: "730px",
        },
        {
          top: "430px",
          left: "800px",
        },
        {
          top: "430px",
          left: "870px",
        },
        {
          top: "430px",
          left: "940px",
        },

        {
          top: "500px",
          left: "520px",
        },
        {
          top: "500px",
          left: "590px",
        },
        {
          top: "500px",
          left: "660px",
        },
        {
          top: "500px",
          left: "730px",
        },
        {
          top: "500px",
          left: "800px",
        },
        {
          top: "500px",
          left: "870px",
        },
        {
          top: "500px",
          left: "940px",
        },

        {
          top: "570px",
          left: "520px",
        },
        {
          top: "570px",
          left: "590px",
        },
        {
          top: "570px",
          left: "660px",
        },
        {
          top: "570px",
          left: "730px",
        },
        {
          top: "570px",
          left: "800px",
        },
        {
          top: "570px",
          left: "870px",
        },
        {
          top: "570px",
          left: "940px",
        },
      ],
    };
  },

  watch: {
    score(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          const score = document.getElementById("score");
          score.style.visibility = "visible";
        }, 10);
        this.setHide();
      }
    },

    index(newValue, oldValue) {
      if (newValue) {
        const score = document.getElementById("score");
        console.log(newValue);
        score.style.top = this.matrix[newValue].top;
        score.style.left = this.matrix[newValue].left;
      }
    },
  },

  methods: {
    setHide() {
      setTimeout(() => {
        const score = document.getElementById("score");
        score.style.visibility = "hidden";
      }, 2000);
    },
  },
};
</script>

<style>
#score {
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
}

.current-score h1 {
  text-align: center;
  font-size: 45px;
  font-family: "Emilys Candy", cursive;
  font-size: 44px;
  text-shadow: -3px 0 firebrick, 0 3px firebrick, 3px 0 firebrick,
    0 -3px firebrick;
  color: #fff8dc;
}
</style>
