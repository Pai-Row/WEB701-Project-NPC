<template>
  <v-layout>
    <v-flex>
      <div id="Home">
        <h1 class="text-center">Welcome to the Nelson Photography Club <br>A community where you can share and grow experiences</h1>
               <carousel>
          <slide>
            <v-img src= "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
          <slide>
            <v-img src= "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
        </carousel>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Home',
  data () {
    return {
      
    }

  },
    components: {
    Carousel,
    Slide

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
