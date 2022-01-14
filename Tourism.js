        function euroConverter(valNum){
            document.getElementById("outputYen").innerHTML= valNum * 129.78;
        }

       
document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.bg-video').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-video').style.display = 'none';
});