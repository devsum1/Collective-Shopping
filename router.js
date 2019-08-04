const express = require('express');
const router = express.Router();
const members = require('./public/members');
const uuid = require('uuid');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/EmployeeDB';
const mongo = require('mongodb').MongoClient;




router.get('/',(req,res)=>{
    res.json(members);
})
//Finding Users 
router.get('/:id',(req,res)=>{
    const FoundPersonByID = members.some(member=> member.User === parseInt(req.params.id));
    const FoundPersonByName = members.some(member => member.Username === req.params.id);
    
    if(FoundPersonByID){
        res.send(members.filter(member => member.User === parseInt(req.params.id)));
    }
    else if(FoundPersonByName){
        res.send(members.filter(member => member.Username === req.params.id));
    }
    else 
    res.status(400).json(`No members with this data belongs ${req.params.id}`);
   
})

let UserCount = 3;
//Adding Users in Routes
router.post('/',(req,res)=>{
    //Saving data to mongoDB
    mongo.connect(url,(err,client)=>{
        if(err){
         console.log('Not connected');
        }
        else{
          console.log('DB connected succesfully');
          const db = client.db('Users');
          const collection = db.createCollection('User');
          collection.then(s => s.insertOne({"name":req.body.Username,"email":req.body.Useremail}));
        }
    });
    
   console.log(req.body);
   res.json(members);
  });

router.delete('/:id',(req,res)=>{
    const FoundPersonByID = members.some(member=> member.User === parseInt(req.params.id));
    const FoundPersonByName = members.some(member => member.Username === req.params.id);
    
    if(FoundPersonByID){
        res.send(members.filter(member => member.User !== parseInt(req.params.id)));
    }
    else if(FoundPersonByName){
        res.send(members.filter(member => member.Username !== req.params.id));
    }
    else 
    res.status(400).json(`No members with this data belongs ${req.params.id}`);
   
})

router.put('/:id',(req,res)=>{
    const FoundPersonByID = members.some(member=> member.User === parseInt(req.params.id));
    const FoundPersonByName = members.some(member => member.Username === req.params.id);
    console.log(FoundPersonByID,FoundPersonByName);
    if(FoundPersonByID){
        members[parseInt(req.params.id)-1].Username = req.body.Username;
        members[parseInt(req.params.id)-1].Useremail= req.body.Useremail;
        res.send(members.map(member => member));
    }
    else if(FoundPersonByName){
        let index = members.indexOf(req.param.id);
        members[index].Username = req.body.Username;
        members[index].Useremail = req.body.Useremail;
        res.send(members.map(member => member));
    }
    else 
    res.status(400).json(`No members with this data belongs ${req.params.id}`);
})

module.exports = router;