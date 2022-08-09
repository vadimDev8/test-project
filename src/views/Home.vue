
<template>
	<div class="container">
		<a class="btn-output"
            @click="logout"
		>Выйти
		</a>
		<div class="test">
			<div class="test__inner">
				<div class="test__item">
					<div class="test__item-img">
						<div class="test__item-img__inner">
							<a href="" class="test__item-img__link">
								<img src="https://testlearn.ru/images/exams/numeric.svg">
							</a>
						</div>
					</div>
					<div class="test__item-text">
						<h3 class="test__item-text__title">
							Тест: Насколько вы знаете страны Евпропы
						</h3>
						<div class="test__item-text__info">
							В Европе на данный момент 43 страны 
                            без учета России и зависимых государств. 
                            Европейские страны наиболее развитые. 
                            В “большую семерку (восьмерку – если брать Россию)” 
                            входит четыре европейских страны: Великобритания, 
                            Германия, Франция и Италия. 
                            Европа постепенно становится 
                            одной большой страной под названием 
                            “Европейский Союз”. 
						</div>
						<a @click.prevent="deleteAnswersList" class="test__item-text__btn">
							Пройти тест
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>



export default {
    methods: {
        async logout() {
            this.$store.dispatch('logout')
            this.$router.push('/login')
        },
        async deleteAnswersList() {

            await this.$store.dispatch('deleteAnswersList')
            this.$router.push('/test')
        } 
    }
}
</script>
<style scoped>
    .container{
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 15px;
        box-sizing: border-box;
        position: relative;
    }
    .btn-output{
        position: absolute;
        right: 231px;
        display: inline-block;
        background-color: transparent;
        color: rgb(115, 73, 255);
        border-radius: 5px;
        padding: 7px 23px;
        font-size: 1.1em;
        font-weight: 400;
        border: 1px solid rgb(115, 73, 255);
        transition: all 0.2s ease 0s;
        margin-left: 20px;
        text-decoration: none;
        cursor: pointer;
    }
    .test__inner{
        display: flex;
        justify-content: center;
        padding-top: 70px;
        border-radius: 5px;
    }
    .test__item{
        min-width: 700px;
        min-height: 300px;     
        display: flex;
        justify-content: space-between;
    }
    .test__item:hover{
        box-shadow: rgb(230 220 255) 0px 2px 3px;
        transition: all 0.3s ease 0s;
    }
    .test__item-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        max-width: 450px;
        max-height: 270px;
    }
    .test__item-text__title{
        margin-top: 25px;
    }
    .test__item-text__info{
        min-height: 120px;
        margin-bottom: 20px;
    }
    .test__item-img{
            display: block;
            padding-left: 30px;
    }
    .test__item-img__inner{
        background-image: url(https://testlearn.ru/images/homepage/test-icon-bg.svg);
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 35px;
        height: 135px;
        width: 100px;
        display: flex;
        align-items: center;
        position: relative;
        transform: translateY(35px);
    }
    .test__item-img__inner img{
        position: absolute;
        top: 35%;
        left: 50%;
        right: 0;
        bottom: 0;
        height: 55px;
        width: 55px;
        transform: translateY(-50%);
        transform: translateX(-50%);
    }
    .btn-output:hover{
        color: rgb(255, 255, 255);
        background: rgb(115, 73, 255);
    }
</style>
