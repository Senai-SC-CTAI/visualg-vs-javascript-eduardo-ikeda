function gema(){
    var especie = document.getElementById("campo1").value
    var populacao = document.getElementById("campo2").value
    
    if(populacao>200 && populacao<=500){
        alert("Espécie criticamente em perigo")
    } else if(populacao>500 && populacao<=1000){
        alert("Espécie em perigo")
    } else if(populacao>1000 && populacao<=5000){
        alert("Espécie vulnerável!")
    } else if(populacao<=200){
        alert("Espécie quase extinta!")
    }
}
