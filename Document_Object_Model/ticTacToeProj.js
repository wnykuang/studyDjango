var box = document.getElementsByTagName('td')
var clearBottun = document.getElementById('restart')
var count = 0
console.log(clearBottun)

function clearAll(){
    for(i = 0; i < box.length; i++){
        box[i].textContent = ''
        count = 0;
    }
}

function fillout(){
    if(count >= 9){
        return
    }
    else if(count % 2 == 0){
        this.textContent = 'X'
        count += 1
    }
    else{
        this.textContent = 'O'
        count += 1
    }
};
for (i = 0; i < box.length; i++){
    box[i].addEventListener('click', fillout)
}

clearBottun.addEventListener('click', clearAll)