class ExpressError extends Error {
    // constructor (message,status)
    constructor(message, status) {
        // extend super class 
        super();
        this.message = message; 
        this.status = status; 
        console.error(this.stack)
    }
}

// export module 
module.exports = ExpressError