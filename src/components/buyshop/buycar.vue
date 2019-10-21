<template>
  <div id="buycar">
    <div class="myhear">
      <div class="fenleinav">
        <div class="returnarr">
          <span class="icon my-iarrow-left" v-on:click="back"></span>
        </div>
        <div class="carnum">
          购物车({{carlist.length}})
          <span>编辑</span>
        </div>
        <div class="caredict">
          <span>客服</span>
        </div>
      </div>
    </div>
    <div class="carshop">
      <div class="quanxuan">
        <p class="buychoose"><span span @click="allchoose()" :class="{'yes':anow}"></span></p>
        <p class="buyword"><i class="icon my-ishangpin" style="color: #ccc"></i>文轩现货</p>
      </div>
      <div class="myshop">
        <ul>
          <li v-for="(v,i) in carlist">
            <div class="shopchoose">
              <p class="buychoose"><span @click="ichoose(i)" :class="{'yes':v.cur}"></span></p>
            </div>
            <div class="shopphoto">
              <img :src="v.img" alt="">
            </div>
            <div class="shopcont">
              <p class="shopcontitle">{{v.cont}}</p>
              <p><span>￥{{v.newprice}}</span><s>￥{{v.oldprice}}</s></p>
              <p><span class="del" @click="del(i)">-</span><span class="num">{{v.num}}</span><span class="add" @click="add(i)">+</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="heji">
      <div class="jiage">
        <p>合计：<span>￥{{final}}</span></p>
        <p class="nyouhui">已优惠：￥{{pear}}</p>
      </div>
      <div class="jiesuan">
        <router-link to="/settlement" class="submit">结算(￥{{final}})</router-link>
      </div>
    </div>
    <div><foote></foote></div>
  </div>
</template>

<script>
    import foote from "./../nav/foote";
    export default {
        name: "buycar",
        data(){
            return{
                final:0,
                pear:0,
                snum:1,
                carlist:'',
                anow:false
            }
        },
        created:function(){
             var carlist = this.carlist;
             var price = 0;
             for(var i=0;i<carlist.length;i++){
                 var scur = carlist[i].cur;
                 if(scur==true){
                     price += carlist[i].newprice*carlist[i].num;
                 }
            }
            this.final = price;
        },
        methods:{
            back(){
              this.$router.go(-1);
            },
            getfinal:function(){
                var carlist = this.carlist;
                var price = 0;
                var agoprice=0;
                for(var i=0;i<carlist.length;i++){
                    var scur = carlist[i].cur;
                    if(scur==true){
                        price+=parseInt(carlist[i].num)*parseFloat(carlist[i].newprice);
                        agoprice+=parseInt(carlist[i].num)*parseFloat(carlist[i].oldprice);
                    }
                }
                this.final = Math.floor(price* 100)/100;
                this.pear=Math.floor((agoprice-price)* 100)/100;
            },
            // 减
            del(i){
                var carlist = this.carlist;
                var snum =carlist[i].num;
                if(snum>1){
                    snum--;
                    carlist[i].num=snum;
                }
                this.getfinal()
            },
            // 加
            add(i){
                var carlist = this.carlist;
                var snum =carlist[i].num;
                snum++;
                carlist[i].num=snum;
                this.getfinal()
            },
            // 单选择
            ichoose(i){
                var carlist = this.carlist;
                var scur = carlist[i].cur;
                var alc = 0;
                if(scur==false){
                    carlist[i].cur = true;
                    for(let l=0;l<carlist.length;l++){
                        if(carlist[l].cur==true){
                            alc++;
                        }
                    }
                }else{
                    carlist[i].cur = false;
                }
                if(alc==carlist.length) {
                    this.anow = true;
                }else{
                    this.anow = false;
                }
                this.getfinal()
            },
            // 全选
            allchoose(){
                if (this.anow==false){
                    this.anow = true;
                    var carlist = this.carlist;
                    for(let i=0;i<carlist.length;i++){
                        carlist[i].cur = true;
                    }
                }else{
                    this.anow = false;
                    var carlist = this.carlist;
                    for(let i=0;i<carlist.length;i++){
                        carlist[i].cur = false;
                    }
                }
                this.getfinal()
            }
        },
        mounted() {
          this.$http.get('data/carlist.json')
              .then((response) => {
                  this.carlist = response.data.carlist;
              })
              .catch(function (error) {
                  console.log(error);
              })
              .then(function () {
              });
        },
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
  .clearboth{
    clear: both;
  }
  .myhear{
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 0px 3px 0px #ccc;
    font-size: 14px;
    font-weight: bold;
    color: #666666;
    background-color: white;
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
  .carnum{
    width: 70%;
    padding-left: 50px;
  }
  .carnum span{
    width: 25%;
    float: right;
  }
  .caredict{
    width: 15%;
  }
  /*文轩现货*/
  .carshop{
    background-color:#eeeeee ;
    height: 100%;
  }
  .quanxuan{
    text-align: center;
    width: 96vw;
    margin:0px auto;
    padding: 10px;
    overflow: hidden;
    background-color: white;
  }
  .quanxuan p{
    float: left;
  }
  .buychoose{
    width: 15%;
  }
  .buychoose span{
    display: inline-block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border:1px solid #cccccc;
  }
  .quanxuan .buyword{
    padding-left: 10px;
    font-size: 14px;
    color: #666666;
  }
  /*我的商品*/
  .myshop{
    background-color: #f7f7f7;
    box-shadow: 0px 1px 2px 0px #d4d4d4;
    overflow: hidden;
  }
  .myshop div{
    float: left;
    padding:1vw;
    box-sizing: border-box;
    height: 30vw;
  }
  .myshop li{
    padding-bottom: 5px;
    overflow: hidden;
    margin-bottom: 5px;
    background-color: white;
  }
  .shopchoose{
    width: 17vw;
  }
  .yes{
    background-color: red;
  }
  .shopchoose span{
    margin: 10vw 0vw 0vw 6vw;
  }
  .shopphoto{
    width: 25vw;
    line-height: 28vw;
  }
  .shopphoto img{
    margin-top: 2vw;
    width: 100%;
  }
  .myshop .shopcont{
    width:55vw;
    padding-top: 2vw;
    box-sizing: border-box;
  }
  .shopcont p{
    font-size: 12px;
    color: gray;
  }
  .shopcontitle{
    margin-bottom: 5vw;
  }
  .shopcont p span{
    color: red;
    margin-right: 10px;
  }
  .shopcont p s{
    color: #a9a9a9;
  }
  .shopcont .del,.shopcont .add, .shopcont .num{
    text-align: center;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: #eeeeee;
    color: #3d3d3d;
    font-size: 20px;
    margin: 2px 0px;
  }
  .shopcont .num{
    background-color: white;
    font-size: 16px;
  }
  /*结算条*/
  .heji{
    position: fixed;
    bottom: 51px;
    text-align: right;
  }
  .heji div{
    float: left;
    padding:10px 0px;
    height: 52px;
    box-sizing: border-box;
  }
  .jiage{
    width: 70vw;
    background-color: white;
  }
  .jiage p{
    font-size: 12px;
    padding-right: 10vw;
  }
  .jiage p span{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .jiage .nyouhui{
    color: #a9a9a9;
  }
  .jiesuan{
    width: 30vw;
    background-color: red;
    text-align: center;
  }
  .jiesuan a{
    width: 100%;
    background-color: red;
    color: white;
    outline: none;
    margin-top: 3px;
    border: 1px solid transparent;
  }
</style>
