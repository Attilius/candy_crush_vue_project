<template>
  <div class="life">
    <div id="heart">{{ setLife }}</div>
    <div id="life-regeneration">{{ setLifeStatus }}</div>
  </div>
</template>

<script>
export default {
  name: "Life",

  mounted() {
    this.lifeRegeneration();
  },

  computed: {
    setLife() {
      return this.$store.getters.life;
    },

    setLifeStatus() {
      return this.$store.getters.lifeStatus;
    },
  },

  methods: {
    changeLifeInStore() {
      this.$store.commit("increment", 1);
    },

    changeLifeStatusInStore(value) {
      this.$store.commit("changeLifeStatus", value);
    },

    lifeRegeneration() {
      let min = 0;
      let sec = 0;
      let timecounter = "";

      if (
        this.$store.getters.lifeStatus !== "" &&
        this.$store.getters.lifeStatus !== "Max"
      ) {
        min = parseInt(
          this.$store.getters.lifeStatus.split(":")[0].split("")[1]
        );
        if (parseInt(this.$store.getters.lifeStatus.split(":")[1]) > 9) {
          sec = parseInt(this.$store.getters.lifeStatus.split(":")[1]);
        } else {
          sec = parseInt(
            this.$store.getters.lifeStatus.split(":")[1].split("")[1]
          );
        }
      } else {
        min = 9;
        sec = 60;
      }

      const timer = setInterval(() => {
        if (sec > 0) {
          sec--;
          timecounter = "0" + min + ":" + sec;
          if (sec < 10) {
            timecounter = "0" + min + ":0" + sec;
          }
        }

        if (min > 0 && sec === 0) {
          min--;
          sec = 60;
        }

        if (this.$store.getters.life <= 19 && min === 0 && sec === 0) {
          this.changeLifeInStore();
          min = 9;
          sec = 59;
        }

        if (this.$store.getters.life < 20) {
          this.changeLifeStatusInStore(timecounter);
        } else {
          clearInterval(timer);
          this.changeLifeStatusInStore("Max");
        }
      }, 1000);
    },
  },
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
  font-family: "Emilys Candy", cursive;
  font-size: 22px;
  text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick,
    0 -1px firebrick;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff8dc;
}

#heart {
  height: 140%;
  width: 55%;
  background: url("../assets/images/heart.png") no-repeat center;
  background-size: cover;
  font-family: "Emilys Candy", cursive;
  font-size: 20px;
  text-align: center;
  text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick,
    0 -1px firebrick;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff8dc;
  position: relative;
  bottom: 2px;
  left: 35px;
}
</style>
