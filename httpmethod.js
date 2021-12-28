// node httpmethod.js

let express=require("express");
let app=express();

let users=[
  {
'id':1,
'name':"Kushal"
},

{
    'id':2,
    'name':"Devesh"
    },

    {
        'id':3,
        'name':"Rohan"
        },

];
app.listen(3000);

app.use(express.json());

// GET Method-to get the data 

app.get('/user',(req,res)=>{
    res.send(users);
});


app.post('/user',(req,res)=>{

    users=req.body;
    res.json({
        message:"Data received succesfully",
        user:req.body
    });
    
})


app.patch('/user',(req,res)=>{
    
    let datajoupdatehoga=req.body;
    for(key in datajoupdatehoga){
        users[key]=datajoupdatehoga[key];
    }
    res.json({
        message:"data updated successfully",
    })


    
})

app.delete('/user',(req,res)=>{
    users={}
    res.json({
        message:"data has been deleted",
    })

})


app.get('/user/:id',(req,res)=>{
    console.log(req.params.id);
    res.send({
        message:"User id received",
        Name:req.params,
    });
    
})

app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send(users);
})
