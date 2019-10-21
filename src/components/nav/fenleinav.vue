<template>
  <div class="myhear">
    <div class="fenleinav">
      <div class="returnarr">
        <span class="icon my-iarrow-left" v-click="back"></span>
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
</template>

<script>
    export default {
        name: "fenleinav",
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
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
</style>
