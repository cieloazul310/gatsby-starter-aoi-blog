const path = require('path');
const blue = require('@material-ui/core/colors/blue').default;

module.exports = {
  siteMetadata: {
    title: `Gatsby Aoi Theme Blog`,
    description: 'A GatsbyJS starter using Gatsby Aoi Theme based on Material Design written with TypeScript.',
    lang: '',
    siteUrl: 'https://gatsby-starter-aoi-blog.netlify.com',
    author: 'cieloazul310',
    keywords: ['Gatsby', 'TypeScript', 'Material-UI'],
    social: {
      mail: '',
      twitter: 'hollyhock_staff',
      github: 'cieloazul310',
      facebook: 'hollyhock.official',
      gitlab: '',
      linkedin: '',
      medium: '',
      pocket: '',
      tumblr: '',
      instagram: 'mito.hollyhock.official',
      vimeo: '',
      youtube: 'hollytube0310',
    },
  },
  plugins: [
    {
      resolve: `gatsby-theme-aoi`,
      options: {
        siteId: `gatsby-starter-aoi-blog`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: path.resolve('./src/templates/default.tsx'),
          blog: path.resolve('./src/templates/blog-post.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embed-snippet`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: 'gatsby-remark-normalize-paths',
            options: {
              pathFields: ['featuredImage'],
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: ['title'],
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74683419-3',
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: 'ca-pub-7323207940463794',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Aoi Blog`,
        short_name: `葵`,
        start_url: `/`,
        background_color: blue[100],
        theme_color: blue[600],
        display: `standalone`,
        icon: `src/assets/icon360.png`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-graphql-codegen`,
  ],
};
