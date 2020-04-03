<template>
  <section>
  <v-row class="title">
    <v-col cols="12">
      <h2 class="display-4 text-center">Contact</h2>
      <h3 class="dispaly-3 text-center amber--text">お問い合わせ</h3>
    </v-col>
  </v-row>
  <!--
  <form id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSco6MRQOu3cYwG6l2hNWGqiJ7F96GKb8teH-OYsRj9lE8iizQ/formResponse?" target="hidden_iframe" onsubmit="submitted=ture;">
    name:<br>
    <input type="text" name="entry.938458302" id="entry.938458302"><br>
    email:<br>
    <input type="text" name="entry.1536800308" id="entry.1536800308"><br>
    message:<br>
    <input type="textarea" name="entry.1279892730" id="entry.1279892730"><br>
    <input type="submit" value="Submit">
  -->
  <!--参考 https://github.com/toperkin/staticFormEmails/blob/master/README.md -->
  <v-form ref="form" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSco6MRQOu3cYwG6l2hNWGqiJ7F96GKb8teH-OYsRj9lE8iizQ/formResponse?" id="gform" v-model="valid" target="hidden_iframe">
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
            name="entry.938458302"
            id="entry.938458302"
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
            name="entry.1536800308"
            id="entry.1536800308"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
        <v-textarea
          v-model="textarea"
          :rules="textareaRules"
          label="お問い合わせ内容"
          name="entry.1279892730"
          id="entry.1279892730"
          value=""
          :counter="200"
          outlined
        ></v-textarea>
      </v-col>
      <v-col cols="12">
      <v-btn type="submit" dark class="mr-4" form="gform" @click="submit">送信</v-btn>
      <!-- <v-btn dark class="mr-4" form="gform" @click="submit">送信</v-btn> -->
      </v-col>
      </v-row>
    
    </v-container>
  </v-form>
  <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>
  </section>
</template>

<script>
export default {
    name: 'contact',
    data () {
      return {
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
        ]
      }
    },
    
    methods: {
      submit() {
        //this.$refs.form
        alert("送信完了しました")
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
