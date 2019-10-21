<template>
    <div id="index">
      <div class="contain myindex">
        <div class="inheader">
          <h1><router-link to=""><img src="../assets/images/logo.png" alt=""></router-link></h1>
          <div class="inputSearch">
            <input type="text">
            <router-link to="" class="search"><img src="../assets/images/search.png" alt=""></router-link>
          </div>
          <span class="now"><router-link to="/login" class="icon my-iren"></router-link></span>
          <p class="clearboth"></p>
        </div>
      </div>
      <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item><img src="../assets/images/01.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/02.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/03.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/04.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
      <div class="remai">
          <ul>
            <li class="relogo"><img src="../assets/images/rdian.png" alt=""></li>
            <li class="rearticle"><router-link to=""><span>积分兑换</span>先兑换礼券，再下单，优惠更多</router-link></li>
            <p class="clearboth"></p>
          </ul>
        </div>
      <div class="youhui">
        <div class="youhuil">
          <div class="youhuill">
            <img src="../assets/images/gift1.jpg" alt="">
          </div>
          <div class="youhuilr">
            <p>回馈新老顾客，每个ID限领1张</p>
            <p>10元优惠劵（早上9点，准时开抢）</p>
          </div>
        </div>
        <div class="youhuir">
          <p><router-link to="">限领一张</router-link></p>
        </div>
        <p class="clearboth"></p>
      </div>
      <div class="youhuipho">
        <p><router-link to=""><img src="../assets/images/goschool.jpg" alt=""></router-link></p>
        <p><router-link to=""><img src="../assets/images/goschool2.jpg" alt=""></router-link></p>
      </div>
      <div class="miaosha">
        <div class="miaotitle">
          <h3><i class="icon my-inaozhong"></i> 秒杀-09点场</h3>
          <div class="smallicon"><span>更多</span><i class="icon my-ijiantou"></i></div>
        </div>
        <div class="miaotime">
          <span>12</span><b>:</b><span>45</span><b>:</b><span>12</span>
        </div>
        <div class="miaoshop">
          <ul>
            <li class="mshopc" v-for="(v,i) in miaolist">
              <div class="miaobox">
                <router-link to="">
                  <img :src="v.img" alt="">
                  <span>秒杀<br>包邮</span>
                  <div>
                    <p class="newp">{{v.newprice}}</p>
                    <p class="oldp">{{v.oldprice}}</p>
                  </div>
                </router-link>
              </div>
            </li>
            <p class="clearboth"></p>
          </ul>
        </div>
      </div>
      <div class="youhuipho">
        <p><router-link to=""><img src="../assets/images/goschool3.jpg" alt=""></router-link></p>
        <p><router-link to=""><img src="../assets/images/goschool4.jpg" alt=""></router-link></p>
      </div>
      <div class="wejj">
        <img src="../assets/images/wxjj.jpg" alt="">
        <ul class="wejjcon">
          <li v-for="(v,i) in wejjlist">
            <router-link to="/shopdetail">
              <div class="wejl">
                <img :src="v.img" alt="">
              </div>
              <div class="wejr">
                <p class="cxjrdes">{{v.des}}</p>
                <p class="wejrname">{{v.name}}</p>
                <p class="wejpri">
                  <span class="newp">{{v.newprice}}</span><span class="oldp">{{v.oldprice}}</span>
                </p>
              </div>
              <p class="clearboth"></p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="youhuipho">
        <p><router-link to=""><img src="../assets/images/0.jpg" alt=""></router-link></p>
       </div>
      <div class="youhuishop">
        <ul>
          <li v-for="(v,i) in yhshoplist">
            <router-link to="">
              <div class="youhuish">
                <p class="yhstitle">{{v.title}}</p>
                <p>{{v.price}}</p>
                <img :src="v.img" alt="">
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="youhuipho">
        <p><router-link to=""><img src="../assets/images/goschool5.jpg" alt=""></router-link></p>
       </div>
      <div class="jxzt">
        <img src="../assets/images/jxzt1.jpg" alt="">
        <ul>
          <li>
            <router-link to="">
              <span class="icon my-iicon-- jxztlogo"  style="background-color:#ee3863"></span><br/>
              <p class="jxzttit">中国好书</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-ixingxing jxztlogo" style="background-color:#0242a2"></span><br/>
              <p class="jxzttit">初会</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-ijiachang_shujia jxztlogo" style="background-color:#ff8400"></span><br/>
              <p class="jxzttit">二建</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-iyingerpiaozhichi jxztlogo" style="background-color:#ff5796"></span><br/>
              <p class="jxzttit">基金</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-ishu jxztlogo" style="background-color:#6da9ff"></span><br/>
              <p class="jxzttit">领导书目</p>
            </router-link>
          </li>
          <p class="clearboth"></p>
        </ul>
      </div>
      <div class="plhc">
        <img src="../assets/images/plhc1.jpg" alt="">
        <ul>
          <li>
            <router-link to="">
              <span class="icon my-idianzan jxztlogo"  style="background-color:#21d59b"></span><br/>
              <p class="jxzttit">幼儿园学习</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-iyezibiaoqian jxztlogo" style="background-color:#ffb139"></span><br/>
              <p class="jxzttit">小学教辅</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-iren1 jxztlogo" style="background-color:#2881fa"></span><br/>
              <p class="jxzttit">初高中教辅</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-iyinger jxztlogo" style="background-color:#98d521"></span><br/>
              <p class="jxzttit">大学课外阅读</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-ixiaoshuo jxztlogo" style="background-color:#3264dd"></span><br/>
              <p class="jxzttit">文艺小说</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-ikafei jxztlogo" style="background-color:#ff772b"></span><br/>
              <p class="jxzttit">生活经营</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-itaideng jxztlogo" style="background-color:#a962f1"></span><br/>
              <p class="jxzttit">社科经营</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="icon my-ihuihua jxztlogo" style="background-color:#ffb139"></span><br/>
              <p class="jxzttit">少儿乐园</p>
            </router-link>
          </li>
          <p class="clearboth"></p>
        </ul>
      </div>
      <div class="leibie" v-for="(v,i) in classify">
        <router-link to=""><img :src="v.imgtitle" alt=""></router-link>
        <ul class="leibielist">
          <li v-for="(x,i) in v.classlist">
            <router-link to="">
              <h3>{{x.title}}</h3>
              <span>{{x.price}}</span>
              <p><img :src="x.img" alt=""></p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="youhuipho">
        <p><router-link to=""><img src="../assets/images/about.png" alt=""></router-link></p>
      </div>
      <div class="foot-box">
        <div class="loginname">欢迎您，张三</div>
        <div class="outlogin">
          <input type="button" value="退出">
        </div>
        <p> <b> &copy; </b> m.winxuan.com</p>
      </div>
      <div><foote></foote></div>
      <div class="backtop" @click="backTop()">
        <img src="./../assets/images/returntop.png" alt="">
      </div>
    </div>

