        function euroConverter(valNum){
            document.getElementById("outputYen").innerHTML= valNum * 129.78;
        }

       
document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.bg-video').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-video').style.display = 'none';
});


function allowDrop(event) {
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


function myFunction(){
    let text;
    let person = prompt("Enter the city you want to visit: ", "Tokyo");
    if (person == null || person == ""){
        text = "User cancelled!";
    }
    else {
        text = "You chose " + person + ". Nice choice!";
    }
    document.getElementById("city").innerHTML = text;
}
   