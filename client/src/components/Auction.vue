<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
     <v-toolbar flat dense class="cyan" dark>
    <v-toolbar-title>Auction</v-toolbar-title>
    </v-toolbar>
        <div v-for="photos in auction"
         :key="photos.photographer">
          {{photos.photographer}}
          {{photos.name}}
          {{photos.price}}
          {{photos.daysRemaining}}
        </div>
  </v-flex>
</v-layout>
</template>

<script>
import AuctionService from '@/services/AuctionService'
import Panel from '@/components/Panel'
export default {
  name: 'Auction',
  components: {
      Panel
  },
  data () {
    return {
      photos: null
    }
  },
  async mounted (){
    this.photos = await AuctionService.index()
  }
}
</script>

<style scoped>

</style>

