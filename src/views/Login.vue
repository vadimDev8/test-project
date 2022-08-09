<template>
    <div class="wrapper">
        <div class="login__inner">
            <div class="login__form-error">
            </div>
            <h2 class="login__title">Авторизация</h2>
            <form class="login__form" @submit.prevent="submitHandler">
                <div class="login__form-email">
                    <input 
                        class="login__form-email__data"
                        type="text"
                        v-model="email" 
                        placeholder="Ваш email"
                        :class="{invalid: ($v.email.$dirty && !$v.email.email) || ($v.email.$dirty && !$v.email.required)}"
                    >
                    <div 
                        class="invalid login__form-email__invalid"
                        v-if="$v.email.$dirty && !$v.email.required"
                    >Поле Email не должно быть пустым
                    </div>
                    <div 
                        class="invalid login__form-email__invalid"
                        v-if="$v.email.$dirty && !$v.email.email"
                    >Введите корретный Email
                    </div>
                    <img class="login__form-email__img" src="../img/Vector2.svg" alt="">
                </div>
                <div class="login__form-password">
                    <input
                        class="login__form-password__data" 
                        type="password"
                        v-model="password"
                        placeholder="Пароль"  
                        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                    >
                    <div 
                        class="invalid login__form-password__invalid"
                        v-if="$v.password.$dirty && !$v.password.required"
                    >Введите пароль
                    </div>
                    <div 
                        class="invalid login__form-password__invalid"
                        v-if="$v.password.$dirty && !$v.password.minLength"
                    >Пароль должен быть {{ $v.password.$params.minLength.min }} символов. Сейчас он {{ password.length }}
                    </div>
                    <img class="login__form-password__img" src="../img/Vector3.svg" alt="">
                </div>
                <div class="login__form-btn">
                    <button class="login__form-submit" type="submit">Войти</button>
                    <router-link tag="button" to="/register" class="login__form-register">Регистрация</router-link>
                </div>
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
            password: ''
        }
    },  
    validations: {
        email: {email, required},
        password: {required, minLength: minLength(6)}
    },
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(to) {
            error('.login__form-error', to.code)
        }
    },
    methods: {
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            const formData = {
                email: this.email,
                password: this.password
            }
            try {
                await this.$store.dispatch('login', formData)
                this.$router.push('/')
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
    .login__inner {
        width: 400px;
        min-height: 240px;
        max-height: 300px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
    }
    .login__form-email__img{
        position: absolute;
        left: 7px;
        top: 82px;
        z-index: 1;
    }
    .login__form-password__img{
        position: absolute;
        left: 7px;
        top: 150px;
        z-index: 1;
    }
    .login__form-email,
    .login__form-password{
        padding-bottom: 19px;
    }
    .login__form-error{
        position: relative;
        height: 5px;
        width: 5px;
        margin: 0 auto;
    } 
    .login__form-email__data{
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
    .login__form-password__data{
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
    .login__form-email__invalid{
        position: absolute;
        z-index: 21;
        top: 115px;
        left: 40px;
    }
    .login__form-password__invalid{
        position: absolute;
        z-index: 21;
        top: 182px;
        left: 40px;
    }
    .invalid{
        border-color: red;
        color: red;
    }
    .login__form-submit,
    .login__form-register{
        display: inline-block;
        margin: 18px 10px 0 10px;
        padding: 10px 25px;
        background: linear-gradient(to right, rgb(115, 73, 255), rgb(89, 52, 171));
        color: rgb(255, 255, 255);
        font-size: 1.1em;
        font-weight: 400;
        border-radius: 5px;
        transition: all 0.2s ease 0s;
        max-width: 150px;
        min-width: 150px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
    }
</style>