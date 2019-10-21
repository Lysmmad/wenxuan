<template>
  <main class="goodsdetails">
    <div><headnav></headnav></div>
    <div class="cxinxi">
      <div>
        <span @click="msg=neirong">内容详情</span>
      </div>
      <div>
        <span @click="msg='chuban'">出版信息</span>
      </div>
    </div>
    <component v-bind:is="msg"></component>
    <router-view></router-view>
    <div><shopfoot></shopfoot></div>
  </main>
</template>

<script>
    import headnav from "./../nav/headnav";
    import shopfoot from "./../nav/shopfoot";
    import neirong from "./neirong";
    import chuban from "./chuban";
    export default {
        name: "goodsdetails",
        data(){
            return{
                msg:'neirong',
                neirong:'neirong'
            }
        },
        components:{
            headnav,
            shopfoot,
            neirong,
            chuban
        }
    }
</script>

<style scoped>
  .cxinxi{
    padding: 0vw 10vw;
    overflow: hidden;
    font-size: 14px;
    color: #66666a;
  }
  .cxinxi div{
    float: left;
    text-align: center;
    width: 50%;
    padding: 10vw 0vw;
  }
  .cxinxi span{
    border:1px solid red;
    border-radius: 5px;
    padding: 5px 20px;
  }
</style>
