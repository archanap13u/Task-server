const express=require('express')

const userController=require('../Controller/userController')
const AdminController=require('../Controller/AdminController')

const jwt=require('../Middlewares/jwtMiddleware')

const router=express.Router()


router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)
router.post('/addtask',jwt,AdminController.addTask)

module.exports=router