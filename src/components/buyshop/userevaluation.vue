<template>
    <main class="userevaluation">
      <div><headnav></headnav></div>
      <div class="empty-comment">
        <i class="icon my-i8"></i>
        <h3>暂无评价</h3>
        <h4>购买后快来发表评论</h4>
      </div>
      <div><shopfoot></shopfoot></div>
    </main>
</template>

<script>
    import headnav from "./../nav/headnav";
    import shopfoot from "./../nav/shopfoot";
    export default {
        name: "userevaluation",
        components:{
            headnav,
            shopfoot
        }
    }
</script>

<style scoped>
  .empty-comment{
    width: 80vw;
    margin: 50px auto;
    text-align: center;
  }
  .empty-comment i{
    display: inline-block;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    font-size: 60px;
    line-height: 40vw;
    background-color:#cccccc;
    color: white;
  }
  .empty-comment h3{
    color: black;
    margin-top: 10px;
    color: #666666;
  }
  .empty-comment h4{
    font-size: 12px;
    margin-top: 10px;
    color: #999999;
  }
</style>
