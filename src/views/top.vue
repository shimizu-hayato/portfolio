<template>
  <section :style="section_style" id="top">
    <v-row :style="row_style" class="logo" align-content="space-around">
      <v-col cols="12">
        <h1 class="display-4 text-center">Portfolio</h1>
      </v-col>
      <v-col cols="12">
        <h3 class="display-3 text-center amber--text">Hayato Shimizu</h3>
      </v-col>
    </v-row>
  </section>
</template>

<script scoped>
import '@/assets/sass/style.scss'

export default {
  data () {
    return {
      section_style: {
        'height': '100%',
        'background-color': '#000',
        'color': '#fff',
        'margin': '0 auto',
        'text-align': 'center',
        'vertical-align': 'middle',
        'align-items': 'center'
      },
      row_style: {
        'height': '100%',
        'align-content': 'space-around'
      }
    }
  }
}
</script>

<style scoped lang="scss">
:not(.v-icon) {
  h1,h3 {
    font-family: "steeler"!important;
    text-align: "center" !important;
  }
  
  h1 {
    font-size: 100px !important;
  }
  @media (min-width: 640px) {
    h1 {
      font-size: 150px!important;
    }
  }
  @media (min-width: 1200px) {
    h1{
      font-size: 200px!important;
    }
  }
}
</style>