<template>
  <div class="login">
    <div class="photo"></div>
    <div class="name">用户登录</div>
    <ul>
      <li>
        <label>user:</label><input type="text" placeholder="user" v-model="user">
        <div class="error" v-if="userError">
          {{userError}}
        </div>
      </li>
      <li>
        <label>password:</label><input type="password" placeholder="password" v-model="password">
        <div class="error" v-if="passwordError">{{passwordError}}</div>
      </li>
    </ul>
    <div class="btn" @click="login">登录</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
// import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class LoginCom extends Vue {
  user: string = ''
  password: string = ''
  userError: string = ''
  passwordError: string = ''
  login () {
    if(this.user.length <= 0) {
      this.userError = '用户名不能为空！'
      return
    }
    if(this.password.length < 6) {
      this.userError = '密码最小为6为'
      return
    }
    location.href="http://139.196.22.133/index.html?userToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHAiOm51bGwsIm1vZCI6ImFwaSIsIm9yZyI6ImVhYjM0NjU2MmJmZTQzMWRiOTAwMjFlN2FhZDNiODIyIiwiaXNzIjoibGMiLCJkcHQiOm51bGwsInR5cCI6bnVsbCwidGlkIjoiMDAwMSIsInVpZCI6IjI4ODc4YWMwNTkzNzRiMzg4MzYxYjBmZGRiNjU5OGE4IiwiY3luIjoi6aKG5YGl5oC76YOoIiwiZXhwIjoxNTU4MjUzNDYzLCJpYXQiOjE1NDk2MTM0NjMsImx0ZCI6ImQ2ODVmZjMwNmNhNTRiMWVhMDZiNzA3ZmIwZjU3NjU5In0.GBQfx9XWOgni7PiU6hDfVzk8VE0V6pqfTK28BxisneA#/paihao"
  }
}
</script>

<style lang="scss" scoped>
.login{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  // border:1px solid #ddd;
  padding:30px;
  label{
    display: inline-block;
    min-width: 80px;
    display: none;
  }
  li{
    margin:10px 0;
    input{
      width:260px;
      padding:5px;
      height: 24px;
      line-height: 30px;
      border:none;
    }
  }
}
.photo{
  display: block;
  margin:0 auto;
  height:80px;
  width:80px;
  background: url('../images/photo.png') no-repeat;
  background-size: 100% 100%;
}
.name{
  color:#fff;
  font-size: 20px;
  margin:10px auto;
  text-align: center;
}
.btn{
  display: block;
  margin:30px auto;
  width: 100px;
  text-align: center;
  line-height: 36px;
  height: 36px;
  font-size:16px;
  color:#fff;
  background:#023d3b;
  cursor: pointer;
  &:hover{
    text-shadow: 0 0 3px #ddd;
  }
}
</style>