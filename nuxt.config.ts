import { defineNuxtConfig } from 'nuxt';

const SITE_URL = "https://shimizu-hayato.github.io/portfolio";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
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
        { rel: 'icon', type: 'image/x-icon', href: `${SITE_URL}/favicon.ico`, sizes: 'any'},
      ]
    },
    cdnURL: SITE_URL
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
