var express = require('express');
var moment = require('moment')
var router = express.Router();
var Cart = require('../models/cart')

//POST
router.post('/', (req, res) => {
const newCart = new Cart({
            departure: req.body.departure,
            arrival: req.body.arrival,
            date: req.body.date,
            price: req.body.price})
    newCart.save().then(data => {
        
        res.json({result: true , cart :data}); 
    });
});



//GET

router.get('/', (req, res) => {
    Cart.find().then(data => res.json({data}))
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