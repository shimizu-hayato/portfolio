<template>
<!--
  <section class="white pa-auto fill-height" id="about">
  <v-container
    fluid
    pa-auto
    fill-height
  >
-->
  <v-container
    text-center
    fill-height
    fluid
  >
  <v-layout
    wrap
  >
    <v-flex my-auto>
      <h2 class="display-3">ABOUT</h2>
      <h3 class="dispaly-3 mb-10">自己紹介</h3>
      <div class="row">
        <div class="col-lg-6">
        <v-img
          :src="require('../assets/user_icon.png')"
          class="my-5"
          contain
          height="200"
        />
        </div>
        <div class="col-lg-6">
        <p>ここはabout pageです。ここはabout pageです。ここはabout pageです。ここはabout pageです。ここはabout pageです。</p>
        </div>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
</script>

<style scoped lang="scss">
h2:not(.v-icon) {
  font-family: "steeler", sans-serif!important;
}
</style>
