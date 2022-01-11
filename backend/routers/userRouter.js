const jwt =require('jsonwebtoken')
const userController = require('../controllers/userController')
const route = require('express').Router()
route.post('/add',userController.addUser)
route.get('/', userController.getAllUsers)
route.get('/getone/:id',userController.getUserbyId)
route.delete('/deleteone/:id',userController.deleteuserbyId)
route.put('/up/:id',userController.updateuserbyId)
route.post('/ithen',userController.authentificate)
route.post('/refresh',userController.refreshtoken)
route.post('/logout',userController.Logout)
module.exports=route


function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretkey'),
     function (err, decoded) {
        if (err) {
            res.json({status: "error", message: err.message, data: null});
        } else { 
            req.body.userId = decoded.id;
            next();
        }
    });



}