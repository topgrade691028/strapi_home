export default {
  routes: [
    {
      method: 'GET',
      path: '/articles',
      handler: 'article.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/articles/:slug',
      handler: 'article.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
