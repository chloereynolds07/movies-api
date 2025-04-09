const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/movies/horror'

    axios.get(url).then(resp => {

        res.render('pages/movies', {
            title: 'Horror Movies',
            name: 'Horror Movies',
            data: resp.data
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/movies/horror/${id}`

    axios.get(url).then(resp=> {
        const movies = resp.data

        res.render('pages/moviesSingle', {
            title: movies.title,
            name: movies.title,
            movies: movies,
            path: 'horror-movies'
        })
    })
})

module.exports = router