<template>
  <div id="app"> 
      <v-img src= "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" aspect-ratio="5.00" contain>
      </v-img>
    <page-header />
    <!-- <img src="./assets/logo.png"> -->
    
    <router-view></router-view>
  </div>
</template>

<script>

import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
