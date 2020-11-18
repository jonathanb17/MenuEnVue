import Vue from 'vue'
import App from './App.vue'

//importamos los componenetes
import Consulta from './components/ConsultaApi.vue'
import Home from './components/Home.vue'


//importamos para hacer peticiones
import axios from 'axios'
import VueAxios from 'vue-axios'

//importamos el roter de vue
import VueRouter from 'vue-router';

Vue.config.productionTip = false 



//ahora lo usamos
Vue.use(VueAxios,axios);
Vue.use(VueRouter);


//  creamos las rutas en vue
const routes = [
    
        {path:'/home',component:Home},
        { path:'/consulta',component:Consulta}
];


const router = new VueRouter({ 
  routes,
  mode: 'history' 
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
