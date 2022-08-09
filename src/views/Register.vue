<template>
    <div class="wrapper">
        <div class="register__inner">
            <div class="register__form-error">
            </div>
            <h2 class="register__title">Регистрация</h2> 
            <form @submit.prevent="submitHandler" class="register__form">
                <div class="register__form-username">
                    <input 
                        type="text" 
                        placeholder="Имя" 
                        class="register__form-username__data"
                        v-model="name"
                        :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
                    >
                    <img class="register__form-username__img" src="../img/Vector1.svg" alt=""> 
                    <div 
                        class="invalid register__form-username__invalid"
                        v-if="$v.name.$dirty && !$v.name.required"
                        >Поле имени не должно быть пустым
                    </div>
                </div>
                <div class="register__form-email">
                    <input 
                        type="text" 
                        placeholder="E-mail" 
                        class="register__form-email__data"
                        v-model="email"
                        :class="{invalid: ($v.email.$dirty && !$v.email.email) || ($v.email.$dirty && !$v.email.required)}"
                    >
                    <div 
                        class="invalid register__form-email__invalid"
                        v-if="$v.email.$dirty && !$v.email.required"
                        >Поле Email не должно быть пустым
                    </div>
                    <div
                        class="invalid register__form-email__invalid"
                        v-if="$v.email.$dirty && !$v.email.email"
                        >Введите корретный Email
                    </div>
                    <img class="register__form-email__img" src="../img/Vector2.svg" alt="">  
                </div>
                <div class="register__form-password">
                    <input 
                        type="text" 
                        placeholder="Пароль" 
                        class="register__form-password__data"
                        v-model="password"
                        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                    >
                    <div
                        class="invalid register__form-password__invalid"
                        v-if="$v.password.$dirty && !$v.password.required"
                        >Поле пароля не должно быть пустым
                    </div>
                    <div
                        class="invalid register__form-password__invalid"
                        v-if="$v.password.$dirty && !$v.password.minLength"
                        >Минимальное значение {{$v.password.$params.minLength.min}} символов, сейчас {{password.length}}
                    </div>
                    <img class="register__form-password__img" src="../img/Vector3.svg" alt="">
                </div>
                <div class="register__form-agree">
                    <input 
                        type="checkbox" 
                        class="register__form-agree__choice"
                        v-model="agree"
                    >
                    <p class="register__form-agree__data"> Согласен на <span>обработку моих персональных данных</span></p>
                </div>
                <button type="submit" class="register__form-submit">
                    Зарегистрироваться
                </button>
            </form> 
        </div> 
    </div>
</template>


<script>
import error from '../utls/message.plagin'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            email: '',
            password: '',
            name: '',
            agree: false
        }
    },
    validations: {
        name: {required},
        email: {email, required},
        password: {required, minLength: minLength(6)},
        agree: {checked: v => v}
    },
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(to) {
            error('.register__form-error', to.code) 
        }
    },  
    methods: {
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            try {
                await this.$store.dispatch('register', formData)
                const p = document.createElement('p')
                const createdElement = document.querySelector('.register__form-error')
                createdElement.insertAdjacentElement('afterbegin', p)
                p.style.position = 'absolute'
                p.style.width = '400px'
                p.style.top = '-64px'
                p.style.left = '211px'
                p.style.color = '#fff'
                p.textContent = 'Пользователь зарегистрирован'
                setTimeout(() => {
                    createdElement.innerHTML = ''
                    this.$router.push('/login')
                }, 1000)
                this.name = ''
                this.password = ''
                this.email = ''
            } catch (e) {}
        }
    }
}
</script>
<style scoped>
    .wrapper{
        margin: 0;
        padding: 25px;
        background: #757575;
        height: 100vh;
        display: flex;
        justify-content: center;
        padding-top: 100px;
    }
    .register__inner{
        width: 450px;
        min-height: 300px;
        max-height: 400px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
    }
    .register__form-username,
    .register__form-email{
        padding-bottom: 20px;
    }
    .register__form-password{
        padding-bottom: 10px;
    }
    .register__form-username__data,
    .register__form-email__data,
    .register__form-password__data{
        position: relative;
        width: 73%;
        height: 40px;
        margin: 0 5px 5px;
        color: rgba(0,0,0,.65);
        font-size: 14px;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        transition: all .3s;
        padding: 0 12px 0;
    }
    .register__form-error{
        position: relative;
        height: 5px;
        width: 5px;
        margin: 0 auto;
    } 
    .register__form-username__img{
        position: absolute;
        left: 12px;
        top: 86px;
        z-index: 1;
    }
    .register__form-password__img{
        position: absolute;
        left: 12px;
        top: 230px;
        transform: translateY(-50%);
        z-index: 1;
    }
    .register__form-email__img{
        position: absolute;
        left: 12px;
        top: 162px;
        transform: translateY(-50%);
        z-index: 1;
    }
    .register__form-agree{
        display: flex;
        justify-content: space-between;
        margin: 4px 15px 15px;
    }
    .register__form-agree__choice{
        padding: 20px;
    }
    .invalid{
        border-color: red;
        color: red;
    }
    .register__form-email__invalid{
        position: absolute;
        z-index: 21;
        top: 182px;
        left: 48px;
    }
    .register__form-username__invalid{
        position: absolute;
        z-index: 21;
        top: 114px;
        left: 48px;
    }
    .register__form-password__invalid{
        position: absolute;
        z-index: 21;
        top: 249px;
        left: 48px;
    }
</style>
