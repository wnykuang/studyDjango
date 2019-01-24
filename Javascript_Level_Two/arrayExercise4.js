var userName = prompt("Please input your name:")
var flag = prompt("Are you going to use the roster system?(y/n)")
if(flag === 'y'){
    flag = true;
}else{
    flag = false;
}
var studentNames = []
while(flag){
    var query = prompt("Are you goind to [add] name or [delete]"+ 
    " name or [display] name or [quit]?")
    if(query === 'quit'){
        flag = false;
    }
    else if(query === 'delete'){
        var name = prompt("What name would you like to remove?")
        var deletedName = []
        for(var i = 0; i < studentNames.length; i++){
            if(studentNames[i] != name){
                deletedName.push(studentNames[i]);
            }
        }
        studentNames = deletedName
    }
    else if(query === 'display'){
        console.log(studentNames)
    }
    else if(query === 'add'){
        var name = prompt("please input student's name")
        studentNames.push(name)
    }
}
alert('Thank you for using the webapp.')
