<template>
  <v-app>
  <HeaderItem></HeaderItem>
    <v-content>
      <router-view></router-view>
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
