<template>
    <main class="headnav">
      <div class="myhear">
        <div class="shopnav">
          <div class="returnarr">
            <router-link to="/index"><span class="icon my-iarrow-left"></span></router-link>
          </div>
          <div class="shoptop">
            <ul>
              <li>
                <router-link to="/shopdetail">基本信息</router-link>
              </li>
              <li>
                <router-link to="/goodsdetails">商品详情</router-link>
              </li>
              <li>
                <router-link to="/userevaluation">用户评价</router-link>
              </li>
            </ul>
          </div>
          <div class="another">
            <b>...</b>
          </div>
        </div>
      </div>
    </main>
</template>
<script>
    export default {
        name: "headnav"
    }
</script>
<style scoped>
  a{
    text-decoration: none;
    color: black;
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
  .returnarr{
    width: 10vw;
    line-height: 35px;
  }
  .returnarr a{
    color: red;
  }
  .returnarr span{
    font-size: 20px;
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
  .router-link-exact-active{
    color: red;
    /*border-bottom: 1px solid red;*/
  }
  .shoptop ul{
    text-align: center;
    width: 70vw;
    overflow: hidden;
    line-height: 35px;
  }
  .shoptop ul li{
    float: left;
    width: 33.33%;
  }
  .shoptop ul li a{
    font-size: 12px;
  }
</style>
