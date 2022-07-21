import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  mode: "spa",
  app:{
    head: {
      title: process.env.npm_package_name || "",
      meta: [
        { charset: "utf-8" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any'},
      ]
    }
  },
  css: [
    "@/assets/css/tailwind.scss",
    "@/assets/css/styles.scss",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [
  ],
})