const {StatusCodes} = require('http-status-codes')


const errorHandlerMiddleware = (err,req,res,next)=>{
    
    let customError={
        statusCodes : err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        message : err.message || 'Something went wrong'
    }

    if(err.name === 'ValidationError'  ){
        customError.message = Object.values(err.errors).map((item)=>item.message).join(',')
        customError.statusCodes = StatusCodes.BAD_REQUEST
    }
    return res.status(customError.statusCodes).json({Message:customError.message })
    
}
module.exports = errorHandlerMiddleware
