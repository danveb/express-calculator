const ExpressError = require('./expressError')

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
    if (count % 2 === 0) {  // is even
        median = (sortedArr[count / 2 - 1] + sortedArr[count / 2]) / 2;
    } else { // is odd
        median = sortedArr[(count - 1) / 2];
    }
    return median;
}

// find Mode 
function getMode(nums) {
    let frequency = {} // array of frequency
    let maxFreq = 0 // holds max frequency 
    let mode = []

    for(let i in nums) {
        frequency[nums[i]] = (frequency[nums[i]] || 0) + 1; // increment frequency
        if(frequency[nums[i]] > maxFreq) {
            maxFreq = frequency[nums[i]]
        }
    }
    for(let k in frequency) {
        if(frequency[k] == maxFreq) {
            mode.push(k)
        }
    }
    return mode; 
}

// export module 
module.exports = { getNums, getMean, getMedian, getMode }