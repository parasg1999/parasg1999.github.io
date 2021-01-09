require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: 'Paras Gupta',
    siteTitleAlt: `Paras Gupta - Blog`,
    siteHeadline: "Paras Gupta - Blog",
    siteUrl: "https://parasg1999.github.io", // No trailing slash allowed!
    siteDescription: "Personal Blog - Paras Gupta",
    siteLanguage: "en",
    siteImage: "/banner.png",
    author: "Paras Gupta",
    twitterUsername: "@parasg1999",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/parasg1999`,
          },
          {
            name: `Github`,
            url: `https://github.com/parasg1999/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `paras-gupta-blog`,
        short_name: `paras-blog`,
        description: `Personal blog for Paras Gupta.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7520901376123661`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-sass',
  ],
}
