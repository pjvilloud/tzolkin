module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/tzolkin/'
      : '/',
  pluginOptions: {
    moment: {
      locales: [
        'en',
        'fr'
      ]
    },
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
