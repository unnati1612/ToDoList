const express= require('express');
const path=require('path');
const port=8000;
const todolist=require('./model/todo');


const app=express();
app.use('/',require('./routes'));

const db=require('./config/mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'assets')));

app.post('/createtodo',function(req,res){
    console.log(req.body);
    todolist.create({
        description:req.body.description,
        category:req.body.category,
        duedate:req.body.duedate
    },function(err,newtodo){
        if(err){
            console.log('error in creating new To Do');
            return;
        } 
        // console.log('***',newtodo);
        return res.redirect('/');
       }
    )
})

app.listen(port,function(err){
    if(err)
    {
        console.log('error in starting')
        return;
    }
    console.log('Server is up and running');
});