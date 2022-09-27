<template>
  <div class="current-score" id="score">
    <h1>+{{ score }}</h1>
  </div>
</template>

<script>
export default {
    name: 'score',
    props: ['score'],

    watch: {
        score(newValue, oldValue) {
            if (newValue) {
                setTimeout(() => {
                    const score = document.getElementById('score');
                    score.style.visibility = 'visible';
                },100);
                this.setHide();
            }
        }
    },

    methods: {
        setHide() {
            setTimeout(() => {
                const score = document.getElementById('score');
                score.style.visibility = 'hidden';
            }, 1000)
        }
    }

}
</script>

<style>
.current-score {
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 360px;
    left: 730px;
    visibility: hidden;
}

.current-score h1 {
    text-align: center;
    font-size: 45px;
    font-family: 'Emilys Candy', cursive;
    font-size: 44px;
    text-shadow: -3px 0 firebrick, 0 3px firebrick, 3px 0 firebrick, 0 -3px firebrick;
    color: #FFF8DC;
}
</style>