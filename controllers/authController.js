const {StatusCodes} = require('http-status-codes')
const customError = require('../errors')
const User = require('../models/User')
const {createTokenUser,attachCookietoRespones} = require('../utils')


const register= async(req,res)=>{
    const {name,password,email}= req.body
    const emailalreadyexist = await User.findOne({email});
    if(emailalreadyexist){
        throw new customError.BadRequest(`User with ${email} is already exist`)
    }
    const isFirstAccount = (await User.countDocuments({}) === 0);
    const role = isFirstAccount ? 'admin' : 'user';
    const user = await User.create({name,password,email,role})
    const tokenuser = createTokenUser(user)
    attachCookietoRespones({res,user:tokenuser})
    res.status(StatusCodes.CREATED).json({ user: tokenuser });
}

const login = async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        throw new customError.BadRequest('Please provide email and password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new customError.BadRequest('User not exist')
    }
    const isPasswordCorrect = await user.comparepassword(password);
    if(!isPasswordCorrect){
        throw new customError.BadRequest('Password incorrect')
    }
    const tokenuser = createTokenUser(user)
    attachCookietoRespones({res, user:tokenuser})
    res.status(StatusCodes.ACCEPTED).json({user : tokenuser})
}

const logout = async (req,res)=>{
    res.cookie('token','logout',{
        httpOnly:true,
        expires : new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg:'User logged out!'})
}

module.exports ={
    register,
    login,
    logout
}
 
