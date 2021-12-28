
let mongoose=require("mongoose");
let bcrypt=require("bcrypt");


let db_link='mongodb+srv://admin:ujTKW1cVSQlEvNGB@cluster0.zs2gy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(db_link)
.then(function(db){
    console.log("Database connected");
}).catch(function(err){
    console.log(err);
})



// first create database schema

let userschema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    confrimpassword:{
        type:String,
        required:true,
        minLength:8,
    }

});




userschema.pre('save',async function(){
    let salt=await bcrypt.genSalt();
    let hashedstring=await bcrypt.hash(this.password,salt)
    this.password=hashedstring;
    console.log(hashedstring);
});


// then create model tu use the schema

const usermodel=mongoose.model('usermodel',userschema);
module.exports=usermodel;
