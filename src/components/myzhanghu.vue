<template>
  <main id="myzhanghu">
    <div class="myhear">
      <div class="idnav">
        <div class="returnarr">
          <router-link to="/myid">
            <span class="icon my-iarrow-left"></span>
          </router-link>
        </div>
        <div class="my">
          我的账户
        </div>
        <div class="another">
          <b>...</b>
        </div>
      </div>
    </div>
    <div class="xinxi">
      <ul>
        <li class="xinxiname"><p>用户名<span>wx-nfjs</span></p></li>
        <li><router-link to><p>个人信息 <span class="icon my-ijiantou"></span></p></router-link></li>
        <li><router-link to><p>我的收获地址 <span class="icon my-ijiantou"></span></p></router-link></li>
        <li><router-link to><p>安全中心 <span class="icon my-ijiantou"></span></p></router-link></li>
        <li><router-link to><p>账号和绑定设置 <span class="icon my-ijiantou"></span></p></router-link></li>
      </ul>
    </div>
    <div class="tuichu">
      <button class="tzh">
        退出当前账户
      </button>
    </div>
  </main>
</template>
<script>
    export default {
        name: "myzhanghu"
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
    overflow: hidden;
    padding:2vw 4vw;
    background-color: #fafafa;
    border-bottom: 2px solid #eeeeee;
  }
  .myhear div{
    float: left;
  }
  .returnarr a{
    width: 10vw;
    line-height: 35px;
    color: red;
  }
  .returnarr span{
    font-size: 20px;
  }
  .my{
    text-align: center;
    width: 70vw;
    line-height: 35px;
    font-size: 16px;
  }
  .another{
    text-align: center;
    width: 10vw;
    font-size: 26px;
    color: gray;
    position: relative;
    top: -7px;
    right: -15px;
  }
  /*用户信息*/
  .xinxi ul li{
    padding:0px 4vw;
    font-size: 14px;
    color: gray;
    background-color: white;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eeeeee;
  }
  .xinxi li span{
    font-size: 24px;
    float: right;
    color: red;
  }
  .xinxiname p span{
    color: gray;
    padding-right: 20px;
    font-size: 14px;
  }
  .xinxi li a{
    color: gray;
  }
  /*推出当前账户*/
  .tuichu{
    width: 100vw;
    padding:3vw 0vw;
    text-align: center;
    position: fixed;
    bottom: 0px;
    background-color: white;
  }
  .tzh{
    border: 1px solid red;
    color: white;
    background-color: #f41e33;
    border-radius: 5px;
    padding:2vw 15vw;
  }
</style>