</template>
<script>
    import foote from "./nav/foote";
    export default {
        name: "index",
        data(){
            return{
                miaolist:'',
                wejjlist:'',
                yhshoplist:'',
                classify:''
            }
        },
        components:{
            foote
        },
        mounted(){
            this.$http.get('data/miaolist.json')
                .then((response)=>{
                    this.miaolist=response.data.miao;
                    this.wejjlist=response.data.wejj;
                    this.yhshoplist=response.data.yhshop;
                    this.classify=response.data.classify;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                });
            window.addEventListener('scroll',this.scrollToTop)
        },
        methods:{
            scrollToTop(){
                this.scrollTop = window.pageYOffset||document.documentElement.scrollTop ||
                    document.body.scrollTop;
            },
            backTop(){
              var timer = setInterval(()=>{
                  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
                  if (scrollTop) {
                      document.body.scrollTop -= 100;
                      document.documentElement.scrollTop -= 100;
                  }else{
                      clearInterval(timer);
                  }
              },16)
            }
        },
        destroyed () {

            window.removeEventListener('scroll',this.scrollToTop)
        }
    }
</script>
<style scoped>
  .contain{
    background-color: #f41e33;
    width: 100%;
  }
  /*头部*/
  .myindex{
    position: fixed;
    z-index: 1000;
    top:0px;
  }
  .inheader{
    width: 90%;
    margin:0px auto;
    padding:10px;
  }
  .inheader h1,.inheader .inputSearch{
    float:left;
  }
  .inheader .now{
    float:right;
    margin-right: 2px;
  }
  .inheader h1{
    padding-top: 2px;
    width: 20%;
  }
  .inheader h1 img{
    padding:5px 0px;
    width: 100%;
    height: 100%;
  }
  .inputSearch{
    position: relative;
    width: 60%;
    height: 32px;
    margin:5px;
    padding-left:10px;
  }
  input{
    width: 100%;
    line-height: 20px;
    background-color: #ce1d38;
    padding: 5px 0px 5px 10px;
    border:1px solid #ce1d38;
    border-radius:2px;
  }
  .search{
    cursor:pointer;
    position: absolute;
    top: 6px;
    right: -7px;
  }
  .now a{
    color: #FFFFFF;
    font-size: 30px;
  }
  /*热卖*/
  .remai ul li{
    float: left;
    height: 10vw;
    line-height: 10vw;
  }
  .relogo{
    width: 35%;
    text-align: center;
  }
  .relogo img{
    width: 60%;
    padding-right: 10px;
    border-right:1px solid #eeeeee;
  }
  .rearticle{
    width: 65%;
    overflow: hidden;
    text-align: left;
  }
  .rearticle a{
    color: #333333;
    font-size: 14px;
  }
  .rearticle span{
    border:1px solid red;
    border-radius: 10px;
    padding:5px;
    font-size: 12px;
    margin-right:10px;
  }
  /*优惠*/
  .youhui{
    position: relative;
    width: 100%;
    border:1px solid #ccc;
    background: url("../assets/images/redianbg.png") no-repeat;
    background-size: 100% 100%;
  }
  .youhui>div{
    float: left;
  }
  .youhuil{
    width: 77%;
  }
  .youhuir{
    text-align: center;
    width: 23%;
  }
  .youhuil>div{
    float: left;
  }
  .youhuill{
    width: 40%;
  }
  .youhuill img{
    margin:5px;
    width: 80%;
  }
  .youhuilr{
    width: 55%;
    color: #ff9434;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
  }
  .youhuilr p{
    margin-top: 5px;
  }
  .youhuir p{
    margin-top: 70px;
    width: 100%;
  }
  .youhuir a{
    padding:70px 10px 0px;
    font-size: 12px;
    color: #FFFFFF;
  }
  /*优惠隔间图*/
  .youhuipho img{
    width: 100%;
  }
  /*秒杀*/
  .miaosha{
    text-align: center;
    position: relative;
  }
  .miaotitle{
    padding-top: 10px;
  }
  .miaotitle::before,.miaotitle::after{
    content: '';
    border-top: 2px solid #dedede;
    display: block;
    position: absolute;
    width: 26%;
    top:16px;
  }
  .miaotitle::after{
    width: 15%;
  }
  .miaotitle::before{
    left: 5%;
  }
  .miaotitle::after{
    right:17%;
  }
  .smallicon{
    position: absolute;
    right: 0px;
    top: 7px;
  }
  .miaotitle h3{
    color:#f92438;
    font-size: 16px;
    height: 16px;
    line-height: 16px;
  }
  .miaotitle h3 i{
      font-size: 16px;
  }
  .smallicon span{
    font-size: 12px;
    color: #666666;
    position: relative;
    top: -2px;
  }
  .smallicon i{
    color: red;
    font-size: 18px;
    font-weight: bold;
  }
  .miaotime span{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px 3px;
    border-radius: 5px;
    color: white;
    background-color: #3d3d3d;
  }
  /*秒杀商品*/
  .miaoshop ul li{
    float: left;
    width: 25%;
  }
  .miaobox img{
    width: 100%;
  }
  .miaobox{
    position: relative;
  }
  .miaobox span{
    display: inline-block;
    width: 36px;
    height: 36px;
    font-size: 12px;
    border-radius: 50%;
    position: absolute;
    background-color: #fa8533;
    color: #FFFFFF;
    line-height: 18px;
    position: absolute;
    top: 15vw;
    right: 0px;
  }
  .newp{
    color: #ce1d38;
    font-size: 18px;
  }
  .oldp{
    color: #ccc;
    font-size: 14px;
    text-decoration: line-through;
  }
  /*文轩聚集*/
  .wejj img{
    width: 100%;
  }
  .wejjcon li{
    width: 100%;
    height:36vw;
  }
  .wejjcon li div{
    float: left;
  }
  .wejl{
    width: 35%;
    height: 100%;
  }
  .wejr{
    width: 65%;
    height: 100%;
    box-sizing: border-box;
    padding:0px 4px;
  }
  .wejr .cxjrdes{
    margin-top: 2vw;
    font-size: 15px;
    color: #666666;
  }
  .wejrname{
    margin-top: 5vw;
    font-size: 12px;
    color: #a9a9a9;
  }
  .wejpri{
    margin-top: 3vw;
    padding-bottom: 1vw;
    border-bottom: 0.5px solid #eeeeee;
  }
  .wejpri .oldp{
    font-size: 12px;
    margin-left: 20%;
  }
  /*优惠购买*/
  .youhuishop ul li{
    float: left;
    width: 33%;
    height: 42vw;
    border-bottom: 0.5px solid #eeeeee;
    border-right: 0.5px solid #eeeeee;
  }
  .youhuish{
    overflow: hidden;
    padding:1vw 3vw 2vw;
    box-sizing: border-box;
  }
  .youhuish img{
    width: 100%;
  }
  .youhuish p{
    color: #ce1d38;
    font-size: 12px;
  }
  .youhuish .yhstitle{
    color: #262626;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    margin-bottom: 2vw;
  }
  /*精选主题*/
  .jxzt{
    text-align: center;
  }
  .jxzt img{
    width: 100%;
  }
  .jxzt ul{
    width: 90%;
    margin:15px auto;
  }
  .jxzt ul li{
    float: left;
    width: 20%;
  }
  .jxztlogo{
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 35px;
    color: white;
    border-radius: 50%;
  }
  .jxzttit{
    margin-top: 10px;
    font-size: 12px;
    color: #666666;
  }
  /*品类会场*/
  .plhc{
    text-align: center;
  }
  .plhc img{
    width: 100%;
  }
  .plhc ul{
    width: 90%;
    margin:0px auto 15px;
  }
  .plhc ul li{
    float: left;
    width: 25%;
    margin-top:15px;
  }
  /*类别*/
  .leibie img{
    width: 100%;
  }
  .leibielist li{
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    padding: 1vw 4vw;
    border-right: 0.5px solid #eeeeee;
    border-bottom: 0.5px solid #eeeeee;
  }
  .leibielist h3{
    color:#262626;
    font-size: 13px;
    height: 16px;
    overflow: hidden;
  }
  .leibielist span{
    color: #f41e33;
    font-size: 14px;
  }
  /*底部*/
  .foot-box{
    text-align: center;
    padding: 30px 0px 55px;
    width: 100%;
    color: #afafb0;
    background-color: #524c60;
  }
  .foot-box p{
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }
  .foot-box p b{
    position: relative;
    top: 4px;
    left: 2px;
    font-size: 20px;
  }
  .loginname{
    font-size: 14px;
    padding:0px 0px 10px 0px;
  }
  .outlogin{
    padding:10px 0px;
  }
  .outlogin input{
    padding:6px 10px;
    font-size: 14px;
    color: #afafb0;
    background-color: #595367;
    border: 1px solid #464053;
    border-radius: 4px;
    width: 25%;
  }
</style>
<style>
  .clearboth{
    clear: both;
  }
  a{
    text-decoration: none;
    font-family: "微软雅黑";
  }
  .banner{
    margin-top: 62px;
  }
  .banner img{
    width: 100%;
  }
  .banner .mint-swipe-items-wrap{
    padding-bottom: 47.5%;
    height:0px;
  }

  .backtop{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    position: fixed;
    right: 0px;
    bottom: 70px;
  }
  .backtop img{
    width: 100%;
    height: 100%;
  }
  .youhuipho img{
    display: block;
  }
</style>
