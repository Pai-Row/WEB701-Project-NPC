<template>
<v-layout>
    <v-flex xs6>
        <panel title="Photograph">
<v-layout>
          <v-flex>
              <img class="photo-image" :src="auction.photograph" />
            </v-flex>
          <v-flex>
            
              
          </v-flex>
        </v-layout>

</panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
            <panel title="Photograph details">
        <div class="auction-title">
              Title: {{auction.name}}
            </div>
             <div class="auction-photographer">
              Photographer: {{auction.photographer}}
            </div>
             <div class="auction-endDate">
              End Date: {{auction.endDate}}
            </div>
             <div class="auction-price">
              Price: {{auction.price}}
            </div>
            <div class="auction-size">
              Size: {{auction.size}}
            </div>       
            <div class="auction-weight">
              Weight: {{auction.weight}}
            </div>       
            <div class="auction-condition">
              Condition: {{auction.condition}}
            </div>              
    </panel>
    </v-flex>

     <v-flex xs8 class="ml-2">
            <panel title="Description">
        <div class="auction-description">
              {{auction.description}}
            </div>
            <br>       
    </panel>
     </v-flex>
      <v-flex xs8 class="ml-2">
            <panel title="Bidding">
            <v-col>
        <v-text-field
          label="Place bid"
          v-model.number="amount"
        ></v-text-field>
      </v-col>
        <div class="danger-alert" v-if="error">
        {{error}}
    </div>
    <v-btn
        class="cyan"
        @click="placeBid">
        Place Bid
    </v-btn>
    <br><br>
            <h2>Bid History</h2>
             <ul>
      <li v-for="bid in auction.Bids" :key="bid.id">
        ${{bid.amount}}
      </li>
    </ul>
            </panel>
      </v-flex>

</v-layout>
</template>

<script>
import AuctionService from '@/services/AuctionService'
import Panel from '@/components/Panel'
export default {
    props: [
        'auction'
    ],
     data() {
        return {
            amount: 0,
            error: null,
        }
    },
    computed: {
      maxBid() {
        var maxBid = 0
        this.auction.Bids.forEach(bid => {
            if (bid.amount > maxBid) {
              maxBid = bid.amount
            }
          })
          return maxBid
      }

    },
    methods: {
      async placeBid() {
        this.error = null
        try {
          if (this.amount > this.maxBid) {
            await AuctionService.postBid(
              {
                amount: this.amount,
                AuctionId: this.auction.id
              }
            )
            this.$router.go()
          }          
        } catch (err) {
            console.log(err)
        }
    }

},
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
  width: 90%;
  margin: 0 auto;
}
</style>