<template>
      <auction-details :auction="auction" />
</template>

<script>
import AuctionDetails from './AuctionDetails'
import AuctionService from '@/services/AuctionService'
import Panel from '@/components/Panel'
export default {
    data () {
        return {
            auction: {}
        }
    },
  async mounted () {
      const auctionId = this.$store.state.route.params.auctionId
      this.auction = (await AuctionService.show(auctionId)).data
  },

  components:{
      Panel,
      AuctionDetails
  } 
}
</script>

<style scoped>

</style>