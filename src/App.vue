<template>
    <div id="app">
        <m-loading v-if="loading" />
        <router-view></router-view>
    </div>
</template>

<script>
import MLoading from '@/components/Loading.vue'
export default {
    data() {
        return {
            loading: false
        }
    },
    components: {
        MLoading
    },
    watch: {
        $route(to, from) {
            this.loading = true;
        }
    },
    mounted() {
        this.$router.beforeEach((to, from, next) => {
            this.loading = true;
            next()
        })

        this.$router.afterEach(() => {
            this.loading = false;
        });
    }
}
</script>

<style scoped></style>