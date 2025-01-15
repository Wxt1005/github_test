<template>
  <div id="app">
      <el-container>
          <el-aside :width="asideWidth">
              <m-menu :onasideWidth="setAsideWidth" />
          </el-aside>
          <el-container>
              <el-header>
                  <m-header />
                  <div class="head_dropdowns">
                      <m-dropdown :user="UserInfo" :dropLists="dropList" />
                  </div>
              </el-header>
              <el-container>
                  <el-main>
                      <router-view></router-view>
                  </el-main>
                  <el-footer>
                      footer
                  </el-footer>
              </el-container>
          </el-container>
      </el-container>
  </div>
</template>

<script>
import MMenu from '@/components/Menu.vue'
import MHeader from '@/components/Header.vue'
import MDropdown from '@/components/Dropdown.vue'
export default {
  components: {
      MMenu,
      MHeader,
      MDropdown
  },
  data() {
      return {
          asideWidth: '200',
          dropList: [
              { id: 1, title: '我的资料', link: '/information' },
              { id: 2, title: '我的订单', link: '/order' },
              { id: 3, title: '我的收藏', link: '/collection' },
              { id: 4, title: '退出登录', link: '/login' }
          ],
          UserInfo:{ name: 'User Name '}
      };
  },
  methods: {
      setAsideWidth(width) {
          this.asideWidth = width;
      }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}

.el-header {
  background-color: rgb(167, 217, 233);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-footer {
  background-color: rgb(167, 217, 233);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 100vh;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: calc(100vh - 120px);
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.head_dropdowns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
