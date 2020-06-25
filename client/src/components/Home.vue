<template>
  <v-layout>
    <v-flex>
      <div id="Home">
        <br>
               <carousel>
          <slide>
            <v-img src= "https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
          <slide>
            <v-img src= "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
          <slide>
            <v-img src= "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
          <slide>
            <v-img src= "https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
          <slide>
            <v-img src= "https://images.unsplash.com/flagged/photo-1552035791-b3cc1632e933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
           <slide>
            <v-img src= "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
           <slide>
            <v-img src= "https://images.unsplash.com/photo-1527138235495-6f1b15f33051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
           <slide>
            <v-img src= "https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
           <slide>
            <v-img src= "https://images.unsplash.com/photo-1518657690763-9a447bbb9eca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" aspect-ratio="2.00" contain>
      </v-img>
          </slide>
        </carousel>
        <br>
        <h1 class="text-center">Welcome to the Nelson Photography Club <br>A community where you can share and grow experiences</h1>
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
