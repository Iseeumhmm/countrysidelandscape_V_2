function createSrcSet(links) {
    let toPreload = []

    links.forEach( image => {
        let resonsiveImageSet = {
            fourHundred : {
                "url" : image.full1920x1280.fields.file.url,
                "oneX" : `${image.full1920x1280.fields.file.url}?fm=jpg&w=400&q=50&fl=progressive`,
                "twoX" : `${image.full1920x1280.fields.file.url}?fm=jpg&w=800&q=50&fl=progressive`,
                "threeX" : `${image.full1920x1280.fields.file.url}?fm=jpg&w=1200&q=50&fl=progressive`
            }
        }
        toPreload.push(resonsiveImageSet)
    })
    let srcSets = []
    toPreload.forEach( link => {
        const srcSet = link.fourHundred
        srcSets.push([ srcSet.url , `${srcSet.oneX} 400w, ${srcSet.twoX} 800w, ${srcSet.threeX} 1200w` ])
    } )
    return srcSets
}

export default createSrcSet