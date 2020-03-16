<template>
  <v-app>
  <HeaderItem></HeaderItem>
    <v-content>
      <v-container
        fluid
        class="black lighten-4 fill-height"
      >
      <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HeaderItem from './components/HeaderItem'

export default {
  name: 'App',

  components: {
    HeaderItem
  },

  data: () => ({
    //
  }),
};
</script>
