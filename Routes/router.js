const express=require('express')

const userController=require('../Controller/userController')
const AdminController=require('../Controller/AdminController')
const { addAccount, getAccounts, getAccountById, updateAccount, deleteAccount } = require('../Controller/accountController');
const { addTask,getTasks,updateTaskStatus } = require('../Controller/taskController');
// const jwt=require('../Middlewares/jwtMiddleware')

const router=express.Router()


router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)


///accounts
router.post('/addAccount',  addAccount);
router.get('/account', getAccounts);
router.get('/account/:id', getAccountById);
router.put('/account/:id',  updateAccount);
router.delete('/account/:id', deleteAccount);

///TASK 
router.post('/addtask',addTask);
router.get('/task',getTasks);
router.put('/task/:id',updateTaskStatus);





module.exports=router