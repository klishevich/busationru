module.exports = {
  siteMetadata: {
    ru: {
      title: `Бизнес-Оптимизация`
    },
    en: {
      title: `Business-Optimization`
    },
    title: `Бизнес-Оптимизация`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Busation`,
        start_url: `/`,
        background_color: `#1976d2`,
        theme_color: `#1976d2`,
        display: `minimal-ui`,
        icon: `src/images/favicon4.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
};
