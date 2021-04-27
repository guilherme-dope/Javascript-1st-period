function calc(){
    var txtav1 = document.getElementById('txtav1');
    var txtav2 = document.getElementById('txtav2');
    var txtav3 = document.getElementById('txtav3');
    var txtaluno = document.getElementById('txtaluno');
    var aluno = (txtaluno.value)
    var av1 = Number(txtav1.value)
    var av2 = Number(txtav2.value)
    var av3 = Number(txtav3.value)
    //outs1
    outav1.textContent = `Av1 = ${av1}`
    outav2.textContent = `Av2 = ${av2}`
    outav3.textContent = `Av3 = ${av3}`
    //magic
    if (av1 < 4 || av2 < 4) {
        av1 = 0
    }

    if (av1 < 4 || av2 < 4) {
        av2 = 0
    }

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
    var media = (av1 + av2) / 2
    //outs2
    if (av1 < 4 || media < 6 || av2 < 4 ) { 
        outresult.textContent= `Infelizmente ${aluno}, você foi reprovado.`
    }
    else{
        outresult.textContent= `Parabéns ${aluno}, você foi aprovado com ${media} pontos`
    }
}
