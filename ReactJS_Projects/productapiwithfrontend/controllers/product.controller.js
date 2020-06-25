var dbcon = require("../config/db_connection");
var connection = dbcon.getConnection();
connection.connect();

var express = require("express");
var router = express.Router();

router.get("/",(req,res)=>{
    connection.query("select * from product",(err,records,fields)=>{
        if(err){
            console.error("Error While fetching data");
        }else {
            res.send(records);
        }
    })
})

router.get("/:id",(req,res)=>{
    connection.query("select * from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("Error While fetching data");
        }else {
            res.send(records);
        }
    })
})

router.post("/",(req,res)=>{
    var id = req.body.id;
    var name = req.body.name;
    var desc = req.body.description;
    var price = req.body.price;
    connection.query("insert into product values("+id+",'"+name+"','"+desc+"',"+price+")",(err,result)=>{
        if(err){
            console.error("Error While Inserting data"+err);
        }else {
            res.send({insert:"success"});
        }
    })
})

router.put("/",(req,res)=>{
    var id = req.body.id;  
    var desc = req.body.description;
    connection.query("update product set description='"+desc+"'where id="+id+";",(err,result)=>{
        if(err){
            console.error("Error While Updating data"+err);
        }else {
            res.send({update:"success"});
        }
    })
})

router.delete("/:id",(req,res)=>{
    connection.query("delete from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("Error While Deleting data"+err);
        }else {
            res.send({delete:"Delete Success"});
        }
    })
})

module.exports = router;

