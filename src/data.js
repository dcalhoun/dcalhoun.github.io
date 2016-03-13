const routes = [
  '/',
  '/posts',
  '/posts/developer-tools-homebrew',
  '/posts/migration-to-jekyll-my-journey-to-understanding-yeoman'
];

const paths = {
  allPosts: function () {
    return routes.filter(function (route) {
      return /^\/posts\//.test(route);
    });
  },

  postForPath: function (path) {
    return this.postReq()(`./${path}.md`);
  },

  postReq: function () {
    return require.context('./posts', false, /^\.\/.*\.md$/);
  }
};

module.exports = {
  byline: 'David Calhoun is a designer/developer specializing in front-end architecture and UX \
          design. He is experienced with Ember.js, React.js, Backbone.js, and Ruby on Rails. He is \
          currently a Senior Front-End Engineer at GoNoodle in Nashville, TN.',
  paths: paths,
  routes: routes,
  title: 'David Calhoun, Design & Developer',
  scripts: {
    ga: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'
  }
}
