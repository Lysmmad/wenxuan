<template>
  <div id="myid">
      <div class="myidhear">
        <router-link to="/myzhanghu"><i class="icon my-ishezhi"></i></router-link>
        <div class="myhearcon">
          <p>
            <img src="../assets/images/tou.png" alt="">
          </p>
          <p>您好，来自于文轩网的(哈吉)</p>
          <div class="aboutmy">
            <div class="shoucang">
              <router-link to="">
                0 <br>我的收藏
              </router-link>
            </div>
            <div class="zuji">
              <router-link to="">
                0 <br> 我的足迹
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="myorder mybgcolor">
        <div class="orderhear myhd">
          <router-link to="">
            <p><i class="icon my-izhangdan" style="background-color: #c28bfa;color:white;"></i>我的订单</p>
            <p>查看全部订单<i class="icon my-ijiantou"></i></p>
          </router-link>
        </div>
        <div class="ordercon mycon">
          <ul>
            <li>
              <router-link to="">
                <i class="icon my-ifukuan"></i>
                <br/>
                <span>待付款</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="icon my-ishouhuo"></i>
                <br/>
                <span>待收货</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="icon my-ituikuan"></i>
                <br/>
                <span>退款/售后</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mywallet">
        <div class="wallethear myhd">
          <router-link to="">
            <p><i class="icon my-ifukuan" style="background-color: #c28bfa;color:white;"></i>我的钱包</p>
            <p>礼券、购书卡等<i class="icon my-ijiantou"></i></p>
          </router-link>
        </div>
        <div class="wallethear mycon">
          <ul>
            <li>
              <router-link to="">
                <b>￥0.00</b>
                <br/>
                <span>待付款</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <b>0</b>
                <br/>
                <span>购书卡</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <b>0</b>
                <br/>
                <span>礼券</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="callservice">
        <div class="callser myhd">
          <router-link to="">
            <p><i class="icon my-ikefu" style="background-color: #8bd4fa;color:white;"></i>联系客服</p>
            <p>点击联系在线客服<i class="icon my-ijiantou"></i></p>
          </router-link>
        </div>
       </div>
      <div class="helpcontain">
        <div class="helpcon myhd">
          <router-link to="">
            <p><i class="icon my-ikefu" style="background-color: #fdc780;color:white;"></i>帮助中心</p>
            <p>客服电话及常见问题<i class="icon my-ijiantou"></i></p>
          </router-link>
        </div>
       </div>
      <div class="youlike">
        <div class="likes myhd">
          <router-link to="">
            <p><i class="icon my-ishoucang" style="background-color: #fca8cc;color:white;"></i>猜你喜欢</p>
          </router-link>
        </div>
      </div>
    <div><foote></foote></div>
  </div>
</template>

<script>
    import foote from "./nav/foote";
    export default {
        name: "myid",
        components:{
            foote
        }
    }
</script>

<style>
  a{
    text-decoration: none;
    font-family: "微软雅黑";
  }
  html{
    background-color: #eeeeee;
  }
  .myid{
    background-color: #eeeeee;
  }
  .myidhear{
    text-align: center;
    background:url("../assets/images/mybg.png") no-repeat;
    background-size:100% 100%;
  }
  .myidhear>a{
    position: absolute;
    right: 5px;
    top: 5px;
    color: rgba(255,255,255,0.4);
  }
  .myhearcon{
    padding-top: 20px;
  }
  .myhearcon>p{
    color: #FFFFFF;
    font-size: 14px;
  }
  .myhearcon>p img{
    padding:2px;
    border:1px solid white;
    width: 25%;
    border-radius: 50%;
  }
  .aboutmy{
    margin-top: 10px;
    overflow: hidden;
    padding-bottom: 10px;
  }
  .aboutmy div{
    width: 49.5%;
    background-color: rgba(0,0,0,0.2);
    padding: 10px 0px;
  }
  .aboutmy div a{
    color: #FFFFFF;
    font-size: 14px;
  }
  .shoucang{
    float: left;
  }
  .zuji{
    float: right;
  }
  .mybgcolor,.mywallet,.callservice,.helpcontain,.youlike{
    background-color: #FFFFFF;
  }
  .myhd{
    width: 94vw;
    margin:10px auto 10px;
    padding: 10px 0px;
    border-bottom: 1px solid #eeeeee;
    overflow: hidden;
  }
  .myhd>a{
    color: #666666;
    font-size: 14px;
  }
  .myhd>a i{
    text-align: center;
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
    font-size: 16px;
    margin-right: 10px;
  }
  .myhd>a p:nth-child(1){
    float: left;
  }
  .myhd>a p:nth-child(2){
    float: right;
  }
  .mycon ul{
    overflow: hidden;
  }
  .mycon ul li{
    float: left;
    width: 33.33%;
    margin-top: 5px;
    text-align: center;
  }
  .mycon li a i{
    font-size: 27px;
    color: #3d3d3d;
  }
  .wallethear li a b{
    color: #f51e33;
    font-size: 17px;
  }
</style>
