const axios = require('axios');


export const loadRepoApi = () => new Promise((resolve) => {
    console.log('inside the loadRepoApi')
    const url = 'https://api.github.com/users/supreetsingh247/repos';
    axios({
        method: 'get',
        url: url,
    })
        .then((response) => {
            // console.log('in api the response is ', response);
            resolve(response);
        })
        .catch((error) => {
            console.log('in api the error is ', error.response);
            // resolve(error.response);
        })
})
