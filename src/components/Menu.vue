<template>
    <div>
        <div class="aside-change" :style="{ width: isCollapse ? '200px' : '64px' }" @click="setAsideChange">
            <div v-if="!isCollapse" class="el-icon-s-unfold"> 展开</div>
            <div v-if="isCollapse" class="el-icon-s-fold"> 收起</div>
        </div>
        <el-menu :default-active="currentPath" class="el-menu-vertical-demo" background-color="rgb(137, 197, 233)"
            text-color="#fff" active-text-color="#0062FFFF" @select="handleSelect"
            :collapse="!isCollapse" :collapse-transition="false" :router="true">
            <el-menu-item index="/home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/home/about">
                <template slot="title">
                    <i class="el-icon-cpu"></i>
                    <span slot="title">功能页</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/home/about/aboutOne">功能页1</el-menu-item>
                    <el-menu-item index="/home/about/aboutTwo">功能页2</el-menu-item>
                    <el-menu-item index="/home/about/aboutThree">功能页3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/home/account">
                <i class="el-icon-document"></i>
                <span slot="title">账户管理</span>
            </el-menu-item>
            <el-menu-item index="/home/setting">
                <i class="el-icon-setting"></i>
                <span slot="title">系统设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    props: {
        onasideWidth: {
            type: Function,
            required: true
        },
    },
    data() {
        return {
            isCollapse: true,
            currentPath: this.$route.path
        };
    },
    methods: {
        setAsideChange() {
            this.isCollapse = !this.isCollapse
            if (this.isCollapse) {
                this.onasideWidth('64')
            } else {
                this.onasideWidth('200')
            }
        },
        handleSelect(index) {
            this.currentPath = index
        }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo {
    height: calc(100vh - 60px);
    box-sizing: border-box;
}

.collapse-enter-active,
.collapse-leave-active {
    transition: width 0.5s ease;
}

.collapse-enter,
.collapse-leave-to {
    width: 64px;
}

.collapse-enter-to {
    width: 200px;
}

.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}

.aside-change {
    background-color: rgb(137, 197, 233);
    cursor: pointer;
    box-sizing: border-box;
}
</style>