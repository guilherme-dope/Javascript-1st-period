function calc(){
    var txtav1 = document.getElementById('txtav1');
    var txtav2 = document.getElementById('txtav2');
    var txtav3 = document.getElementById('txtav3');
    var txtaluno = document.getElementById('txtaluno');
    
    var aluno = (txtaluno.value)
    var av1 = Number(txtav1.value)
    var av2 = Number(txtav2.value)
    var av3 = Number(txtav3.value)
    //outs
    outav1.textContent = `Av1 = ${av1}`
    outav2.textContent = `Av2 = ${av2}`
    outav3.textContent = `Av3 = ${av3}`
    //outs end
    
 //Se a nota for menor que 4 reprovado direto   

    if (av1 > 4) {
            outresult.textContent = 'Voce foi reprovado'
        }
    else {
            av3 = '';
        }
  
    if (av2 > 4) {
            outresult.textContent = 'Voce foi reprovado'
        }
    else {
            av3 = '';}
    
//Selecionando o menor e se o av3 for menor que o av1/av2 ele nao substituira

    if (av1 >= av2) {
        if (av2 >= av3) {
            av2 = av2
        }
        else {av2 = av3}
    }
    else if (av2 >= av1) {
        if (av1 >= av3 ) {
            av1 = av1
        }
        else{
            av1 = av3
        }     
    }
  
//calculo media    

    var media = (av1 + av2) / 2


    if (media >= 6) {
        outresult.textContent = `Parabens ${aluno} voce foi Aprovado, sua media foi de: ${media} pontos` 
    }

    /*outav1.textContent = `Av1 = ${av1}`
    outav2.textContent = `Av2 = ${av2}`
    outav3.textContent = `Av3 = ${av3}`*/

} 
