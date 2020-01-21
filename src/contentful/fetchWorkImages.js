import * as Config from './config'

const Contentful = require('contentful')

const client = Contentful.createClient({
  space: Config.NEW_SPACE_ID,
  accessToken: Config.NEW_CDAPI_ACCESS_TOKEN,
})

export default (async function getPosts () {
  var theItems = {
    pools: [],
    stonework: [],
    retainingwalls: [],
    structures: [],
    woodworking: []
  }
  await client.getEntries()
  .then(function (entries) {
    entries.items.forEach(function (entry) {
      
      if(entry) {
        let item = {
          type: entry.sys.contentType.sys.id,
          entry: entry.fields
        }
        switch (item.type) {
          case "galleryImagesPools":
            theItems.pools.push(item.entry)
            break;
          case "galleryImagesStonework":
            theItems.stonework.push(item.entry)
            break;
          case "galleryImagesRetainingWalls":
            theItems.retainingwalls.push(item.entry)
            break;
          case "galleryImagesStructures":
            theItems.structures.push(item.entry)
            break;
          case "galleryImagesWoodworking":
            theItems.woodworking.push(item.entry)
            break;
          default: 
            console.log("No Entries found")
        }
      }
    })
  })
  
  return theItems

})