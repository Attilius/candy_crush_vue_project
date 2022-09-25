<template>
  <div class="life">
    <div id="heart">{{ setLife }}</div>
    <div id="life-regeneration">{{ life_status }}</div>
  </div>
</template>

<script>
export default {
  name: "Life",

  data() {
    return {
      life_status: "",
    };
  },

  mounted() {
    this.lifeRegeneration();
  },

  computed: {
    setLife() {
      return this.$store.getters.life
    }
  },

  methods: {
    changeLifeInStore() {
      this.$store.commit('increment', 1);
    },

    lifeRegeneration() {
      let min = 9;
      let sec = 60;
      let timecounter = "";
      const timer = setInterval(() => {
        if (sec > 0) {
          sec--;
          timecounter = "0" + min + ":" + sec;
          if (sec < 10) {
            timecounter = "0" + min + ":" + "0" + sec;
          }
        }

        if (min > 0 && sec === 0) {
          min--;
          sec = 60;
        }

        if (this.$store.getters.life <= 19 && min === 0 && sec === 0) {
          this.changeLifeInStore();
          min = 0;
          sec = 10;
        }

        if (this.$store.getters.life < 20) {
          this.life_status = timecounter;
        } else {
          clearInterval(timer);
          this.life_status = "Max";
        }
      }, 1000);
    },
  }
};
</script>

<style>
.life {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 60%;
}

#life-regeneration {
    height: 100%;
    width: 100%;
    border-radius: 50px;
    padding-left: 20px;
    background-color: rgb(73, 62, 84);
    border: 1px solid goldenrod;
    font-family: 'Emilys Candy', cursive;
    font-size: 22px;
    text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick, 0 -1px firebrick;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF8DC;
}

#heart {
    height: 140%;
    width: 55%;
    background: url("../assets/images/heart.png") no-repeat center;
    background-size: cover;
    font-family: 'Emilys Candy', cursive;
    font-size: 20px;
    text-align: center;
    text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick, 0 -1px firebrick;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF8DC;
    position: relative;
    bottom: 2px;
    left: 35px;
}
</style>
