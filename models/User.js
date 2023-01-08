const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
//name,email,password,role
    name:{
        type:String,
        required:[true,"Please provide name"],
        maxlength:50,
        minlenght:3
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please provide email"],
        validate:{
            validator:validator.isEmail,
            message:'Please provide vaild email'
        }
    },
    password:{
        type:String,
        required:[true,'Please provide password'],
        minlength:6,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user',
    },
});

UserSchema.pre('save',async function(){
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

UserSchema.methods.comparepassword = async function(candidatepassword){
    const isMatch = await bcrypt.compare(candidatepassword,this.password);
    return isMatch;
}


module.exports = mongoose.model('User',UserSchema)

  
