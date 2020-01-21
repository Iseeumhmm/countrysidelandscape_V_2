import * as Config from './config'

const Contentful = require('contentful')

const client = Contentful.createClient({
  space: Config.NEW_SPACE_ID,
  accessToken: Config.NEW_CDAPI_ACCESS_TOKEN,
})

export default (async function getPosts () {
  let arrayOfUrls = []
  await client.getEntries({ content_type: Config.HOME_SLIDER_CONTENT_TYPE_ID })
    .then( result => {
      result['items'].forEach(each => {
        
        arrayOfUrls.push( each.fields.fullSize1920X1280.fields.file.url )
      })
    })
    
  // .then((asset) => console.log(`${asset.fields.file.url}?fm=jpg&fl=progressive`))
  return arrayOfUrls

})


// import _ from 'lodash'
// import * as Config from './config'

// const Contentful = require('contentful')

// const Client = Contentful.createClient({
//   space: Config.SPACE_ID,
//   accessToken: Config.CDAPI_ACCESS_TOKEN,
// })

// export default (async function getPosts () {
//   const entries = await Client
//     .getEntries({ content_type: Config.POST_CONTENT_TYPE_ID })

//   const posts = _.map(entries.items, item => item.fields)
  
//   return posts
// })