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
          label="Full name"
          v-model="fullName"
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
        @click="update">
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
    data () {
    return {
      email: '',
      fullName: '',
      password: '',
      error: null
    }
  },
  mounted (){
    this.email = this.$store.state.user.email
    this.fullName = this.$store.state.user.fullName
    this.password = 'password'
  },
  methods: {
    async update () {
      console.log(this.$store.state.user.id)
      try {
      const response = await AuthenticationService.update({
        id: this.$store.state.user.id,
        email: this.email,
        fullName: this.fullName,
        password: this.password
      })
      } catch (err) {
        this.error = err.response.data.error
      }
      console.log(response.data)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>