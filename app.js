// import express
const express = require('express') 
// import ExpressError 
const ExpressError = require('./express-error') 
// app express
const app = express() 



// status 3000 
app.listen(3000, () => {
    console.log('Server running on port 3000') 
})