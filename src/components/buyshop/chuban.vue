<template>
  <main id="chuban">
    <div class="chucon">
      <ul>
        <li v-for="(v,i) in cbxxlist"><span>{{v.title}}</span><p>{{v.con}}</p></li>
      </ul>
    </div>

  </main>
</template>

<script>
    export default {
        name: "chuban",
        data(){
            return{
                cbxxlist:''
            }
        },
        mounted() {
            this.$http.get('data/chubanxinxi.json')
                .then((response) => {
                    this.cbxxlist = response.data.cbxx;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                });
        }
    }
</script>

<style scoped>
  .chucon{
    overflow: hidden;
    padding: 2vw 5vw;
    text-align: left;
  }
  .chucon li{
    font-size: 12px;
    line-height: 20px;
  }
  .chucon li p{
    width: 70%;
    float: right;
    color: #666666;
  }
  .chucon li span{
    width: 20%;
    color: darkgrey;
  }
</style>
