var express = require('express');

var router = express.Router();
var Cart = require('../models/cart')

//POST
router.post('/', (req, res) => {
const newCart = new Cart({
            departure: req.body.departure,
            arrival: req.body.arrival,
            date: req.body.date,
            price: req.body.price,})
    newCart.save().then(data => {
        
        res.json({result: true , cart :data}); 
    });
});



//GET

router.get('/', (req, res) => {

    Cart.find( {
        
        departure : { $regex : new RegExp(req.body.departure, "i") },
        arrival : { $regex : new RegExp(req.body.arrival, "i") },

    }

    ).then(data => {
        data.filter(e => new Date(e.date).getTime() == new Date(req.body.date).getTime())
        res.json({ cart: data });
    });
});

// //DELETE


router.delete("/", (req, res) => {
    Cart.deleteOne().then(data => {
       
        Cart.find().then(data => {
          res.json({ result: true, cart: data });
        });
    });
  });


module.exports = router;