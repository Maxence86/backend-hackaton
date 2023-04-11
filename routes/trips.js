var express = require('express');
var router = express.Router();
var Trip = require('../models/trips')

router.get('/trips', (req, res) => {

    Trip.findOne( 
        
    
         
        // e => e.departure.toLowerCase() === req.body.departure.toLowerCase() &&
        //     e.arrival.toLowerCase() === req.body.departure.toLowerCase() &&
        //     new Date(e.date).getTime() === new Date(req.body.date).getTime(),

    ).then(data => {
        res.json({ trips: data });
    });
});




module.exports = router;
