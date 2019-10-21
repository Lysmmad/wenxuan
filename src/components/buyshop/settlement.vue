<template>
    <main class="settlement">
      <div class="qurennav">
        <span class="icon my-iarrow-left" v-on:click="back"></span>
        <p>确认订单</p>
      </div>
      <div class="address">
        <div>
          <router-link to="">
            请新建收获地址以确保商品顺利到达<span class="icon my-ijiantou"></span>
          </router-link>
        </div>
        <p class="bgtiao"></p>
      </div>
      <div class="fangshi">
        <ul>
          <li>
            <router-link to="">
              配送方式
              <span class="icon my-ijiantou"></span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              支付方式
              <span class="icon my-ijiantou"></span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              电子发票
              <span class="icon my-ijiantou"></span>
              <span class="neednot">不需要发票</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="fangshi lijuan">
        <ul>
          <li>
            <router-link to="">
              礼券
              <span class="icon my-ijiantou"></span>
              <span class="neednot">无可用</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              购物卡/畅读卡
              <span class="icon my-ijiantou"></span>
              <span class="neednot">无可用</span>
            </router-link>
          </li>
          <li>
            暂存款
          </li>
        </ul>
      </div>
      <div class="finalc">
        <p class="buyword">
          <i class="icon my-ishangpin" style="color: #ccc"></i>
          <span>共 1 件商品</span>
        </p>
        <div class="finalimg">
          <img src="../../../data/images/b1.jpg" alt="">
          <div>
            <p>百年百部中国儿童文学经典书系-一百个中国孩子的梦</p>
            <p><span class="price">￥20.20</span><span class="num">X1</span></p>
          </div>
        </div>
      </div>
      <div class="finalfoot">
        <div class="fukuan">
          实付款：<span>￥20.20</span>
        </div>
        <div class="tijiaod">
          提交订单
        </div>
      </div>
    </main>
</template>

<script>
    export default {
        name: "settlement",
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
  html{
    background-color:#eeeeee;
  }
  a{
    text-decoration: none;
  }
  /*头部*/
  .qurennav{
    padding:3vw 5vw;
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 0px 3px 0px #ccc;
    font-size: 14px;
    font-weight: bold;
    color: #666666;
    background-color: white;
  }
  .qurennav span{
    float: left;
    color: red;
  }
  .qurennav p{
    text-align: center;
  }
  /*收货地址*/
  .address{
    text-align: center;
    background-color: white;
  }
  .address div{
    padding:10vw 0vw;
    margin:0vw 2vw;
  }
  .address div a{
    color: #666666;
    font-size: 13px;
  }
  .address span{
    float: right;
    color: red;
    font-weight: bold;
    font-size: 20px;
  }
  .bgtiao{
    width: 100%;
    height: 3px;
    background:url("../../assets/images/tiaotiao.png");
    background-size: 15% 100%;
  }

  .fangshi{
    margin-top: 5px;
  }
  .fangshi ul{
    background-color: white;
  }
  .fangshi li{
    padding: 3vw 2vw 3vw 5vw;
    border-bottom: 1px solid #f1f1f1;
    font-size: 13px;
    color: #666666;
  }
  .fangshi li a{
    font-size: 13px;
    color: #666666;
  }
  .fangshi li span{
    float: right;
    color: red;
    font-size: 14px;
  }
  .fangshi li .neednot{
    color: #666666;
    font-size: 13px;
  }

  .finalc{
    background-color: white;
  }
  .buyword{
    padding:2vw 5vw;
    font-size: 13px;
    color: #666666;
  }
  .finalimg{
    overflow: hidden;
  }
  .finalimg img{
    width: 20vw;
  }
  .finalimg div{
    width: 80vw;
    float: right;
    font-size: 14px;
  }
  .finalimg div p:nth-child(2){
    margin-top: 10px;
    overflow: hidden;
    padding: 0vw 5vw 0vw 0vw;
  }
  .finalimg div .price{
    float: left;
    color: red;
  }
  .finalimg div .num{
    float: right;
    color: red;
  }
  .finalfoot{
    position: fixed;
    bottom: 0px;
    line-height: 40px;
    height: 40px;
    background-color: white;
  }
  .finalfoot div{
    float: left;
  }
  .finalfoot .fukuan{
    width: 65vw;
    font-size: 12px;
    padding-left: 5vw;
    box-sizing: border-box;
  }
  .finalfoot .fukuan span{
    color: red;
    font-size: 20px;
  }
  .tijiaod{
    text-align: center;
    width: 35vw;
    background-color: red;
    color: white;
    font-weight: bold;
  }
</style>
