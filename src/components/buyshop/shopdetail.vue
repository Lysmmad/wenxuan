<template>
  <main id="shopdetail">
    <div><headnav></headnav></div>
    <section>
      <div class="bookimg">
        <img src="../../../data/images/b1.jpg" alt="">
      </div>
      <div class="bookinfo">
        <h3>我在未来等你</h3>
        <p>刘同2017年新书，向着光亮那方，谁的青春不迷茫，青春励志，成功文学，小说畅销书，你的孤独虽败犹荣</p>
        <div class="booksprice">
          <span class="npri">￥<b>29.0</b></span>
          <span class="opri">￥42.0</span>
          <span class="biaoq">6.91折</span>
          <span class="icon my-i7 fenx"></span>
        </div>
        <div class="chuban">
          <p>作 者：<router-link to="">刘同</router-link>著</p>
          <p>出版社：<router-link to="">天地出版社</router-link></p>
        </div>
      </div>
      <div class="bookother">
        <router-link to=""><img src="../../../data/images/book1.jpg" alt=""></router-link>
        <div>
          <div class="wxxh">
            <ul>
              <li>
                <span class="icon my-i-"></span>
              </li>
              <li>
                <b>文轩现货</b>
              </li>
              <li>70%城市次日达，电子发票</li>
            </ul>
          </div>
            <div class="bookrexian">
              <p>购书卡&政企书目服务专线:<br/>028-83157118 (10:00-17:00)</p>
              <div class="manjian">
                <span>满减</span>
                <ul>
                  <li><b class="icon my-i8"></b>图书音像单笔满99减10，满399减100！</li>
                </ul>
              </div>
              <div class="manjian">
                <span>满减</span>
                <ul>
                  <li><b class="icon my-i8"></b>老客户回馈，积分换礼券，购书更实惠</li>
                  <li><b class="icon my-i8"></b>大陆非新疆西藏地区满48元包邮，新疆西藏地区每单运费20元</li>
                </ul>
              </div>
          </div>
        </div>
        <div class="gejian booknum">
          <p> 数 量： <span class="del" v-on:click="del">-</span><span class="num">{{num}}</span><span class="add" v-on:click="add">+</span></p>
        </div>
        <div class="gejian tiaozhuan">
          <b>商品评价</b>
          <p><span>查看评价</span>
            <span class="icon my-ijiantou"></span></p>
        </div>
        <div class="gejian tiaozhuan">
          <b>商品评价</b>
          <p><span>查看评价</span>
            <span class="icon my-ijiantou"></span></p>
        </div>
        <div class="gejian">
          <b>价格说明</b><br/>
          <p>划线价：<br/>商品展示的划横线价格为出版社全国统一定价；<br/>折扣：<br/>页面显示的折扣数（如6.0折），是以定价为基础的价格折扣；<br/>受系统缓存影响，商品的最终售价已订单结算页价格为准</p>
        </div>
        <div class="gejian booklast">
          <b>关于新广告法声明</b>
          <p>新的广告法规定所有页面不得出现绝对化用词和功能性用词。本店非常支持新广告法，但为了不影响消费者正常购买，页面明显区域本店已经在排查修改，对于不明显区域也将会逐步排查并修改，我们在此郑重声明：<span>本店所有页面上的绝对化用词与功能性用词在此声明全部失效，不作为赔付理由。</span>因极限用词引起的任何形式的商品赔付，本店不解释且不妥协。希望消费者理解并欢迎联系客服帮忙完善，也请职业打假人士高台贵手。</p>
        </div>
      </div>
    </section>
    <div><shopfoot></shopfoot></div>
  </main>
</template>

<script>
    import headnav from "./../nav/headnav";
    import shopfoot from "./../nav/shopfoot";
    export default {
        name: "shopdetail",
        data(){
            return{
                num:1
            }
        },
        components:{
            headnav,
            shopfoot
        },
        methods:{
          del(){
              if (this.num!=1){
                  this.num--;
              }
          },
          add(){
              this.num++;
          }
        }
    }
</script>

<style>
  html{background-color: #eeeeee}
</style>
<style scoped>
  a{
    text-decoration: none;
  }
  .bookimg{
    padding: 5vw 0vw 8vw;
    text-align: center;
    border-bottom: 1px solid #eeeeee;
    background-color: white;
  }
  .bookimg img{
    width: 75%;
  }

  .bookinfo{
    margin: 0px auto;
    padding:3vw 5vw;
    background-color: white;
  }
  .bookinfo h3{
    font-size: 14px;
  }
  .bookinfo>p{
    margin-top: 5px;
    font-size: 13px;
    color: #f41e33;
  }

  .booksprice{
    margin-top: 10px;
    font-size: 14px;
  }
  .booksprice .npri{
    color: red;
  }
  .booksprice .npri b{
    font-size: 22px;
  }
  .booksprice .opri{
    color: gray;
    margin-left: 3vw;
    text-decoration: line-through;
  }
  .booksprice .biaoq{
    font-size: 12px;
    margin-left: 5vw;
    border-radius: 5px;
    padding: 1px 3px;
    background-color: #f51e33;
    color: white;
  }
  .booksprice .fenx{
    color: #f51e33;
    font-size: 30px;
    float: right;
  }

  .chuban{
    margin-top: 10px;
    color: darkgrey;
    font-size: 14px;
  }
  .chuban a{
    color: #6a77b6;
  }
  .bookother>div{
    background-color: white;
    padding: 2vw 5vw;
  }
  .bookother .booklast{
    margin-bottom: 15vw;
  }
  .bookother img{
    width: 100vw;
  }

  .wxxh{
    border-bottom: 1px solid #ccc;
  }
  .wxxh ul{
    overflow: hidden;
  }
  .wxxh ul li{
    float: left;
    margin-right: 2vw;
    font-size: 14px;
    color: darkgrey;
  }
  .wxxh li span{
    color: #f51e33;
  }
  .wxxh li b{
    color: black;
  }

  .bookrexian{
    margin: 5px 0px;
  }
  .bookrexian>p{
    color: #f51e33;
    font-size: 13px;
    margin: 10px 0px;
  }

  .manjian{
    overflow: hidden;
  }
  .manjian span{
    font-weight: bold;
    float: left;
    border: 1px solid red;
    font-size: 12px;
    color: #f51e33;
    padding: 0px 4px;
    margin-right: 10px;
  }
  .manjian ul{
    float: right;
    width: 70vw;
    font-size: 13px;
  }
  .manjian ul b{
    font-size: 13px;
  }

  .booknum{
    font-size: 14px;
    color: darkgrey;
  }
  .booknum .del,.booknum .add{
    font-size: 16px;
    text-align: center;
    background-color: #eeeeee;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
    color: black;
  }
  .booknum .num{
    background-color: white;
    padding:0px 10px;
    line-height: 20px;
    font-size: 16px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-right: 5px;
    color: black;
  }

  .gejian{
    margin:10px 0px;
  }
  .tiaozhuan p{
    float: right;
    font-size: 12px;
    color: darkgrey;
  }
  .tiaozhuan span:nth-child(2){
    color: red;
    font-size: 14px;
    font-weight: bold;
  }
  .gejian p{
    font-size: 12px;
    color: #333333;
  }
  .gejian b{
    font-size: 14px;
    color: #404040;
  }
</style>
