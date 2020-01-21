import * as Config from './config'

const Contentful = require('contentful')

const client = Contentful.createClient({
  space: Config.NEW_SPACE_ID,
  accessToken: Config.NEW_CDAPI_ACCESS_TOKEN,
})

export default (async function getPosts () {
  const { items } = await client.getEntries({ content_type: Config.POOL_CONTENT_TYPE_ID })
    
  // .then((asset) => console.log(`${asset.fields.file.url}?fm=jpg&fl=progressive`))
  
  return items

})