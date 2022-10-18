import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        candies: [
            {
                id: 1,
                image: "red.png",
                alt: "red"
            },
            {
                id: 2,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 3,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 4,
                image: "blue.png",
                alt: "blue"
            },
            {
                id: 5,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 6,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 7,
                image: "red.png",
                alt: "red"
            },
            {
                id: 8,
                image: "",
                alt: ""
            },
            {
                id: 9,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 10,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 11,
                image: "green.png",
                alt: "green"
            },
            {
                id: 12,
                image: "blue.png",
                alt: "blue"
            },
            {
                id: 13,
                image: "blue.png",
                alt: "blue"
            },
            {
                id: 14,
                image: "",
                alt: ""
            },
            {
                id: 15,
                image: "green.png",
                alt: "green"
            },
            {
                id: 16,
                image: "green.png",
                alt: "green"
            },
            {
                id: 17,
                image: "blue.png",
                alt: "blue"
            },
            {
                id: 18,
                image: "red.png",
                alt: "red"
            },
            {
                id: 19,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 20,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 21,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 22,
                image: "green.png",
                alt: "green"
            },
            {
                id: 23,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 24,
                image: "red.png",
                alt: "red"
            },
            {
                id: 25,
                image: "blue.png",
                alt: "blue"
            },
            {
                id: 26,
                image: "red.png",
                alt: "red"
            },
            {
                id: 27,
                image: "blue.png",
                alt: "blue"
            },
            {
                id: 28,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 29,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 30,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 31,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 32,
                image: "green.png",
                alt: "green"
            },
            {
                id: 33,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 34,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 35,
                image: "green.png",
                alt: "green"
            },
            {
                id: 36,
                image: "",
                alt: ""
            },
            {
                id: 37,
                image: "green.png",
                alt: "green"
            },
            {
                id: 38,
                image: "green.png",
                alt: "green"
            },
            {
                id: 39,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 40,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 41,
                image: "green.png",
                alt: "green"
            },
            {
                id: 42,
                image: "",
                alt: ""
            },
            {
                id: 43,
                image: "red.png",
                alt: "red"
            },
            {
                id: 44,
                image: "blue.png",
                alt: "blue"
            },
            {
                id: 45,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 46,
                image: "green.png",
                alt: "green"
            },
            {
                id: 47,
                image: "purple.png",
                alt: "purple"
            },
            {
                id: 48,
                image: "yellow.png",
                alt: "goldenrod"
            },
            {
                id: 49,
                image: "red.png",
                alt: "red"
            },
        ],
        levels: {
            "level_1": {
                completed: false,
                highest_score: 0,
                stars: 0
            },
            "level_2": {
                completed: false,
                highest_score: 0,
                stars: 0
            },
            "level_3": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_4": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_5": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_6": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_7": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_8": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_9": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_10": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_11": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_12": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_13": {
                completed: false,
                best_score: 0,
                stars: 0
            },
            "level_14": {
                completed: false,
                best_score: 0,
                stars: 0
            },
        },
        life: 20,
        life_status: '',
        gift_time_counter: '',
        coins: 382,
        stars: 162
    },
    getters: {
        life(state) {
            return state.life;
        },

        lifeStatus(state) {
            return state.life_status;
        },

        giftTimeCounter(state) {
            return state.gift_time_counter;
        },

        coins(state) {
            return state.coins;
        },

        stars(state) {
            return state.stars;
        }
    },
    mutations: {
        decrement(state, step) {
            state.life -= step;
        },

        increment(state, step) {
            state.life += step;
        },

        changeLifeStatus(state, value) {
            state.life_status = value;
        },

        changeGiftTimeCounter(state, value) {
            state.gift_time_counter = value;
        },

        changeCoins(state, value) {
            state.coins += value;
        },

        changeStars(state, value) {
            state.stars += value;
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState(
        {
            paths: ['life', 'life_status', 'gift_time_counter', 'coins', 'stars']
        }
    )],
});
