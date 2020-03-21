<template>
  <v-container
    fluid
    mx-auto
    pa-0
  >
  <v-row class="title">
    <v-col cols="12">
      <h2 class="display-4 text-center">WORKS</h2>
      <h3 class="dispaly-3 text-center">実績</h3>
    </v-col>
  </v-row>
  <v-row dense>
    <v-col cols="12" class="col-md-4 col-sm-12">
      <v-card color="blue" class="ma-3" dark>
        <v-card-title class="headline">Python</v-card-title>
        <v-card-subtitle color="white">Python Skills </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" class="col-md-4 col-sm-6">
      <v-card color="red" class="ma-3" dark>
        <v-card-title class="headline">Ruby</v-card-title>
        <v-card-subtitle>Ruby Skills Here</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" class="col-md-4 col-sm-6">
      <v-card color="purple" class="ma-3" dark>
        <v-card-title class="headline">PHP</v-card-title>
        <v-card-subtitle>PHP Skills Here</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
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
