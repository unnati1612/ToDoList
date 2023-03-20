const todolist=require('../model/todo');

module.exports.home=function(req,res){
    // return res.end('<h1> home page </h1>');
    todolist.find({},function(err,todo){
        if(err){
        console.log('error finding contacts');
        return;
        }
        return res.render('home',{
             toDoList:todo
         });
    })
  
}

module.exports.delete=function(req,res){
    let id=req.query.id;
    
        todolist.findByIdAndDelete(id,function(err){
                if(err)
                {
                    console.log('error in deleting');
                    return;
                }
                return res.redirect('back');

        })
}

