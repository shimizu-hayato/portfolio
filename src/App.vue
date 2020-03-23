<template>
  <v-app>
    <HeaderItem></HeaderItem>
    <v-content>
      <v-container fluid pa-0 :style="style">
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
    style:{ 'height': '100%' }
  }),
};
</script>
