<template>
  <div class="foote">
    <ul>
      <li>
        <router-link to="/index">
          <b class="icon my-ishouye"></b>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/fenlei">
          <b class="icon my-isousuo"></b>
          <p>分类搜索</p>
        </router-link>
      </li>
      <li>
        <router-link to="/buycar">
          <b class="icon my-icart_icon"></b>
          <p>购物车</p>
        </router-link>
      </li>
      <li>
        <router-link to="/myid">
          <b class="icon my-iren"></b>
          <p>我的文轩</p>
        </router-link>
      </li>
      <p class="clearboth"></p>
    </ul>
  </div>
</template>

<script>
export default {

}

</script>
<style>
  /*底部导航栏*/
  .foote{
    text-align: center;
    background-color:#f6f6f6;
    position: fixed;
    bottom: 0px;
    width: 100%;
    border-top:1px solid #dbdbdd;
  }
  .foote li{
    padding:5px 0px;
    float: left;
    width: 25%;
  }
  .foote li a{
    color: #5c6467;
  }
  .foote li p{
    font-size: 14px;
  }
  .foote li .router-link-active{
    color: red;
  }
</style>
