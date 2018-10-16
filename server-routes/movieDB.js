const axios = require('axios');
const genres = require('./definitions/genres')
const API_URL = process.env.API_TMDB_ENDPOINT;
const API_KEY = process.env.API_TMDB_KEY;
const API_LANG = process.env.API_TMDB_LANG;

var movieDB = function (req, res) {

    var url = `${API_URL}?api_key=${API_KEY}&language=${API_LANG}&sort_by=popularity.desc`;
    if(req.body.genres.length>0){
        genres.forEach(item =>
            req.body.genres.forEach(gen =>{
                if(gen===item.name) {
                    url += '&with_genres=' + item.id;
                }
            })
        );
       /* var genre = genres.filter(genre => genre.name === req.body.genres);
        console.log(genre);
        if(genre && genre.length){
            url += '&with_genres=' + genre[0].id;
        }*/
    }
    if(req.body.page){
        var page = req.body.page;
        if(genre && genre.length){
            url += '&page=' + page;
        }
    }
    console.log(url);
    axios.get(url)
        .then(result => {
            return res.send(result.data);
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports = movieDB;