<template>
    <div class="Dropdown">
        <el-dropdown trigger="click" @command="handleLink">
            <span class="el-dropdown-link">
                {{ this.UserInfo.user }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in dropLists" :key="item.id" :command="item.link">{{
                    item.title }}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    props: {
        dropLists: {
            type: Array,
            default: () => []
        },
        UserInfo: Object
    },
    data() {
        return {

        }
    },
    methods: {
        handleLink(link) {
            if (link === '/login') {
                this.$store.commit('clearUserInfo');
                if (this.$store.state.token === null) {
                    this.$router.push(link);
                }
            } else {
                if (this.$store.state.token === null) {
                    this.$router.push('/login');
                } else {
                    if (this.$route.path === '/home' + link) {
                        return;
                    } else {
                        this.$router.push('/home' + link);
                    }
                }

            }
        }
    },
}
</script>

<style scoped>
.Dropdown {
    margin: 0 20px;
    cursor: pointer;
}
</style>