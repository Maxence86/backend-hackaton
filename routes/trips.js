var express = require('express');
var moment = require('moment')
var router = express.Router();
var Trip = require('../models/trips')

router.post('/', (req, res) => {

    Trip.find( { 
        departure : { $regex : new RegExp(req.body.departure, "i") },
        arrival : { $regex : new RegExp(req.body.arrival, "i") },
    }
    ).then(data => {
        let trips = data.filter(e => moment(e.date, 'YYYY-MM-DD').isSame(moment(req.body.date,'YYYY-MM-DD' ), 'day'))
        let newTrips = []
        for (let i =0; i < trips.length; i++) {
            newTrips.push({departure : trips[i].departure,
               arrival : trips[i].arrival,
               price: trips[i].price,
            date : moment(trips[i]['date']).format('H:mm')})}
            // trips[i]['date'] = moment(trips[i]['date']).format('H:mm')}
        console.log(trips)
        console.log(newTrips)
        res.json({newTrips});
});
});


// router.get('/',(req, res) =>
// Trip.find()
// .then(data=>{
//     res.json({data})
// }))


module.exports = router;
