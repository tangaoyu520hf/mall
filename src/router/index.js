import Vue from 'vue'
import Router from 'vue-router'
import routesArr from './config';
Vue.use(Router)

export default (store)=>{
  let routes = [
    ...routesArr,
    ...store.getters.getRoutes
  ]
  const router = new Router({
    mode: 'history',
    routes: routes
  });

  router.beforeEach((to, from, next) => {
    let token = store.state.user.tokenInfo.token;
    //如果用户已经登录并且访问的页面又是登录页面则直接跳转到首页
    if(token && to.path === '/login'){
      next({
        path: '/',
      })
      return;
    }
    //如果直接是公开的 则直接就 next
    if(to.matched.some(record => record.meta.notRequire)){
      next();
    }else{
      //用户没有登录 但是访问的页面又不是登录页面 则跳转到登录
      if (!token && to.path !== '/login') {
        next({
          path: '/login',
          params: {redirect: to.path}
        })
      } else{
        next();
      }
    }
  })
  return router;
}
