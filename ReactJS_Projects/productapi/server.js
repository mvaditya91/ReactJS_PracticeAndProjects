var express = require("express");
var bodyparser = require("body-parser");
var cors = require('cors');
 
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
var productAPI = require("./controllers/product.controller");

app.use("/api/products",productAPI);
app.listen(8085);
console.log("Server Running on Port 8085");