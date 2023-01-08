const CustomError = require('../errors')
const {isTokenValid} = require('../utils')

const auththenticateuser = async(req,res,next)=>{
    const token = req.signedCookies.token;
    if(!token){
        throw new CustomError.UnauthenticatedError('Authentication Failed')
    }
    try {
        const {name,userID,role} = isTokenValid({token})
        req.user={name,userID,role};
        next();
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authenication Failed')
    }
    
}

const authorizePermission = (...roles)=>{
   return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new CustomError.Unauthorized('Forbidden access');
        };
        next();
   }
}
module.exports ={
    auththenticateuser,authorizePermission
}