// import express, ExpressError & app
const express = require('express') 
const ExpressError = require('./expressError') 
const app = express() 
app.use(express.json())

// function getNumber
function getNums(numStr) {
    if (numStr === undefined) {
        throw new ExpressError('nums are required', 400)
    }
    let nums = numStr.split(',')
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        nums[i] = Number(num)
        if (isNaN(nums[i])) {
            // not a number, throw an error
            throw new ExpressError(`${num} is not a number`, 400)
        }
    }
    return nums;
}

// find Mean
function getMean(nums) {
    let total = 0; 
    nums.forEach(num => {
        total += num;
    })
    return total/nums.length; 
}

// find Median
function getMedian(nums) {
    let median = 0, count = nums.length;
    // sort array from low-to-high 
    let sortedArr = nums.sort(function(a, b){return a-b})
    sortedArr.sort();
    if (count % 2 === 0) {  // is even
        median = (sortedArr[count / 2 - 1] + sortedArr[count / 2]) / 2;
    } else { // is odd
        median = sortedArr[(count - 1) / 2];
    }
    return median;
}

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
})