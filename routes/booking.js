var express = require('express');
var moment = require('moment');
var router = express.Router();
var Booking = require('../models/booking')

//POST

router.post('/', (req, res) => {
    const newBooking = new Booking({
                departure: req.body.departure,
                arrival: req.body.arrival,
                date: req.body.date,
                price: req.body.price,})
        newBooking.save().then(data => {
            
            res.json({result: true , booking :data}); 
        });
    });


//GET

router.get('/', (req, res) => {

    Booking.find( {
        
        departure : { $regex : new RegExp(req.body.departure, "i") },
        arrival : { $regex : new RegExp(req.body.arrival, "i") },

    }

    ).then(data => {
        data.filter(e => new Date(e.date).getTime() == new Date(req.body.date).getTime())
        res.json({ booking: data });
    });
});


module.exports = router;