<template>
  <v-app>
    <v-container fluid>
      <v-toolbar>
        <router-link to="/">
          <v-toolbar-title>Vendr</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn to="/about" flat>About</v-btn>
          <v-btn flat>Help</v-btn>
          <v-btn flat>Company</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-sheet
            class="d-flex mt-5"
            color="primary"
          height="500">
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  }
}
</script>