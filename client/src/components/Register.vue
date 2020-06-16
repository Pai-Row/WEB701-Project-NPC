<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class ="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
    <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    
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
      autocomplete='new-password'
    ></v-text-field>
        </v-col>
  <br>
  <div class ="error" v-html="error" />
  <v-btn
    class="cyan"
    @click="register">
    Register
    </v-btn>
  </div>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
    } catch (err) {
      this.error = error.response.data.error
      }
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>

