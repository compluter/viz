/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  head: {
    title: 'viz'
  },
  loading: false,
  plugins: [
    { ssr: true, src: '@/plugins/icons.js' }

  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [

  ]
}
