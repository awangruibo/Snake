import { createRouter, createWebHistory } from 'vue-router'
import PkindexView from '../views/pk/PkIndexView'
import RecordindexView from '../views/record/RecordIndexView'
import RanklistindexView from '../views/ranklist/RanklistIndexView'
import UserBotindexView from '../views/user/bot/UserBotIndexView'
import NotFound from '../views/error/NotFound'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView'
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
    meta:{
      requestAuth: true,
    },
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkindexView,
    meta:{
      requestAuth: true,
    },
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordindexView,
    meta:{
      requestAuth: true,
    },
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistindexView,
    meta:{
      requestAuth: true,
    },
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotindexView,
    meta:{
      requestAuth: true,
    },
  },
  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta:{
      requestAuth: false,
    },
  },
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta:{
      requestAuth: false,
    },
  },  
  {
    path: "/404/",
    name: "404",
    component: NotFound,
    meta:{
      requestAuth: false,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  let flag = 1;
  const jwt_token = localStorage.getItem("jwt_token");
  if (jwt_token){
    store.commit("updateToken",jwt_token);
    store.dispatch("getinfo",{
      success(){

      },
      error(){
        router.push({name : 'user_account_login'});
      },
    })
  }else {
    flag = 2;
  }

  //页面需要登录且用户没登录
  if (to.meta.requestAuth && !store.state.user.is_login){
    //表示用户有token
    if (flag === 1){
      next();
    }else{
      router.push({name : 'user_account_login'});
    }

  }else{
    next();
  }

})

export default router
