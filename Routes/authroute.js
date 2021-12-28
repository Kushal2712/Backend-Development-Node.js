let express=require("express");
let authroute=express.Router();
let usermodel=require("../model/usermodel");


authroute
.route('/signup')
.get(getsignup)
.post(postsignup)


authroute
.route("/login")
.post(loginuser);




function getsignup(req,res){
    res.sendFile('./singup.html',{root:__dirname});
}

async function postsignup(req,res){
    try{
    let datatobeposted=req.body;
    let obj=await usermodel.create(datatobeposted);
    res.json({
        message:"post completed succesfully",
        data:obj
    })
    console.log(datatobeposted);
}catch(err){
res.json({
    message:err.message
})
}


}


async function loginuser(req,res){
    try{
    let data=req.body;

    let user=await usermodel.findOne({email:data.email});

    if(user){

        if(user.password==data.password){
            res.cookie('IsloggedIn',true);
           return  res.json({
                message:"Loggedin successfully",
                obj:user
            })
        }else{
           return  res.json({
                message:"Invalid credentials"
            })
        }


    }else{
       return  res.json({
            message:"User not found"
        })
    }
}catch(err){
    res.json({
        message:err.message
    })
}
}

module.exports=authroute;