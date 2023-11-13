/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'silvertae blog',
  author: 'silvertae',
  headerTitle: '',
  description: '학습한 내용들과 개발하면서 겪은 이슈들을 기록하는 블로그입니다.',
  language: 'ko-KR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://silvertae-blog.vercel.app/',
  siteRepo: 'https://github.com/silvertae/silvertae-blog',
  siteLogo: '/static/images/peep.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'massenger7@gmail.com',
  github: 'https://github.com/silvertae',
  // linkedin: 'https://www.linkedin.com',
  locale: 'ko-KR',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-Q436VZFBFZ',
    },
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    // provider: 'giscus', // supported providers: giscus, utterances, disqus
    // giscusConfig: {
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://giscus.app/
    // repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    // repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    // category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    // categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    // mapping: 'pathname', // supported options: pathname, url, title
    // reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
    // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    // metadata: '0',
    // theme example: light, dark, dark_dimmed, dark_high_contrast
    // transparent_dark, preferred_color_scheme, custom
    // theme: 'light',
    // theme when dark mode
    // darkTheme: 'transparent_dark',
    // If the theme option above is set to 'custom`
    // please provide a link below to your custom theme css file.
    // example: https://giscus.app/themes/custom_example.css
    // themeURL: '',
    // This corresponds to the `data-lang="en"` in giscus's configurations
    // lang: 'ko',
    // },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
