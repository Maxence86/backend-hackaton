var express = require('express');
var moment = require('moment')
var router = express.Router();
var Trip = require('../models/trips')

router.get('/', (req, res) => {

    Trip.find( { 
        departure : { $regex : new RegExp(req.body.departure, "i") },
        arrival : { $regex : new RegExp(req.body.arrival, "i") },
    }
    ).then(data => {
        console.log(moment(req.body.date))
        let trips = data.filter(e => moment(e.date, 'YYYY-MM-DD').isSame(moment(req.body.date,'YYYY-MM-DD' ), 'day'))
        res.json({trips});
    });
});


// router.get('/',(req, res) =>
// Trip.find()
// .then(data=>{
//     res.json({data})
// }))


module.exports = router;
