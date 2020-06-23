<template>
    <v-layout>
        <v-flex>
    <div>
        <panel title="Calculate">
            <v-text-field
                label="Size of Photograph (e.g 3x2)"
                required
                :rules="[required]"
                 v-model="size"
    ></v-text-field>
    <v-text-field
                label="Weight (Kg)"
                required
                :rules="[required]"
                 v-model="weight"
    ></v-text-field>
    <v-text-field
                label="Condition (Poor, Average, Good, Supreme)"
                required
                :rules="[required]"
                 v-model="condition"
    ></v-text-field>
    {{CalculatedPrice}}
        </panel>
    </div>
        </v-flex>
        
</v-layout>
</template>

<script>
  import Panel from '@/components/Panel'

export default {
    name: 'Calculator',
    data() {
        return {
            size: '2x8',
            weight: 20,
            condition: 'Poor',
            error: null,
            required: (value) => !!value || 'Required.'
        }
    },
    components: {
        Panel
    },
    computed: {
    CalculatedPrice: function () {
        var price = 0
        var size = this.size.split("x")
        price += parseInt(size[0]) * parseInt(size[1]) /10
        price += this.weight *10
        if (this.condition === 'Poor'){
            price /= 8
        }else if (this.condition === 'Average'){
            price /= 4
        }else if (this.condition === 'Good'){
            price /=1.5
        }
        return 'Calculated Price: $' + price
    }
  }
}
</script>

<style scoped>

</style>