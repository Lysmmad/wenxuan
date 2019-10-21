import VueRouter from 'vue-router';

import index from '../../components/index.vue';
import fenlei from '../../components/fenlei.vue';
import myid from '../../components/myid.vue';
import myzhanghu from '../../components/myzhanghu.vue';
import login from '../../components/login.vue';
import register from '../../components/register.vue';
import shopdetail from '../../components/buyshop/shopdetail.vue';
import goodsdetails from '../../components/buyshop/goodsdetails';
import userevaluation from '../../components/buyshop/userevaluation';
import buycar from '../../components/buyshop/buycar.vue';
import settlement from '../../components/buyshop/settlement';
import neirong from "../../components/buyshop/neirong";
import chuban from "../../components/buyshop/chuban";


export default new VueRouter({
	routes:[
      {
        path:'/index',component:index,
      },
      {
        path:'/fenlei',component:fenlei
      },
      {
        path:'/myid',component:myid
      },
      {
        path:'/myzhanghu',component:myzhanghu
      },
      {
        path:'/login',component:login
      },
      {
        path:'/register',component:register
      },
      {
        path:'/shopdetail',component:shopdetail
      },
      {
        path:'/goodsdetails',component:goodsdetails
      },
      {
        path:'/userevaluation',component:userevaluation
      },
      {
        path:'/buycar',component:buycar
      },
      {
        path:'/settlement',component:settlement
      },
      {
        path:'',redirect:'/index'
      }
		]
	})
