
function check(){

    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    let media = (nota1 + nota2)  / 2

    if(nota1 > 10 || nota2 > 10 || nota1 < 0 || nota2 < 0){
        alert("Valor digitado invalido! \nDigite uma nota de 0 a 10")
    } else if (media == 10){
        alert("Aprovado com distinção: " + media + "/10 pontos");
    } else if (media >= 7){
        alert("Aprovado! : " + media + "/10 pontos");
    } else {
        alert("Reprovado! : " + media + "/10 pontos")
    } 
}
