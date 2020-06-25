<template>
      <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-toolbar-title>
          Nelson Photography Club
          </v-toolbar-title>
    <v-toolbar-items>
        <v-tab grow light>
           <router-link to="/">
                    Home
                </router-link>
        </v-tab>
        <v-tab grow light>
            <router-link to="/Auction">
                    Auction
                </router-link>
        </v-tab>
        <v-tab grow light>
            <router-link to="/Calculator">
                    Calculator
                </router-link>
        </v-tab>
        <v-tab grow light>
            <router-link to="/Community">
                    Community
                </router-link>
        </v-tab>
        <v-tab grow light>
            <router-link to="/Contact">
                    Contact
                </router-link>
        </v-tab>

        <v-spacer></v-spacer>

            <v-tab
            v-if="!$store.state.isUserLoggedIn">
                <router-link to="/register">
                    Sign up
                </router-link>
            </v-tab>

        
            <v-tab
                v-if="!$store.state.isUserLoggedIn">
                <router-link to="/login">
                    Login
                </router-link>
            </v-tab>

                        <v-tab
            v-if="$store.state.isUserLoggedIn">
            <router-link to="/EditAccount">  
                    Edit Account  
            </router-link>
            </v-tab>

            <v-tab
            v-if="$store.state.isUserLoggedIn"
                @click='logout'>
                    Log Out
                
            </v-tab>
    </v-toolbar-items>

      <v-spacer></v-spacer>

    </v-toolbar>
  </v-card>
</template>

<script>

export default {
    methods: {
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name:'Home'
            })
        }
    }

}
</script>

<style scoped>

</style>