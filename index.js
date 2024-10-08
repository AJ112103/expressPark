const express = require('express')
const app = express();

function ticketCheck(req, res, next){
    const ticket = req.query.ticket;
    if(ticket === "free"){
        next()
    } else{
        res.json({
            msg: "Access Denied"
        })
    }
}
app.use(ticketCheck);

function oldEnough(req, res, next){
    const age = req.query.age;
    if(age < 16){
        res.json({
            msg: "Sorry you are not old enough to ride"
        })
    } else{
        next()
    }
}
app.use(oldEnough)

app.get('/ride1', function(req, res){
    res.json("You rode the first ride")
})

app.get('/ride2', function(req, res){
    res.json("You rode the second ride")
})

app.get('/ride3', function(req, res){
    res.json("You rode the third ride")
})

app.listen(3000);
