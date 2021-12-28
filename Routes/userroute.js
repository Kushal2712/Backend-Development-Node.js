let express=require("express");
const { nextTick } = require("process");
const { db } = require("../model/usermodel");
let userroute=express.Router();
let usermodel=require("../model/usermodel");


userroute
.route('/')
.get(protectroute,getuser)
.post(postuser)
.patch(updateuser)
.delete(deleteuser);

userroute
.route('/:id')
.get(getuserbyid);



async function getuser(req,res){
    let data =req.body;
    let users= await usermodel.find();
    if(users){
    res.json({
        message:"user deatils",
        obj:users
    })
}else{
    message:"No users found"
}
}


function postuser(req,res){
    users=req.body;
    console.log(users);
    res.json({
        message:"Data received succesfully",
        user:req.body
    });
}

async function updateuser(req,res){
    let datajoupdatehoga=req.body;
    let data= await usermodel.findOneAndUpdate({email:"kk21@gmail.com"},datajoupdatehoga);
    res.json({
        message:"data updated successfully",
    })
}

async function deleteuser(req,res){
    let datatobedeleted=req.body;
    await usermodel.findOneAndDelete(datatobedeleted);
    res.json({
        message:"data has been deleted",
    })
}


function getuserbyid(req,res){
    console.log(req.params.id);
    let paramid=req.params.id;
    let obj={}
    for(let i=0;i<users.length;i++){
        if(users[i].id==paramid){
            obj=users[i];
        }
    }

    res.send({
        message:"data fetched successfully",
        data:obj
    })
}


 function protectroute(req,res,next){
if(req.cookies.IsloggedIn){
    next();
}else{
    res.json({
        message:"Login first"
    })
}
}

module.exports=userroute;