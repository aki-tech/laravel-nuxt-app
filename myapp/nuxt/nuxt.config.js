const environment = process.env.NODE_ENV || 'development';
require('dotenv').config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv',
  ],

  proxy: {
    '/api':
    environment === 'development'
    ? process.env.API_URL
    : 'https://www.example.org',
    // '/api/': {
    //   target: 'http://localhost:10080/api',
    //   pathRewrite: {'^/api/': ''},
    // }
  },

  axios: {
    proxy: true,
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_BROWSER_URL,
    Credential: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
