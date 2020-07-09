module.exports = {
  siteMetadata: {
    title: `אילוף כלבים, פנסיון והכשרת כלבי ביטחון - 054-3978591`,
    description: `אצלנו בDog Talk תוכלו להנות ממגוון שירותים עבור הכלב שלכם, בין שירותינו תהנו מפנסיון משפחתי וביתי, מעון יום לכלבים בנתניה, אילוף כלבים עד בית הלקוח, הכשרת כלבי בטחון ועוד! כנסו עכשיו לפרטים מלאים`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/service/service3.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
