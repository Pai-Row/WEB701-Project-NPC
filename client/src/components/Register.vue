<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title="Register">
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
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
    </panel>
  </v-flex>
</v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      fullName: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
      const response = await AuthenticationService.register({
        email: this.email,
        fullName: this.fullName,
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

