const express = require("express");
const port = 3000;
const app = express();

app.get('/',(res,req)=>{
    res.send("Hi There")
})

app.listen(port,()=>{
    console.log("App Listing To The Post");
})

