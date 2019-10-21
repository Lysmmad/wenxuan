<template>
  <main id="shopfoot">
    <div class="footnav">
      <div class="choosebut">
        <ul>
          <li>
            <router-link to="/index">
              <span class="icon my-ishouye"></span><br/>
              首页
            </router-link>
          </li>
          <li>
            <span class="icon my-ishoucang"></span><br/>
            收藏
          </li>
          <li>
            <router-link to="/buycar">
              <span class="icon my-icart_icon"></span><br/>
              购物车
            </router-link>
          </li>
        </ul>
      </div>
      <mt-popup v-model="popupVisible"
        popup-transition="popup-fade"
         position="center" class="tmodal">
        <div class="calrt">已添加成功</div>
       </mt-popup>
      <div class="geiincar">
        <p @click="hadclick">加入购物车</p>
      </div>
      <div class="readybuy">
        <router-link to="/settlement">立即购买</router-link>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        name: "shopfoot",
        data(){
            return{
                popupVisible:false
            }
        },
        methods:{
            hadclick(){
                this.popupVisible=''
            }
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
  html{
    color: #aaaaaa;
  }
  .footnav{
    position: fixed;
    bottom: 0px;
    background-color: white;
  }
  .footnav div{
    float: left;
    overflow: hidden;
    text-align: center;
    height: 40px;
    color: #5c6467;
  }
  .footnav a{
    font-size: 13px;
    color: white;
    font-family: '仿宋';
  }
  .choosebut{
    width: 48vw;
  }
  .choosebut li{
    float: left;
    width: 32.6%;
    line-height: 15px;
    padding: 5px 0px;
    border: 1px solid #eeeeee;
    border-left: 0px;
    font-size: 12px;
    font-family: '仿宋';
  }
  .choosebut li a{
    font-size: 12px;
    color: #5c6467;
  }
  .geiincar{
    width: 26vw;
    line-height: 40px;
    background-color: black;
  }
  .geiincar p{
    font-size: 12px;
    font-family: '仿宋';
    color: white;
  }
  .readybuy{
    width: 26vw;
    line-height: 40px;
    background-color: red;
  }
  .tmodal{
    color: transparent;
    background-color: transparent;
  }
  .tmodal .calrt{
    /*background-color: rgba(0,0,0,0.6);*/
    background-color: white;
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
  }
</style>
