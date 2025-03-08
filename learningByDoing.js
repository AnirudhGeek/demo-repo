//you need to create 4 routes 
// 1. get - user can check how many kedneys they have and their health
// 2. post - user can add a new kidney 
// 3. put - user can add a new kidney and make it healthy
// 4. delete - user can remove a kidney


const express = require('express')
const app = express()

const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}]

app.get("/",function(req,res){
    const johnKidney = users[0].kidneys
    const numberOfKidneys = johnKidney.length
    let numberOfHealthyKidneys = 0
    for (let i = 0; i < numberOfKidneys; i++) {
        if(johnKidney[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.use(express.json())
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "Done"
    })
})


app.put("/",function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})


app.delete("/", function(req,res){
    let newKidney = []
    for(let i = 0; i < users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy : true
            })
        }
        users[0].kidneys = newKidney
        res.json({msg:"Done"})
    }
})

app.listen(3001)