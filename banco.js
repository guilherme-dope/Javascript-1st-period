function calcular(){
   //capt
    var numvalor = document.getElementById('numValor')

   var valor = Number(numvalor.value)
   var
   //check
   if(valor == ''){
       alert('Informe o valor');
       numvalor.focus();
       return;
   }
 
    if(valor % 10 == 0){}
    else {alert('Cedulas indisponiveis')
    return;}
   
   var notacem = 100
   var notacinq = 50
   var notadez = 10

    if(valor >= 100){
        if (notacem >=0){
            notacem = Math.floor(valor / 100);
            valor = valor % 100;
            alert (`${notacem} Nota(s) de R$100`)
        }}
    if(valor >=50){
        if (notacinq >=0){
            notacinq = Math.floor(valor / 50);
            valor = valor % 50;
            alert(`${notacinq} Nota(s) de R$50`)
        }}
    if(valor >=10){
        if (notadez >=0){
            notadez =  Math.floor(valor / 10);
            valor = valor % 10;
            alert(`${notadez} Nota(s) de R$10`)
        }}
      }

  document.getElementById('btnVerificar').addEventListener('click', calcular)