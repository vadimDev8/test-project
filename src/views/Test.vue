<template>
	<div class="wrapper">
		<div class="home__btn-container">
			<router-link class="home__btn" tag="a" to="/">
			Вернуться
		</router-link>
		</div>
		<div class="test__form-container">
			<form class="test__form" @submit.prevent="submitHandler">
				<div class="test__form-inner">
					<h2 class="test__form-title">Добро пожаловать {{userName}}</h2>
					<div 
						v-for="data in testData"
						:key="data.question"
						:class="{open: !click}"
						class="test__form-template"
					>
						<div class="test__form-question" @click="data.click = !data.click">
							<b>{{data.question}}</b>
						</div>
						<div class="test__form-answers" :class="{open: data.click}">
							<p>
								<input type="radio" :value="data.value1" v-model="data.test[data['v-model']]">{{data.value1}}
							</p>
							<p>
								<input type="radio" :value="data.value2" v-model="data.test[data['v-model']]">{{data.value2}}
							</p>
							<p>
								<input type="radio" :value="data.value3" v-model="data.test[data['v-model']]">{{data.value3}}
							</p>
						</div>
					</div>
					<button ref="btn" type="submit" class="test__form-submit">Узнать результат</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>

export default {
	data() {
		return {
			click: true,
			click2: true,
			click3: true,
			testData: [
				{'v-model': 'france', value1: 'Лион', value2: 'Париж', value3: 'Марсель', question: 'Столица Франции?', test: {}, click: true},
				{'v-model': 'portugal', value1: 'Порту', value2: 'Сантарен', value3: 'Лиссабон', question: 'Столица Португалии?', test: {}, click: true},
				{'v-model': 'netherlands', value1: 'Амстердам', value2: 'Роттердам', value3: 'Эйндховен', question: 'Столица Нидерландов?', test: {}, click: true},
				{'v-model': 'norway', value1: 'Тронхейм', value2: 'Осло', value3: 'Нутодден', question: 'Столица Норвегии?', test: {}, click: true},
				{'v-model': 'serbia', value1: 'Белград', value2: 'Приштина', value3: 'Ниш', question: 'Столица Сербии?', test: {}, click: true},
				{'v-model': 'greece', value1: 'Афины', value2: 'Салоники', value3: 'Пирей', question: 'Столица Греции?', test: {}, click: true},
				{'v-model': 'belgium', value1: 'Льеж', value2: 'Брюссель', value3: 'Антверпен', question: 'Столица Бельгии?', test: {}, click: true},
				{'v-model': 'germany', value1: 'Мюнхен', value2: 'Гамбург', value3: 'Берлин', question: 'Столица Германии?', test: {}, click: true},
				{'v-model': 'belarus', value1: 'Могилев', value2: 'Витебск', value3: 'Минск', question: 'Столица Белорусии?', test: {}, click: true},
				{'v-model': 'slovakia', value1: 'Жилина', value2: 'Братислава', value3: 'Кошице', question: 'Столица Словакии?', test: {}, click: true},
			]
		}
	},
	computed: {
        userName() {
            return this.$store.getters.userName.name
        }
    },
	async mounted() {
        await this.$store.dispatch('fetchUserName')
    },
	methods: {
   		async submitHandler() {
			const formData = {
				firstResult: this.testData[0].test.france,
				secondResult: this.testData[1].test.portugal,
				thirdResult: this.testData[2].test.netherlands,
				fourthResult: this.testData[3].test.norway,
				fifthResult: this.testData[4].test.serbia,
				sixththResult: this.testData[5].test.greece,
				seventhResult: this.testData[6].test.belgium,
				eighthtResult: this.testData[7].test.germany,
				ninthResult: this.testData[8].test.belarus,
				tenthResult: this.testData[9].test.slovakia
			}
			try {
				await this.$store.dispatch('createAnswersList', formData)
				this.$router.push('/result')
			} catch (e) {}
		}
	}
}

</script>
<style scoped>
	.test__form-inner{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background: #f0f0f0; 
		min-width: 600px;
		border-radius: 20px;
	}
	.test__form-container{
		display: flex;
		justify-content: center;
	}
	.test__form-template{
		background: #fff;
		min-width: 400px;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 10px;
	}
	.test__form-submit{
		margin-top: 10px;
		margin-bottom: 20px;
	}
	.test__form-question{
		cursor: pointer;
	}
	.home__btn-container{
		display: flex;
		justify-content: end;
		max-width: 600px;
		margin: 0 auto;
		padding-top: 10px;
		padding-right: 10px;
	}
	.home__btn{
        display: inline-block;
        background: linear-gradient(to right, rgb(115, 73, 255), rgb(89, 52, 171));
        color: rgb(255, 255, 255);
        font-size: 1.1em;
        font-weight: 400;
        border-radius: 5px;
        transition: all 0.2s ease 0s;
        min-width: 100px;
        padding: 13px 25px 13px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 20px;
    } 
    .home__btn:hover{ 
        transition: all 0.2s ease 0s; 
        box-shadow: rgb(115 72 254 / 40%) 0px 4px 10px;
    }
	.open{
		display: none;
	}
	.invalid{
        border-color: red;
        color: red;
    }
</style>>
