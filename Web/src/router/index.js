import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "@/views/error/NotFound";
import PkIndexView from "@/views/pk/PkIndexView";
import RanklistIndexView from "@/views/ranklist/RanklistIndexView";
import RecordIndexView from "@/views/record/RecordIndexView";
import UserBotIndexView from "@/views/user/bot/UserBotIndexView";

const routes = [
  {
    path:'/',
    name: 'home',
    redirect: '/pk/'
  },

  {
    path:'/pk/',
    name: 'PkIndexView',
    component:PkIndexView
  },

  {
    path:'/ranklist/',
    name: 'RanklistIndexView',
    component:RanklistIndexView
  },

  {
    path:'/record/',
    name: 'RecordIndexView',
    component:RecordIndexView
  },

  {
    path:'/user/bot/',
    name: 'UserBotIndexView',
    component:UserBotIndexView
  },

  {
    path:'/404/',
    name: 'NotFound',
    component:NotFound
  },

  {
    path:'/:catchALL(.*)',
    redirect:'/404/'
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
