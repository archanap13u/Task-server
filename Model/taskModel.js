const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        
    },
    team: [{ 
        type:String, 
        
    }], 
    status:{
        type:String
    },
    date:{
        type:Date
    },



},{ timestamps: true })

const tasks=mongoose.model('tasks',taskSchema)
module.exports=tasks