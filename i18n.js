module.exports = {
  locales: ['en', 'uz'],
  defaultLocale: 'en',
  loadLocaleFrom: (lang, ns) =>
    import(`locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    '*': ['common'],
    '/about': ['about'],
  },
  localeDetection: false,
};
