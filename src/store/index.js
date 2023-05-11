import Vue from 'vue'
import Vuex from 'vuex'
 
import createPersistedState from 'vuex-persistedstate'

import loginmodule from './login.js'
//持久化
// import VuexPersistence from 'vuex-persist'
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })
Vue.use(Vuex)
 
export default new Vuex.Store({
 
  state: {  
     //存储共享数据的
     msg:"张波跟了我7给月了",
     num:15,
     isshow:true
  },
  mutations: {   
      //只有mutations才能更改state中的数据
      plusOne(state,n){
         //state是用来读取state中的数据
         state.msg=n
      },
      add(state){
        state.num++

      }
  },
  actions: {
    add(context,n){context.commit('plusOne',n)}
  },
  getters:{
    getDraftsObj: state => state.draftsObj
 
  },
  modules:{
    // 2挂载购物车得vuex模块  模块内得成员访问路径调整为 m_cart
    // 读取购物车模块中得state得数据  m_cart/carts
    
    login:loginmodule
  },

  // 持久化
  // plugins: [vuexLocal.plugin]
  plugins: [
    createPersistedState({
        storage: window.sessionStorage,
        // paths: ["info", "knowledge", "sixElements", "difficultySpeed"]
    })
  ]



 
})
 