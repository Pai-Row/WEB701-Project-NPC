<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title="Login">
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
      <br>
      <div class ="error" v-html="error" />
      <v-btn
        class="cyan"
        @click="login">
        Login
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
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
.error {
  color: red;
}
</style>

