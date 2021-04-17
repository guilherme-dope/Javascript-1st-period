//ALUNO:"GUILHERME MONTE-MOR"

/*
   1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

*/

function aplicar(){
   //campos
       var txtVeiculo = document.getElementById('txtVeiculo');
       var txtPreco = document.getElementById('txtPreco');
       var outPreco = document.getElementById('outPreco');
       var outVeiculo = document.getElementById('outVeiculo');
       
       //valores
   
       var veiculo = txtVeiculo.value;
       var preco = Number(txtPreco.value);
       
       //conv resultado
   
       var preco1 = preco / 2;
       var price2 = Math.ceil(preco1 / 12);
   
       //results
       outVeiculo.textContent = veiculo
       outPreco.textContent =`Entrada de R$ ${preco1} + 12x de R$ ${price2}`
   
   
       
       

/*
   2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   Exiba o valor a ser pago.

*/

function calc(){

   //capt
   var txtKiloPrice = document.getElementById('txtKiloPrice');
   var txtCons = document.getElementById('txtCons');
   
   //captvalues

   var kilog = Number(txtKiloPrice.value);
   var cons = Number(txtCons.value);

   //convert

   var totalprice = (cons * kilog) / 1000;
  

   //results
   outCons.textContent =`Valor a pagar R$ ${totalprice}`

}

/*
   3 - Elaborar um programa para uma lan house de um aeroporto. 
   O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral.

*/

function lanhouse(){ 
   //campos
   var  txtPreco = document.getElementById('txtPreco');
   var  txtTempo = document.getElementById('txtTempo');
   var  outPreco = document.getElementById('outPreco');
 

   //values
   var preco = Number(txtPreco.value);
   var tempo = Number(txtTempo.value);

   
   var total = tempo / 15
   var total2 = Math.ceil(total)
   var final = total2 * preco

   outPreco.textContent =`Valor a pagar R$: ${final}`
}