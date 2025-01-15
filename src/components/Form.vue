<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名：" prop="user">
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { LoginRequest } from '@/tools/PostRequest';
export default {
    data() {
        return {
            ruleForm: {
                user: '',
                pass: ''
            },
            rules: {
                user: [
                    { trigger: 'blur', required: true, message: '请输入用户名' },
                ],
                pass: [
                    { trigger: 'blur', required: true, message: '请输入密码' },
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post(LoginRequest, { user: this.ruleForm.user, pass: this.ruleForm.pass, email: '' }).then(res => {
                        if (res.data.code === 200) {
                            this.$router.push({ path: '/home' })
                            this.$store.commit('setToken', res.data.payload.token)
                            this.$store.commit('setUser', res.data.payload.user)
                        }
                    })
                        .catch(err => {
                            this.$message({
                                message: '用户名或密码错误',
                            })
                            this.$nextTick(() => {
                                this.$refs[formName].resetFields();
                            })
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }, 
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style scoped>
.demo-ruleForm {
    width: 100%;
    padding: 30px 0 0 0;
}

.el-form-item {
    margin-right: 80px;
}
</style>