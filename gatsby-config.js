const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Aoi Theme Blog`,
    description: 'A GatsbyJS starter using Gatsby Aoi Theme based on Material Design written with TypeScript.',
    lang: '',
    siteUrl: 'https://cieloazul310.github.io/gatsby-theme-aoi-blog/',
    author: 'cieloazul310',
    keywords: ['Gatsby', 'TypeScript', 'Material-UI'],
    social: {
      mail: 'mail@cieloazul310.com',
      twitter: 'hollyhock_staff',
      github: 'cieloazul310',
      facebook: 'hollyhock.official',
      gitlab: '',
      linkedin: '',
      medium: 'cieloazul310',
      pocket: 'cieloazul310',
      tumblr: 'cieloazul310',
      instagram: 'mito.hollyhock.official',
      vimeo: 'cieloazul310',
      youtube: 'hollytube0310'
    }
  },
  pathPrefix: '/gatsby-aoi-theme-blog',
  plugins: [
    `gatsby-theme-aoi`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: path.resolve('./src/templates/default.tsx'),
          blog: path.resolve('./src/templates/blog-post.tsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embed-snippet`,
          },
          {
            resolve: `gatsby-remark-prismjs`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: ['title']
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74683419-3'
      }
    },
    `gatsby-plugin-graphql-codegen`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`
  ]
};
