// node serverbyexpress.js

let express=require("express");
let app=express();

app.listen(3000);

app.get("/",(req,res)=>{
    res.send("Hello Kushal");
})


app.get("/about",(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
})

// Redirect
app.get("/about-us",(req,res)=>{
    res.redirect('/about');
})



