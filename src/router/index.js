import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router= new Router({
  mode:'hash',
  routes: [
    {path:'/', redirect: '/home'},
    {
      path: '/home',
      name: 'HelloWorld',
      
      component: HelloWorld,
     
      children:[
        {
        path: '/demo',
        name: 'Demo',
        component: ()=> import ('@/components/Demo'),
        },
        {
          path: '/about',
          name: 'About',
          component: ()=> import ('@/components/About'),
        },
        {
          path: '/other',
          name: 'other',
          component: ()=> import ('@/components/echart'),
        }
      ]

      
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
      //判断该路由是否需要登录权限
      if (cookies('token')) {
          //通过封装好的cookies读取token，如果存在，name接下一步如果不存在，那跳转回登录页
          next()//不要在next里面加"path:/",会陷入死循环
      }
      else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}//将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
      next()
  }
})
export default router

