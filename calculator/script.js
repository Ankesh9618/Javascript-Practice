function append(v){
    try{
    document.getElementById('input').value += `${v}`;    
    }catch(e){
        console.log(e);
    }
}

function calculate(){
    const expression = document.getElementById('input');

    try{
        expression.value = eval(expression.value);
    }catch(e){
        console.log(e);
    }
}

function clearInput(){
    document.getElementById("input").value = "";
}