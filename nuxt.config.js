module.exports = {
  /**
   * single page application
   */
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pixi test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/common/_reset.css',
    '~/assets/stylus/common/_foundation.styl',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /**
     * 重複してバンドルさせないため、よく使うライブラリは定義しておく。
     * https://ja.nuxtjs.org/guide/plugins/
     */
    vendor: [
      'gsap',
      'pixi.js'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /**
       * mixinで定義した関数を
       * どこからでも呼び出し可能にする
       * ※当ファイルのcssで定義したファイル内では適用されないため、別途import文が必要
       */
      const stylus = config.module.rules[0].options.loaders.stylus.find(e => e.loader == 'stylus-loader')
      Object.assign(stylus.options, {
        import: [
          '~assets/stylus/variables/_variables.styl',
          '~assets/stylus/mixins/_mediaquery.styl',
        ]
      })
    }
  }
}

