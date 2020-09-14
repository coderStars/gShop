import VueRouter from 'vue-router'
import Vue from  'vue'
Vue.use(VueRouter)

// import Home from '@/pages/Home'
const Home = ()=> import('@/pages/Home')
const Login = ()=> import('@/pages/Login')
const Register = ()=> import('@/pages/Register')
const Search = ()=> import('@/pages/Search')
const Detail = ()=> import('@/pages/Detail')
const AddCartSuccess = ()=> import('@/pages/AddCartSuccess')

let RouterPush = VueRouter.prototype.push
let RouterReplace = VueRouter.prototype.push

VueRouter.prototype.push = function(path, onResolved, onRejected) {
  if(onResolved == undefined && onRejected == undefined) {
    return RouterPush.call(this,path).catch(()=>{})
  }else{
    return RouterPush.call(this,path,onResolved,onRejected)
  }
}

VueRouter.prototype.replace = function(path, onResolved, onRejected) {
  if(onResolved == undefined && onRejected == undefined) {
    return RouterReplace.call(this,path).catch(()=>{})
  }else{
    return RouterReplace.call(this,path,onResolved,onRejected)
  }
}

const routes = [
  {
    path: '/addcartsuccess',
    component: AddCartSuccess
  },
  {
    path: '/detail/:goodsId',
    component: Detail
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHidden: true
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHidden: true
    }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    name: 'search'
  },
  {
    path: '',
    redirect: '/home'
  }
]

const router  = new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router