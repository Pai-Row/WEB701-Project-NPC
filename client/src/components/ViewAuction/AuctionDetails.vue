<template>
<v-layout>
    <v-flex xs6>
        <panel title="Photograph">
<v-layout>
          <v-flex xs6>
              <img class="photo-image" :src="auction.photograph" />
            </v-flex>
          <v-flex xs6>
            
              
          </v-flex>
        </v-layout>

</panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
            <panel title="Photograph details">
        <div class="auction-title">
              {{auction.name}}
            </div>
             <!-- <div class="auction-photograph">
              {{auction.photograph}}
            </div> -->
             <div class="auction-photographer">
              {{auction.photographer}}
            </div>
             <div class="auction-endDate">
              {{auction.endDate}}
            </div>
             <div class="auction-price">
              {{auction.price}}
            </div>       
    </panel>
    </v-flex>

     <v-flex xs8 class="ml-2">
            <panel title="Description">
        <div class="auction-description">
              {{auction.description}}
            </div>
    </panel>
    </v-flex>

</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    props: [
        'auction'
    ],
    components: {
        Panel
    }
  
}
</script>

<style scoped>
.auction {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.auction-name {
font-size: 30px;
}

.auction-photographer{
font-size: 24px;
}

.auction-title{
font-size: 40px;
}
.photo-image {
  width: 70%;
  margin: 0 auto;
}
</style>