// import functions (app.js)
const { getNums, getMean, getMedian, getMode } = require('./helper') 
const ExpressError = require('./expressError')

describe('helper functions', function() {
    test('getNums should return array if query string are numbers', function() {
        expect(getNums('1,2,3,4')).toEqual([1,2,3,4])
    });
    test('getNums should return error if blank', function() {
        expect(() => getNums('').toThrow(ExpressError))
    })
    test('getMean should return mean', function() {
        expect(() => getMean([1,2,3,4]).not.toEqual(0))
    })
    test('getMedian should return median', function() {
        expect(() => getMedian([40000,29000,35500,31000,43000,30000,27000,32000]).toBe(31500))
    })
    test('getMode should return mode', function() {
        expect(() => getMode([1,2,2,3,4]).toBe(2))
    })
})