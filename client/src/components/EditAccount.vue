<template>
<v-layout>
    <v-flex>
<panel title="Edit Account">
    <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
      </v-col>
      <v-btn
        class="cyan"
        @click="Update">
        Update
      </v-btn>
</panel>
    </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
    
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>