<template>
  <section>
  <v-row class="title">
    <v-col cols="12">
      <h2 class="display-4 text-center">Contact</h2>
      <h3 class="dispaly-3 text-center amber--text">お問い合わせ</h3>
    </v-col>
  </v-row>
  
  <form id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSco6MRQOu3cYwG6l2hNWGqiJ7F96GKb8teH-OYsRj9lE8iizQ/viewform?" target="hidden_iframe" onsubmit="submitted=ture;">
  <!--参考 https://github.com/toperkin/staticFormEmails/blob/master/README.md-->
    <v-container >
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="name"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="email"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
        <v-textarea
          v-model="textarea"
          :rules="textareaRules"
          label="お問い合わせ内容"
          value=""
          :counter="200"
          outlined
        ></v-textarea>
      </v-col>
      <v-col cols="12">
      <v-btn dark class="mr-4" @click="submit">送信</v-btn>
      </v-col>
      </v-row>
    
    </v-container>
  </form>
  </section>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      textarea: '',
      textareaRules: [
        v => !!v || 'Name is required',
        v => v.length <= 200 || 'Name must be less than 200 characters',
      ],
    }),
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
