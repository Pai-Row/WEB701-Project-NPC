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
           <router-link to="Home">
                    Home
                </router-link>
        </v-tab>
        <v-tab grow light>
            <router-link to="Store">
                    Store
                </router-link>
        </v-tab>
        <v-tab grow light>
            <router-link to="Community">
                    Community
                </router-link>
        </v-tab>
        <v-tab grow light>
            <router-link to="Contact">
                    Contact
                </router-link>
        </v-tab>

        <v-spacer></v-spacer>

            <v-tab grow light>
                <router-link to="register">
                    Sign up
                </router-link>
            </v-tab>

        
            <v-tab grow light>
                <router-link to="login">
                    Login
                </router-link>
            </v-tab>

      
    </v-toolbar-items>

      <v-spacer></v-spacer>

    </v-toolbar>
  </v-card>
</template>

<script>

export default {

}
</script>

<style scoped>

</style>