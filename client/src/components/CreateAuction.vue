<template>
    <v-layout>
        <v-flex xs4>
    <div>
        <panel title="Create Auction">
            <v-text-field
                label="Photographer"
                required
                :rules="[required]"
                 v-model="auction.photographer"
    ></v-text-field>
    <v-text-field
                label="Title"
                required
                :rules="[required]"
                 v-model="auction.name"
    ></v-text-field>
    <v-text-field
                label="Price"
                required
                :rules="[required]"
                 v-model="auction.price"
    ></v-text-field>
    <v-text-field
                label="End date"
                required
                :rules="[required]"
                 v-model="auction.endDate"
    ></v-text-field>
    <v-text-field
                label="Photograph"
                required
                :rules="[required]"
                 v-model="auction.photograph"
    ></v-text-field>
       <v-text-field
                label="Description"
                multi-line
                required
                :rules="[required]"
                 v-model="auction.description"
    ></v-text-field>
        </panel>
    </div>
        </v-flex>
        <v-flex xs8>
            <panel title="Photo Specifications" class="ml-2">
                <v-text-field
                label="Size of Photograph(e.g 3x2)"
                required
                :rules="[required]"
                 v-model="auction.size"
    ></v-text-field>
    <v-text-field
                label="Weight(Kg)"
                multi-line
                required
                :rules="[required]"
                 v-model="auction.weight"
    ></v-text-field>
    <v-text-field
                label="Condition(Poor, Average, Good, Supreme)"
                multi-line
                required
                :rules="[required]"
                 v-model="auction.condition"
    ></v-text-field>
    </panel>
    <div class="danger-alert" v-if="error">
        {{error}}
    </div>
    <v-btn
        class="cyan"
        @click="create">
        Create Auction
    </v-btn>
        </v-flex>
        </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuctionService from '@/services/AuctionService'
export default {
    name: 'CreateAuction',
    data() {
        return {
        auction: {
            photographer: null,
            title: null,
            price: null,
            endDate: null,
            photograph: null,
            description: null,
            size: null,
            weight: null,
            condition: null,
        },
            error: null,
            required: (value) => !!value || 'Required.'
        }
    },

methods: {
    async create() {
        this.error = null
        const areAllFieldsFilledIn = Object
        .keys(this.auction)
        .every(key => !!this.auction[key])
        if(!areAllFieldsFilledIn) {
            this.error = 'Please fill in all the required fields'
            return
        }
        try {
            await AuctionService.post(this.auction)
            this.$router.push({
                name: 'Auction'
            })
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
.danger-alert {
    color:red;
}
</style>
