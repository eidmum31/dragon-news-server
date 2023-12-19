const express = require('express')
const catogories=require('./categories.json');
const news=require('./news.json');
const app=express();
const port=3000;
var cors = require('cors');

app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get("/categories",(req,res)=>{
    res.send(catogories);
})

app.get('/news',(req,res)=>{
    
    res.send(news);
})

app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    const specificNews= news.find(x=>x._id==id);
    res.send(specificNews);
})

app.get('/category/:id',(req,res)=>{
    const {id}=req.params;
    if(id==0)
        res.send(news);
    const categoryNews=news.filter(x=>x.category_id==id);
    res.send(categoryNews);
})
app.listen(port,()=>{
    console.log("listening to port ");
})