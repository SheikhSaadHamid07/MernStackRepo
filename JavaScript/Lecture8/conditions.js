

function checkItem(){
    let itemName = document.getElementById("product").value;

    if(itemName === 'bottle' || itemName === 'Bottle'){
        document.getElementById("message").innerHTML=(`${itemName} is available`);
    }
    else if(itemName === 'mobile' ||  itemName === 'Mobile'){
        document.getElementById("message").innerHTML=(`${itemName} is not available`);
    }
    else{
        document.getElementById("message").innerHTML=(`${itemName} is not available, Invalid input provided.`);
    }


}