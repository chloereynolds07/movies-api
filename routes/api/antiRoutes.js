const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/movies/animation'

    axios.get(url).then(resp => {

        res.render('pages/movies', {
            title: 'Animation Movies',
            name: 'Animation Movies',
            data: resp.data,
            path: 'Animation-movies'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/movies/animation/${id}`

    axios.get(url).then(resp=> {
        const movies = resp.data

        res.render('pages/moviesSingle', {
            title: movies.title,
            name: movies.title,
            movies: movies,
            path: 'animation-movies'
        })
    })
})


module.exports = router