<template>
    <div>
        <div class="loader__position" v-if="loader">
            <div class="loader" id="loader">
            </div>
        </div>
        <div v-else>
            <p class="result">Ваш результат {{correctAnswers}}</p>
            <router-link class="btn-home" to="/" tag="a">
                На главную
            </router-link>    
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loader: true,
            correctAnswers: 0,
            result: ['Париж', 'Лиссабон', 'Амстердам', 'Лиссабон','Осло','Белград','Афины','Брюссель','Берлин','Минск','Братислава']
        }
    },
    computed: {
        answers() {
            return this.$store.getters.answers
        }
    },
    methods: {
        async getResult() {
            const data = await this.$store.dispatch('fetchAnswersList')
            const res = Object.keys(data).map(i => data[i])
            Object.keys((res[0])).filter(i => (res[0][i] === this.result[0] || res[0][i] === this.result[1] || res[0][i] === this.result[2] || res[0][i] === this.result[3] || res[0][i] === this.result[4] || res[0][i] === this.result[5] || res[0][i] === this.result[6] || res[0][i] === this.result[7] || res[0][i] === this.result[8] || res[0][i] === this.result[9]))      
        }
    },
    async mounted() {
        const data = await this.$store.dispatch('fetchAnswersList')
        const res = Object.keys(data).map(i => data[i])
        this.correctAnswers = Object.keys((res[0])).filter(i => (res[0][i] === this.result[0] || res[0][i] === this.result[1] || res[0][i] === this.result[2] || res[0][i] === this.result[3] || res[0][i] === this.result[4] || res[0][i] === this.result[5] || res[0][i] === this.result[6] || res[0][i] === this.result[7] || res[0][i] === this.result[8] || res[0][i] === this.result[9])).length
        this.loader = false
    }
}
</script>

<style scoped>
    .loader__position{
        display: flex;
        justify-content: center;
        margin-top: 55px;
    }
    .loader {
        border: 8px solid #f3f3f3; /* Light grey */
        border-top: 8px solid rgb(115, 73, 255); /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .btn-home{
        display: inline-block;
        background: linear-gradient(to right, rgb(115, 73, 255), rgb(89, 52, 171));
        color: rgb(255, 255, 255);
        font-size: 1.1em;
        font-weight: 400;
        border-radius: 5px;
        transition: all 0.2s ease 0s;
        min-width: 150px;
        padding: 13px 35px 13px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 10px;
    }
    .btn-home:hover{ 
        transition: all 0.2s ease 0s; 
        box-shadow: rgb(115 72 254 / 40%) 0px 4px 10px;
    }
    .result{
        font-size: 25px;
        color: #5b36b3;
    }
</style>