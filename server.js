// node server.js

let http=require("http");
let fs=require("fs");

let server=http.createServer((req,res)=> {
   
    res.setHeader('Content-Type','text/html');
    fs.readFile("./index.html",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000,"localhost",()=>{
    console.log("Server is listening");
    
})
