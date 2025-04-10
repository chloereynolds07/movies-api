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

const dmRoutes = require('./api/dmRoutes')
router.use('/drama-movies', dmRoutes)

const antiRoutes = require('./api/antiRoutes')
router.use('/animation-movies', antiRoutes)

module.exports = router