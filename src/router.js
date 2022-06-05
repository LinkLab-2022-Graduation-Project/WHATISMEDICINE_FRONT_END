import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "./pages/HomePage.vue"
import DrugListPage from "./pages/DrugListPage.vue"
import ResultPage from "./pages/ResultPage.vue"
import CharacterPage from "./pages/CharacterPage.vue"
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes : [
        {
          path: '/',
          component: HomePage 
       },
       {
          path: '/list',
          component: DrugListPage
       },
       {
          path: '/result',
          component: ResultPage
       },
       {
         path: '/character',
         component: CharacterPage
      }
      ]
})