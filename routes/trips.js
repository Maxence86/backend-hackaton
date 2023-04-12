var express = require('express');

var router = express.Router();
var Trip = require('../models/trips')

router.get('/', (req, res) => {

    Trip.find( {
        
        departure : { $regex : new RegExp(req.body.departure, "i") },
        arrival : { $regex : new RegExp(req.body.arrival, "i") },
        date : new Date(req.body.date).getTime()

    }

    ).then(data => {
        res.json({ trips: data });
    });
});




module.exports = router;
