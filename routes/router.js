const express = require('express')
const axios = require('axios')
const router = express.Router()

router.use(express.static('public'))


router.get('/', (req, res)=> {
    
    axios.get('https://api.sampleapis.com/movies/horror')
    .then( resp => {
        
        res.render('pages/home', {
            title: 'movie website',
            name: 'Movies'
        })
    })
})

const hrRoutes = require('./api/hrRoutes')
router.use('/horror-movies', hrRoutes)



module.exports = router