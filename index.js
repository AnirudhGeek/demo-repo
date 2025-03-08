// is express is node.js default library=> no 
// so we have to install it locally by using npm install express command
const express = require('express')
const app = express()   // this is like creating a clinic of the doctor

function sum(n){
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}
app.get("/",function(req,res){
    const n = req.query.n
    const ans = sum(n)
    res.send("the sum is : " + ans)
})
app.listen(3000) // this is like doctor actually taking a room