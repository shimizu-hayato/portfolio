<template>
  <v-card class="ma-3" light>
    <v-app-bar
      dark
      color="red"
    >
      <v-toolbar-title>Webアプリケーション</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-data-table
        light
        :headers="headers"
        :items="skills"
        class=""
      hide-default-footer>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "PythonSkillItem",
  props: {
      source: String,
  },
  data: () => ({
    headers: [{text: "技術", align: "end", sortable: false, value: "name"},
              {text: "経験年数", value: "years", align: "end", sortable: false,},
              {text: "level", value: "level", align: "end",sortable: false,}],
    skills: [
      { name: 'Python', years: 4, level: '★★★★★' },
      { name: 'Python', years: 4, level: '★★' },
      { name: 'Python', years: 4, level: '★★★★' },
      { name: 'Python', years: 4, level: '★★★' },
    ],
  }),
}
</script>