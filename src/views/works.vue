<template>
  <section :style="section_style" id="works">
  <div class="container">
  <v-row class="title">
    <v-col cols="12">
      <h2 class="display-4 text-center">SKILLS</h2>
      <h3 class="dispaly-3 text-center amber--text">技術</h3>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" class="col-md-6">
      <PythonSkill></PythonSkill>
    </v-col>
    <v-col cols="12" class="col-md-6">
      <WebSkill></WebSkill>
    </v-col>
  </v-row>
  </div>
  </section>
</template>

<script>
import PythonSkill from '../components/SkillCard/PythonSkill'
import WebSkill from '../components/SkillCard/WebSkill'

export default {
  name: 'Works',

  components: {
    PythonSkill,
    WebSkill
  },
  data () {
    return {
      section_style: {
        'height': '100%',
        'background-color': '#000',
        'color': '#fff',
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
  h2 {font-family: "steeler", sans-serif!important;}
  
  .title{
    padding-top: 5vh!important;
  }
  
}
.container {
  max-width: 1024px;
}
</style>
