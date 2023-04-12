var express = require('express');

var router = express.Router();
var Trip = require('../models/trips')

// router.get('/', (req, res) => {

//     Trip.find( { 
//         departure : { $regex : new RegExp(req.body.departure, "i") },
//         arrival : { $regex : new RegExp(req.body.arrival, "i") },
//     }
//     ).then(data => {
//         data.filter(e => new Date(e.date).getTime() == new Date(req.body.date).getTime())
//         res.json({ trips: data });
//     });
// });


router.get('/',(req, res) =>
Trip.find()
.then(data=>{
    res.json({data})
}))


module.exports = router;
