const axios = require('axios').default;

const GetInstagramFeed = () => {
    return axios.get('https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,media_type&access_token=IGQVJYUlhGNF9CSzV5bkhBVXgxNHRwaGRjOXdWazVIaHc2WmFxQkRPRzAwb2tXbTd5TWdJdG4zQ1E3YW9mb3hBcnJmb1pvSmt5Qkozb3A2M3poMEdCazRyV05lYnlsc2V5VWtzbGlB')
        .then( response => {
            return response
        }).catch( error => {
            console.log('error: ', error)
        })
}

export default GetInstagramFeed