
const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1/todolist_db');

const db=mongoose.connection;

db.on('error',console.log.bind(console,'error connecting to db'));

// db.once('open',funtion(){
//     console.log('database is up and running');
// })

db.once('open',function(){
    console.log('successfully connected to database');
})

