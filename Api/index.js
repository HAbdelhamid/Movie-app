const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://gemlik:gemlik@cluster1.nfw3ued.mongodb.net/shop?retryWrites=true&w=majority"
    
    )
    .then(() => {
        console.log("DBconnection Successfull !!")
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(5000, () => {
    console.log("Backend server in runing")
})