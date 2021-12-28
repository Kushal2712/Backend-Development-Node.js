// node app.js

let express=require("express");
let app=express();

let cookieParser=require("cookie-parser");




app.use(express.urlencoded({extended: true}));

app.listen (3000);

app.use(express.json());
app.use(cookieParser());

let userroute=require("./Routes/userroute");
let authroute=require("./Routes/authroute");

app.use('/user',userroute);
app.use('/auth',authroute);











