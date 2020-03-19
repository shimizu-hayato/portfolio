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
    fill-height
    fluid
    ma-auto
    pa-0
  >
  <v-layout
    wrap
    pa-0
    text-center
    col-lg-10
    mx-auto
    row
  >
    <v-flex col-lg-12 my-auto pb-0>
      <h2 class="display-4">ABOUT</h2>
      <h3 class="dispaly-3">自己紹介</h3>
    </v-flex>
    <v-flex col-lg-6 my-auto pb-0>
      <v-img
        :src="require('@/assets/user_icon.png')"
        class="my-5"
        contain
        height="15rem"
      />
    </v-flex>
    <v-flex col-lg-6 my-auto>
      <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
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
.container {
  max-width: 1024px;
}
</style>
