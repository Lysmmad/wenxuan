<template>
    <main class="login">
      <div class="myhear">
        <div class="idnav">
          <div class="returnarr">
            <span class="icon my-iarrow-left" v-on:click="back"></span>
          </div>
          <div class="mylogin">
            文轩登录
          </div>
        </div>
      </div>
      <div class="shuru">
        <form action="">
          <input type="text" placeholder="用户名/邮箱/手机号" class="tit"><br/>
          <input type="password" placeholder="请输入密码" class="scre">
          <input type="button" value="登录">
        </form>
      </div>
      <div class="qiehuang">
        <router-link to="/register" class="zuce">立即注册</router-link>
        <router-link to="" class="forget">忘记密码</router-link>
      </div>
      <div class="otherway">
        <p>其他方式</p>
        <div>
          <ul>
            <li>
              <router-link to=""><img src="../assets/images/xl.png" alt=""></router-link>
            </li>
            <li>
              <router-link to=""><img src="../assets/images/qq.png" alt=""></router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="jieshao">
        <ul>
          <li>
            <span class="icon my-ijiating-yazi"></span><br/>
            100%正品保证
          </li>
          <li>
            <span class="icon my-ihuihua"></span><br/>
            7天无理由退换货
          </li>
          <li>
            <span class="icon my-ikefu"></span><br/>
            多仓直发快速配送
          </li>
        </ul>
      </div>
    </main>
</template>

<script>
    export default {
        name: "login",
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
  a{
    text-decoration: none;
  }
  html{
    background-color: #eeeeee;
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
  /*登录输入*/
  .shuru{
    text-align: center;
  }
  .tit,.scre{
    width: 100vw;
    padding:2vw 10vw;
    border: 1px solid #f1f1f1;
    font-size: 14px;
    color: #cfdbe3;
    box-sizing: border-box;
  }
  input[type=button]{
    margin-top: 25px;
    width: 90vw;
    border: 1px solid red;
    background-color: #f41e33;
    color: white;
    font-size: 14px;
    padding:2vw 0vw;
    border-radius: 5px;
  }
  .qiehuang{
    width: 90vw;
    margin:15px auto;
    text-align: center;
    overflow: hidden;
  }
  .qiehuang .zuce{
    float: left;
    color: #5c6467;
    font-size: 14px;
  }
  .qiehuang .forget{
    float: right;
    color: #5c6467;
    font-size: 14px;
  }
  /*其他方式*/
  .otherway{
    position: relative;
    font-size: 12px;
  }
  .otherway>p{
    text-align: center;
    color: #c9d0da;
  }
  .otherway>p::after,.otherway>p::before{
    content: '';
    display: block;
    width: 20vw;
    height: 1px;
    position: absolute;
    top: 8px;
    border-top: 2px dotted #c9d0da;
  }
  .otherway>p::before{
    left: 22vw;
  }
  .otherway>p::after{
    right: 22vw;
  }
  .otherway ul{
    width: 50vw;
    margin:10px auto;
    overflow: hidden;
  }
  .otherway li{
    float: left;
    margin-left: 20px;
  }
  .otherway li img{
    width: 10vw;
  }


  .jieshao{
    margin-top: 50px;
  }
  .jieshao li{
    width: 33.33vw;
    text-align: center;
    color: #c9c9c9;
    float: left;
    font-size: 12px;
  }
  .jieshao li span{
    font-size: 50px;
  }
</style>
