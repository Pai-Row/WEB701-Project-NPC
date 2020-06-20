<template>
    <div>
     <v-col cols="12" sm="6" md="3">
            <v-text-field
                label="photographer"
                 v-model="photographer"
    ></v-text-field>
     </v-col>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    name: 'CreateAuction',
    data() {
        return {
        photographer: null,
        title: null,
        price: null,
        endDate: null,
        photograph: null,
        description: null
    }
},
componentes: {
    Panel
}

}
</script>

<style scoped>

</style>
