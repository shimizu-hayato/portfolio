<template>
  <!--
  <v-container
    fluid
    mx-auto
    pa-0
  >
  -->
  <section :style="section_style" id="about">
  <div class="container">
  <v-row class="title">
    <v-col cols="12">
      <h2 class="display-4 text-center">ABOUT</h2>
      <h3 class="dispaly-3 text-center amber--text">自己紹介</h3>
    </v-col>
  </v-row>
  <v-row dense>
    <v-col cols="12" class="col-md-6">
      <v-img
        :src="require('@/assets/user_icon.png')"
        class="my-0"
        contain
        height="20vw"
      />
    </v-col>
    <v-col cols="12" class="col-md-6 px-10">
      <p>あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
    </v-col>
  </v-row>
  </div>
  </section>
  <!-- </v-container> -->
</template>

<script>
export default {
  data () {
    return {
      section_style: {
        'height': '100%',
      }
    }
  }
}
</script>

<style scoped lang="scss">
:not(.v-icon) {
  h2 {font-family: "steeler", sans-serif!important;}
  
  .title{
    padding-top: 5vh!important;
  }
  
}

.container {
  max-width: 1024px;
}
</style>
