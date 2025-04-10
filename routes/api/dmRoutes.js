const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/movies/drama'

    axios.get(url).then(resp => {

        res.render('pages/movies', {
            title: 'Drama Movies',
            name: 'Drama Movies',
            data: resp.data,
            path: 'drama-movies'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/movies/drama/${id}`

    axios.get(url).then(resp=> {
        const movies = resp.data

        res.render('pages/moviesSingle', {
            title: movies.title,
            name: movies.title,
            movies: movies,
            path: 'drama-movies'
        })
    })
})


module.exports = router