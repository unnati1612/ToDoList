const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:String,
        required:false
    }
});

const todolist=mongoose.model('toDoList',toDoSchema);
module.exports=todolist;