import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  mode: "spa",
  ssr: false,
  target: 'static',
  loadingIndicator: {
    name: 'rotating-plane',
    color: 'blue',
    background: 'red'
  },
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000
  },
  app: {
    head: {
      title: "hayato studio",
      htmlAttrs: {
        lang: 'ja',
        class: 'scroll-smooth',
      },
      meta: [
        { charset: "utf-8" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any'},
      ]
    },
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
