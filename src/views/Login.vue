<template>
    <div class="login">
        <div class="login__div">
            <div class="login__div__content">
                <div class="login__div__content__top">
                    <h1>登录</h1>
                </div>
                <div class="login__div__content__center">
                    <m-form />
                </div>
                <div class="login__div__content__bottom">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MForm from "@/components/Form.vue"
export default {
    components: {
        MForm,
    }
}
</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/login.jpg');
    background-size: auto;
    background-position: center;

    &__div {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);

        &__content {
            min-width: 400px;
            min-height: 300px;
            background-color: #e6e6e6;
            width: 30vw;
            height: 50vh;
            margin: 0 auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;

            &__top {
                height: 20%;
                text-align: center;
            }

            &__center {
                height: 60%;
                width: 100%;

            }

            &__bottom {
                height: 20%;
                width: 100%;
            }
        }
    }
}
</style>