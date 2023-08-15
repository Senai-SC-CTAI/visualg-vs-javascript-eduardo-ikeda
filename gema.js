function gema(){
var especie = prompt("Escreva o nome da espécie: ")
var populacao = prompt("Digite a população do animal: ")

if (populacao < 199) {
    alert("Espécie quase extinta!")
}
if (populacao <= 500) {
    if (populacao > 199)
        alert("Espécie criticamente em perigo!")
}
if (populacao <= 1000) {
    if (populacao >500)
    alert("Espécie vulnerável!")
}
else 
    alert("Espécie em perigo")

}
