// import express, ExpressError & app
const express = require('express') 
const { getNums, getMean, getMedian, getMode } = require('./helper') 
const ExpressError = require('./expressError') 
const app = express() 
app.use(express.json())

// Route Handler /mean (average)
app.get('/mean', function(req, res, next) {
    // console.log(req.query) // {nums: '1,2,3'}
    let nums = getNums(req.query.nums)
    let result = getMean(nums)
    return res.json({
        operation: "mean", 
        value: result, 
    })
});

// Route Handler /median (midpoint)
app.get('/median', (req, res, next) => {
    let nums = getNums(req.query.nums)
    let result = getMedian(nums)
    return res.json({
        operation: "median",
        value: result 
    })
})

// Route Handler /mode (most frequent)
app.get('/mode', (req, res, next) => {
    let nums = getNums(req.query.nums)
    let result = getMode(nums)
    return res.json({
        operation: "mode", 
        value: result 
    })
})

// Error Handler Default 
app.use((err, req, res, next) => {
    // set default status 500 Internal Server Error 
    let status = err.status || 500; 
    let message = err.message; 

    // set the status and alert the user 
    return res.status(status).json({
        error: { message, status }
    });
})

// Listen for Port 3000 
app.listen(3000, () => {
    console.log('Server running on port 3000') 
});