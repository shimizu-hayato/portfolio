<template>
  <div id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5" style="font-family: arial black !important;">Portfolio</span>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      disable-resize-watcher
      v-model="drawer"
      app
      clipped
      color="dark lighten-4"
    >
      <v-list
        dense
        class="dark lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-row
            v-if="item.heading"
            :key="i"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />
          <v-list-item
            v-else
            :key="i"
            link
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderItem",
  props: {
      source: String,
  },
  data: () => ({
    drawer: false,
    items: [
      { icon: 'home', text: 'Home', to: '/' },
      { icon: 'perm_identity', text: 'About me', to: '/about' },
      { icon: 'work', text: 'Works', to: '/works' },
      { icon: 'mail_outline', text: 'Contact', to: '/contact' },
    ],
  }),
}
</script>

<style scoped>
#keep .v-navigation-drawer__border {
  display: none
}
</style>
