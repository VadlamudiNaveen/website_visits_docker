const express=require('express');
const redis=require('redis');

const app=express();
const client=redis.createClient(
    {
    host:'redis-server', 
    port:6379
    });
client.set('visits',0);
app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send("Number of Visits:"+visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(2000,
()=>{
    console.log("listening to port 2000");
});