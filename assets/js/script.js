// var listcard= $('#listcard');


// function boxChecked(){
// listcard.append('<li><div class="card"><hr><input type="checkbox" id="checkinput" class="checkinputs" name="checkinput" value="<%= i.description %>" onclick="boxChecked(event)"/><label for="checkinput"><%=i.description %></label><i class="fa-solid fa-calendar-days" id="calendar"></i><p class="date"><%= i.duedate %></p><p class="category"><%= i.category %></p><a href="deletetodo/?id=<%= i._id%>" id="delicon"><i class="fa-solid fa-trash-can"></i></a></div></li>')

// }

function boxChecked(event) {
    // alert('marked');

    const element = event.target;
    if(element.type === "checkbox") {
        if( element.checked ){
        
            // var category=element.getAttribute('data-category');
            // var desc=element.value;
            // var id =element.getAttribute('data-id'); 
            // element.parentNode.style.textDecoration = "line-through";
            // element.parentNode.style.opacity = 0.3;
            element.parentNode.style.setProperty('opacity','0.3');
         var marked= element.parentNode.querySelector('#marked');
            marked.style.visibility="visible";
          
            // element.checked=true;
// listcard.append('<li><div class="card"><hr><input type="checkbox" id="checkinput" class="checkinputs" name="checkinput" value="'+desc+'" onclick="boxChecked(event)" '+'data-category="'+category+'" /><label for="checkinput">'+desc+'</label><i class="fa-solid fa-calendar-days" id="calendar"></i><p class="date"></p><p class="category">'+category+'</p><a href="deletetodo/?id=<%= i._id%>" id="delicon"><i class="fa-solid fa-trash-can"></i></a></div></li>')

            // $(this).css({"opacity":"0"});
            // $(element).attr('checked', 'false');

          
        }else{
            // element.parentNode.style.textDecoration = "none";
            element.parentNode.style.opacity = 1;
            var marked= element.parentNode.querySelector('#marked');
            marked.style.visibility="hidden";
            // const parent = element.parentElement.parentElement;
            // parent.insertBefore(element.parentElement, parent.firstChild);
        }
    }
}



// function boxChecked(event){
//     const express= require('express');
//     const path=require('path');
//     const port=8000;
//     const todolist=require('./model/todo');
//     const db=require('./config/mongoose');
   
// const app=express();
// app.use(express.urlencoded());
// app.use(express.static(path.join(__dirname,'assets')));
//     // alert('yay');
//     const element = event.target;
//     if(element.type === "checkbox") {
//         if( element.checked ){
//     var category=element.getAttribute('data-category');
//     var desc=element.value;
//     var id =element.getAttribute('data-id'); 

// app.post('/createtodoagain',function(){
    
          
//     // console.log(req.body);
//     todolist.create({
//         description:desc,
//         category:category,
        
//     },function(err,newtodo){
//         if(err){
//             console.log('error in creating new To Do');
//             return;
//         } 
//         // console.log('***',newtodo);
//         return res.redirect('/');
//        }
//     )
//         })
//     }
// }
// }