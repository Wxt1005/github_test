<template>
    <div class="Dropdown">
        <el-dropdown trigger="click" @command="handleLink">
            <span class="el-dropdown-link">
                {{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i>
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
        user: Object
    },
    data() {
        return {

        }
    },
    methods: {
        handleLink(link) {
            if (link === '/login') {
                sessionStorage.removeItem('token');
                this.$router.push(link);
            } else {
                this.$router.push('/home' + link);
            }
            // console.log('/home'+link)
        }
    }
}
</script>

<style scoped>
.Dropdown {
    margin: 0 20px;
    cursor: pointer;
}
</style>