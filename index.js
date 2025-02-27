require('dotenv').config()
require('./Connection/db')


const cors=require('cors')
const express=require('express')
const route=require('./Routes/router')


const TaskManagementServer=express()

TaskManagementServer.use(cors())
TaskManagementServer.use(express.json())
TaskManagementServer.use(route)

const PORT=5000 || process.env.PORT

TaskManagementServer.listen(PORT,()=>{
    console.log("server is running at:",PORT)
})


