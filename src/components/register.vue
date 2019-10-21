<template>
    <main class="register">
      <div class="myhear">
        <div class="idnav">
          <div class="returnarr">
            <span class="icon my-iarrow-left" v-on:click="back"></span>
          </div>
          <div class="mylogin">
            文轩登录
          </div>
          <div class="another">
            <b>...</b>
          </div>
        </div>
      </div>
      <div class="write">
        <form action="">
          <div class="wtitle">
            <p class="shouji"><span class="icon my-ishijian1"></span>手机注册</p>
            <p class="youxiang">或<span> 邮箱注册</span></p>
          </div>
          <input type="text" placeholder="请输入您常用的手机" required><br/>
          <div class="tupian">
            <input type="text" placeholder="请输入图片验证码 点击图片刷新" required>
            <span><img src="../../data/images/verifycode.jpg" alt=""></span>
          </div>
          <div class="yanzheng">
            <input type="text" placeholder="请输入验证码" required>
            <button>获取验证码</button>
          </div>
          <input type="password" placeholder="请设置6-16位登录密码" required>
          <p class="agreen"><span class="circle"></span>我已同意 <router-link to="">《文轩网交易条款》</router-link></p>
          <input type="button" value="注册">
        </form>
        <p class="have">已有账号，去<router-link to="/login">登录<span>&gt;</span></router-link></p>
      </div>
    </main>
</template>

<script>
    export default {
        name: "register",
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  html{
    background-color: #eeeeee;
  }
  .idnav{
    position: relative;
  }
  .myhear{
    background-color: white;
    padding:3vw 5vw;
    text-align: center;
  }
  .returnarr{
    float: left;
  }
  .returnarr span{
    font-size: 24px;
    color: red;
  }
  .another{
    font-size: 26px;
    color: gray;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .another b{
    position: relative;
    top: -10px;
  }
  .write{
    margin-top: 7vw;
    background-color: white;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    overflow: hidden;
  }
  input{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #b1b0b0;
    font-size: 14px;
    padding:10px 5vw;
    width: 100%;
  }
  .wtitle{
    border-bottom: 1px solid #cccccc;
    font-size: 14px;
    padding: 2vw 5vw;
    overflow: hidden;
  }
  .shouji{
    float: left;
  }
  .youxiang{
    float: right;
  }
  .shouji span,.youxiang span{
    color: red;
    margin-right: 5px;
  }
  .tupian{
    position: relative;
  }
  .tupian span{
    position: absolute;
    right: 0px;
    top: 0px;
    padding-right: 5vw;
  }
  .yanzheng{
    position: relative;
  }
  button{
    position: absolute;
    top: 1px;
    right: 5vw;
    border-radius: 3px;
    color: white;
    background-color: #f92438;
    border: 1px solid #f92438;
    padding: 0vw 2vw;
    font-size: 14px;
    line-height:34px;
  }
  .agreen{
    margin-top: 10px;
    text-align: left;
    margin-left: 5vw;
    font-size: 14px;
  }
  .agreen a{
    color: #0088cc;
  }
  .circle{
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #d7d7d7;
    border-radius: 50%;
    margin-right: 2px;
    position: relative;
    top: 5px;
  }
  input[type=button]{
    margin: 10px 0px;
    width:90vw;
    border-radius: 5px;
    color: white;
    background-color: #f92438;
    border: 1px solid #f92438;
    padding: 1vw 0vw;
    font-size: 14px;
  }
  .have{
    float: right;
    margin-bottom: 10px;
    font-size: 14px;
    margin-right: 5vw;
  }
</style>
