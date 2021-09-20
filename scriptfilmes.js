var inicial = 1
var tbari = document.getElementById('tbari')
function addfilme(){
var titulo = document.getElementById('txtTitulo').value
var genero = document.getElementById('txtGenero').value


tbari.innerHTML += `<tr id=${inicial}><td>${inicial}</td> <td>${titulo}</td> <td>${genero}</td><td><button onclick="clearall(${inicial})">Excluir</button></td></tr>`
inicial++
}

function excfilme(){
     inicial = 1
     tbari.innerHTML = ""
}

function clearall(id){
    document.getElementById(id).style["display"] = "none"
}


//Feito por Guilherme Monte-Mor 21157024, Eduardo Tupinamba, Vitor Assis 21157019.