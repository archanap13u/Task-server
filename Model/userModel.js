const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    isAdmin:{
        type:Boolean,
        default :false,
        
    },
    tasks: [{
         type: mongoose.Schema.Types.ObjectId, ref: "tasks" 
        }],

})

const users=mongoose.model('users',userSchema)

module.exports=users