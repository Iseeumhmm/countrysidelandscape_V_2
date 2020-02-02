import path from 'path'
// import axios from 'axios'
import fetchHomePageImages from './src/contentful/fetchHomePageImages'
import fetchWorkImages from './src/contentful/fetchWorkImages'
import fetchOurStoryContent from './src/contentful/fetchOurStoryContent.js'


export default {
  getRoutes: async () => {
    const homePageSliderImages = await fetchHomePageImages()
    const contentfulImages = await fetchWorkImages()
    const ourStoryContent = await fetchOurStoryContent()
    let page = (key) => {
      let pageImages = [ key, contentfulImages[key] ]
      return pageImages
    }
    return [
      {
        path: '/',
        getData: () => ({
          homePageSliderImages
        })
      },
      {
        path: '/about',
        template: 'src/pages/about.js',
        getData: () => ({
          ourStoryContent
        })
      },
      {
        path: '/contact',
        template: 'src/pages/contact.js'
      },
      {
        path: '/pool-installs',
        template: 'src/pages/pools.js',
        getData: () => ({
          contentfulImages
        })
      },
      {
        path: '/pools',
        template: 'src/pages/services.js',
        getData: () => page("pools")
      },
      {
        path: '/stonework',
        template: 'src/pages/services.js',
        getData: () => page("stonework")
      },
      {
        path: '/retainingwalls',
        template: 'src/pages/services.js',
        getData: () => page("retainingwalls")
      },
      {
        path: '/structures',
        template: 'src/pages/services.js',
        getData: () => page("structures")
      },
      {
        path: '/woodworking',
        template: 'src/pages/services.js',
        getData: () => page("woodworking")
      },
      {
        path: '/woodworking',
        template: 'src/pages/services.js',
        getData: () => page("woodworking")
      },
      // // {
      // //   path: '/pools/single',
      // //   template: 'src/pages/drilldown.js',
      // //   getData: () => page("pools")
      // // },
      // // {
      // //   path: '/stonework/single',
      // //   template: 'src/pages/drilldown.js',
      // //   getData: () => page("stonework")
      // // },
      // // {
      // //   path: '/retainingwalls/single',
      // //   template: 'src/pages/drilldown.js',
      // //   getData: () => page("retainingwalls")
      // // },
      // // {
      // //   path: '/structures/single',
      // //   template: 'src/pages/drilldown.js',
      // //   getData: () => page("structures")
      // // },
      // // {
      // //   path: '/woodworking/single',
      // //   template: 'src/pages/drilldown.js',
      // //   getData: () => page("woodworking")
      // // },
      // // {
      // //   path: '/woodworking/single',
      // //   template: 'src/pages/drilldown.js',
      // //   getData: () => page("woodworking")
      // // },
      // {
      //   path: '/Blog',
      //   template: 'src/pages/blog.js',
      //   // getData: () => page("woodworking")
      // },
      // {
      //   path: '/blog',
      //   getData: () => ({
      //     images
      //   }),
      //   children: images.map(image => ({
      //     path: `/post/${image.id}`,
      //     template: 'src/containers/Post',
      //     getData: () => ({
      //       image,
      //     }),
      //   })),
      // },
    ]
  },
  siteRoot: 'https://countrysidelandscape.ca',
  webpack: (config, { stage }) => {
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry]
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry]
    }
    return config
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
