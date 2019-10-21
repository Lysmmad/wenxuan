<template>
    <div id="fenlei">
      <div class="myhear">
        <div class="fenleinav">
          <div class="returnarr">
            <span class="icon my-iarrow-left" v-on:click="back"></span>
          </div>
          <div class="flsearch">
            <i class="icon my-isousuo1"></i>
            <input type="text">
          </div>
          <div class="flbutton">
            <input type="button" value="搜索">
          </div>
        </div>
      </div>
      <div class="fllist">
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-ijiating-yazi"></i>
            <span>少儿</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">0-2岁</router-link>
              </li>
              <li>
                <router-link to="">3-6岁</router-link>
              </li>
              <li>
                <router-link to="">7-10岁</router-link>
              </li>
              <li>
                <router-link to="">11-14岁</router-link>
              </li>
              <li>
                <router-link to="">家庭教育</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-ishu" style="background-color: #fe9f1f"></i>
            <span>文学小说</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">当代小说</router-link>
              </li>
              <li>
                <router-link to="">世界名著</router-link>
              </li>
              <li>
                <router-link to="">传记</router-link>
              </li>
              <li>
                <router-link to="">青春与动漫</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-ijiachang_shujia" style="background-color: #8890fb"></i>
            <span>学习考试</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">教材教辅</router-link>
              </li>
              <li>
                <router-link to="">外语类</router-link>
              </li>
              <li>
                <router-link to="">医学类</router-link>
              </li>
              <li>
                <router-link to="">建筑类</router-link>
              </li>
              <li>
                <router-link to="">工具书</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-iguanli" style="background-color: #53cbf0"></i>
            <span>经济管理</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">管理学</router-link>
              </li>
              <li>
                <router-link to="">经济与金融</router-link>
              </li>
              <li>
                <router-link to="">投资理财</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-idianzan" style="background-color: #ff6328"></i>
            <span>励志与成功</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">成功学</router-link>
              </li>
              <li>
                <router-link to="">心理学</router-link>
              </li>
              <li>
                <router-link to="">心灵励志</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-iyinger" style="background-color: #fc75db"></i>
            <span>童书</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">儿童文学</router-link>
              </li>
              <li>
                <router-link to="">童话故事</router-link>
              </li>
              <li>
                <router-link to="">必读名著</router-link>
              </li>
              <li>
                <router-link to="">儿童英语</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-ishenghuo" style="background-color: #ff9f24;color: white"></i>
            <span>生活</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">家庭与育儿</router-link>
              </li>
              <li>
                <router-link to="">运动健身</router-link>
              </li>
              <li>
                <router-link to="">烹饪美食</router-link>
              </li>
              <li>
                <router-link to="">时尚美容</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-ishubiao" style="background-color: #4ec8f1"></i>
            <span>科技</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">计算机</router-link>
              </li>
              <li>
                <router-link to="">科普读物</router-link>
              </li>
              <li>
                <router-link to="">工业技术</router-link>
              </li>
              <li>
                <router-link to="">医学</router-link>
              </li>
              <li>
                <router-link to="">建筑</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-ishoucang" style="background-color: #4cd5bb"></i>
            <span>艺术与摄影</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">摄影</router-link>
              </li>
              <li>
                <router-link to="">绘画</router-link>
              </li>
              <li>
                <router-link to="">书法与字帖</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
        <div class="fltitle">
          <div class="fllogo">
            <i class="icon my-iren" style="background-color: #ff6022"></i>
            <span>人文社科</span>
          </div>
          <div class="flchoose">
            <ul>
              <li>
                <router-link to="">哲学与宗教</router-link>
              </li>
              <li>
                <router-link to="">历史</router-link>
              </li>
              <li>
                <router-link to="">政治</router-link>
              </li>
              <li>
                <router-link to="">法律</router-link>
              </li>
              <li>
                <router-link to="">军事</router-link>
              </li>
              <p class="clearboth"></p>
            </ul>
          </div>
        </div>
      </div>
      <div><foote></foote></div>
    </div>
</template>

<script>
    import foote from "./nav/foote";
    import fenleinav from "./nav/fenleinav";
    export default {
        name: "fenlei",
        components:{
            foote
        },
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
    font-family: "微软雅黑";
  }
  .clearboth{
    clear: both;
  }
  .myhear{
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 0px 3px 0px #ccc;
  }
  .fenleinav{
    text-align: center;
    overflow: hidden;
    width: 96vw;
    margin:0px auto;
  }
  .fenleinav>div{
    float: left;
    height: 12vw;
    line-height: 12vw;
    box-sizing: border-box;
  }
  .returnarr{
    width: 15%;
  }
  .returnarr span{
    color: #ce1d38;
    font-size: 20px;
  }
  .flsearch{
    width: 70%;
    position: relative;
  }
  .flsearch i{
    position: absolute;
    left: 12px;
    font-size: 20px;
    color: #978989;
  }
  .flsearch input{
    width: 80%;
    height: 8vw;
    border:1px solid #eee;
    padding-left: 30px;
    border-radius: 3px;
    color: #ccc;
  }
  .flbutton{
    width: 15%;
  }
  .flbutton input{
    border:none;
    background-color: transparent;
    font-size: 14px;
    color: #666666;
    outline: none;
  }
  .fllist{
    padding: 10px 0px 42px;
    background-color: #eee;
  }
  .fltitle{
    width: 94vw;
    margin: 0px auto;
    position: relative;
  }
  .fllogo{
    padding-left:10px;
    line-height: 20px;
  }
  .fllogo::after{
    content: '';
    display: block;
    border-top:1px solid #ccc;
    position: absolute;
    width: 65%;
    top: 10px;
    right: 2%;
  }
  .fllogo i{
    text-align: center;
    font-size: 15px;
    display: inline-block;
    width: 20px;
    height: 20px;
    color: white;
    background-color: #ff6022;
    border-radius: 50%;
  }
  .fllogo span{
    font-size: 14px;
    color: #666666;
  }
  .flchoose{
    margin: 10px 0px;
  }
  .flchoose li{
    text-align: center;
    width: 33.33%;
    float: left;
    background-color: white;
    box-sizing: border-box;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding:10px 10px;
    font-size: 12px;
  }
  .flchoose li a{
    color: #666;
  }
</style>
