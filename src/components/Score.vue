<template>
  <div id="score">
    <h1 id="current-score">+{{ score }}</h1>
  </div>
</template>

<script>
export default {
  name: "score",
  props: ["score", "index", "color"],

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
      if (newValue > 0) {
        setTimeout(() => {
          const score = document.getElementById("score");
          score.style.visibility = "visible";
        }, 100);
        this.setHide();
      }
    },

    index(newValue, oldValue) {
      if (newValue !== 0) {
        const score = document.getElementById("score");

        score.style.top = this.matrix[newValue].top;
        score.style.left = this.matrix[newValue].left;

        this.moveScore(score);
      }
    },

    color(newValue, oldValue) {
      if (newValue !== '') {
        const score = document.getElementById("current-score");

        score.style.textShadow = `-3px 0 ${newValue}, 0 3px ${newValue}, 3px 0 ${newValue}, 0 -3px ${newValue}`;
      }
    }
  },

  methods: {
    setHide() {
      setTimeout(() => {
        const score = document.getElementById("score");
        score.style.visibility = "hidden";
        this.resetGetScore();
      }, 700);
    },

    resetGetScore() {
      this.$emit('resetGetScore', 0);
    },

    moveScore(score) {
      const rect = score.getBoundingClientRect();

      score.animate([
        // keyframes
        { 
          top: `${rect.top}px`,
          left: `${rect.left}px`
        },
        { 
          top: '240px',
          left: '330px'
        }
        ], {
        // timing options
        duration: 700,
        iterations: 1
      });
    }

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
  z-index: 11;
}

#current-score{
  text-align: center;
  font-size: 45px;
  font-family: "Emilys Candy", cursive;
  font-size: 44px;
  text-shadow: -3px 0 red, 0 3px red, 3px 0 red, 0 -3px red;
  color: #fff8dc;
}
</style>
