<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title="Auctions">
      <v-btn slot ="action"
      @click="navigateTo({name: 'Auction-Create'})"
      fab 
      medium 
      absolute 
      right 
      middle>
        <v-icon>add</v-icon>
      </v-btn>
      <div v-for="auction in auctions"
        class="auction"
        :key="auction.id">

        <v-layout>
          
          
          <v-flex xs6>
            <img class="photo-image" :src="auction.photograph" />
              
          </v-flex>

          <v-flex xs6>
            <div class="auction-title">
              Title: {{auction.name}}
            </div>
             <div class="auction-photographer">
              Photographer: {{auction.photographer}}
            </div>
             <div class="auction-endDate">
              Ending: {{auction.endDate}}
            </div>
             <div class="auction-price">
              Price: ${{auction.price}}
            </div>
              <v-btn
        class="cyan"
        @click="navigateTo({
          name: 'auction', 
          params: {
            auctionId: auction.id
            }
            })">
            View
              </v-btn>
          </v-flex>
        </v-layout>

        {{auction.name}} -
        {{auction.photograph}} - 
        {{auction.photographer}} -
        {{auction.description}} - 
        {{auction.endDate}} -
        {{auction.price}}
        {{auction.size}}
        {{auction.weight}}
        {{auction.condition}}
      </div>
    </panel>
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
      auctions: null
    }
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.auctions = (await AuctionService.index()).data
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

