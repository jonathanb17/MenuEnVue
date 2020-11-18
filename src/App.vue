<template>
  <div id="app">
        <img alt="Vue logo" src="./assets/logo.png"> 

          <ul>
            <li style="display: inline-block;padding:15px;">
               <router-link to="/home">Home</router-link>
            </li>

            <li style="display: inline-block;padding:15px;">
                <router-link to="/consulta">Consulta</router-link>
            </li>
          </ul>
            <router-view></router-view>
   
  </div>
</template>

<script>

//import ConsultaApiVue from './components/ConsultaApi.vue'
//import HomeVue from './components/Home.vue'

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
