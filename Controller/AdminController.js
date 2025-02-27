const tasks=require('../Model/taskModel')
const users=require('../Model/userModel')

exports.addTask=async(req,res)=>{
    try{
        const {title,description,team,status,date}=req.body

    const newTask=new tasks({
        title,description,team,status,date
    })

    await newTask.save()
    res.status(201).json(newTask)
  

    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
    
}