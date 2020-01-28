import * as Config from './config'

const Contentful = require('contentful')

const client = Contentful.createClient({
  space: Config.NEW_SPACE_ID,
  accessToken: Config.NEW_CDAPI_ACCESS_TOKEN,
})

export default (async function getOurStory () {
  const { items } = await client.getEntries({ content_type: Config.OUR_STORY_CONTENT_TYPE_ID })
  return items
})