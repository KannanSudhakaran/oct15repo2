const express = require('express');

const customerApp = express();
customerApp.use(express.json());

//In Memory Customer Data Store
const customers =
 [
    //hardcoded customer
    {id:1,name:"Ali",email:"ali@example.com"}

 ];

 //REST GET request
 customerApp.get('/api/customers',function(req,resp){

    resp.json(customers);
 });

 //REST POST Request
 customerApp.post('/api/customers',function(req,resp){

    const {email,name} = req.body;
    const newCustomer = {id: customers.length + 1, email, name};
    customers.push(newCustomer);
    resp.json(newCustomer);
 });

 customerApp.listen(5555,function(){
    console.log("Customer App listening on port 5555");
 });