const { get } = require('mongoose')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
var randtoken = require('rand-token')

var refreshtokens = {}

module.exports={
                  
addUser:function(req,res){ 
        
        userModel.create({
                nom:req.body.nom,
                Prenom:req.body.Prenom,
                email:req.body.email,
                adresse : req.body.adresse,
                password:req.body.password,
                phone:req.body.phone

            },
           
        
        
         function(err,User){
        if(err){
            console.log(err)
                res.json({message:"error", status:500, data: null})
        }
        else{
                res.json({message:"User Added", status:200,data:User})
        }
        }),
        console.log('marwen',{
                nom:req.body.nom,
                noment:req.body.noment,
                Prenom:req.body.Prenom,
                email:req.body.email,
                password:req.body.password,
                phone:req.body.phone,
                adresse:req.body.adresse,
                entadresse:req.body.entadresse,
                matricule:req.body.matricule

        })
},


getAllUsers:function(req,res){
        userModel.find({}).populate('ordre').exec(function(err,Users){
                if(err){
                        res.json({message:"Error",status:"500",data:null})
                }
                else{
                res.json({message:"All users",status:"200",data:Users})   
                }
        })
              
        

},



getUserbyId:function(req,res){

        userModel.findById({_id:req.params.id}).populate('ordre').exec(function(err,Users){
                if(err){
                        res.json({message:"Error",status:"500",data:null})
                }
                else{
                res.json({message:"get one user",status:"200",data:Users})   
                }
        })
           
      


},
authentificate:function(req,res,next){
        userModel.findOne({
                email:req.body.email
        },
        function(err,userinfo){
                console.log(req.body.password)
                if(err){
                        next(err);       
                }
                else{
                 if(userinfo!=null){
                        console.log((bcrypt.compareSync(req.body.password,userinfo.password)))
                 if(bcrypt.compareSync(req.body.password,userinfo.password)){
                        
                         var refreshtoken=randtoken.uid(256)
                         refreshtokens[refreshtoken]=userinfo._id
                         console.log('cccc',refreshtokens[refreshtoken])
                         console.log('test',refreshtokens)
                         const token = jwt.sign({
                                 id: userinfo._id
                         },req.app.get('secretkey'),{expiresIn:'1h'});
                         res.json({
                                 status:"success",
                                 message:"user found!!",
                                 data:{user:userinfo,
                                accestoken:token,
                        refreshtokens:refreshtoken}

                         });
                 }else{
                         res.json({status:"error",message:"invalid password",data:null});
                 }
                 }else{
                 res.json({status:"error",message:"invalid email",data:null})
                 }
        }
})
},
refreshtoken:function(req,res,next){
        var id=req.body._id
        var refreshtoken=req.body.refreshtoken
        console.log('id',id)
        console.log('refreshtoken',(refreshtokens[refreshtoken]==id))
        console.log('refresh',(refreshtoken in refreshtokens))
        if((refreshtoken in refreshtokens)&&(refreshtokens[refreshtoken]==id)){
                var user ={
                        'id':id
                }
                var token= jwt.sign(user,req.app.get('secretkey'),{expiresIn:3600})
                res.json({accestoken : token})
                
        }else{
                res.sendStatus(401)
        }
},
Logout: function (req, res, next) {

        var refreshtoken = req.body.refreshtoken
        console.log('refreshtoken',refreshtoken)
        jwt.verify(req.headers['x-access-token'],req.app.get('secretkey'))

        if (refreshtoken in refreshtokens) {
            delete refreshtokens[refreshtoken]
        }
        res.status(500).json({msg: 'token experied', status: 204})





    },




deleteuserbyId:function(req,res){
        userModel.deleteOne({_id:req.params.id},function(err,Users){
                if(err){
                        res.json({message:"Error",status:"500",data:null})
                }
                else{
                res.json({message:"get deleted",status:"200",data:Users})   
                }
        })
           
},
updateuserbyId:function(req,res){
        userModel.updateOne({_id:req.params.id},req.body,{new:true,runValidators:true},function(err,Users){
                if(err){
                        console.log(err)
                        res.json({message:"Error",status:"500",data:null})
                }
                else{
                        res.json({message:"update",status:"200",data:Users})   
                }
        })
},


}