var form = document.querySelector("#form-pesquisa")
var maisBtn = document.querySelector("#saiba")
var num = Math.floor(Math.random() * 1008);

document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault()

    var url = "https://pokeapi.co/api/v2/pokemon/"+ num

    fetch(url)
        .then(function(response){
            return response.json()
        })

        .then(function(data){
            console.log(data)

            var Dimg = document.querySelector("#pokeday-img")
            var Dname = document.querySelector("#pokeday-btn")

            Dimg.innerHTML ="<img src='"+data.sprites.front_default+"' alt='' id='pk-img' style='width: 250px;'>"
            Dname.innerHTML = "<p>" + data.name + "</p>"
        })    

})

form.addEventListener("submit", function(event) {
    event.preventDefault()
    var aberto = document.getElementById("henry")
    aberto.className = "aberto"
    var nome = document.querySelector("input[name=pesquisa]").value
    procura(nome)
})

maisBtn.addEventListener("click", function(event) {
    event.preventDefault()
    var aberto = document.getElementById("henry")
    aberto.className = "aberto"
    procura(num)
})

function procura (x){
    var url = "https://pokeapi.co/api/v2/pokemon/"+ x

    console.log (url)

    fetch(url)
        .then(function(response){
            return response.json()
        })

        .then(function(data){
            console.log(data)

            var peso = document.querySelector("#peso")
            var altura = document.querySelector("#altura")
            var conteudo = document.querySelector("#conteudo")
            var imagem = document.querySelector("#pokemon-img")

            conteudo.innerHTML = "<p>" + data.name + "</p>"
            imagem.innerHTML ="<img src='"+data.sprites.front_default+"' alt='' id='pk-img' style='width: 300px;'>"
            data.types.forEach((tipos) => {
                var nome = tipos.type.name
                conteudo.innerHTML +="<p> Tipo: " + nome + "</p>"
            })
            conteudo.innerHTML += "<p> ID: "+ data.id +"</p>"
            altura.innerHTML += "<p>"+(data.height / 10)+"m </p>"  
            peso.innerHTML += "<p>"+(data.weight / 10)+"Kg </p>"

            if (data.id <= 151){
                conteudo.innerHTML += "<p>1º Geração</p>"
            }else if (data.id > 151 && data.id <=251){
                conteudo.innerHTML += "<p>2º Geração</p>"
            }else if (data.id > 251 && data.id <=386){
                conteudo.innerHTML += "<p>3º Geração</p>"
            }else if (data.id > 386 && data.id <=494){
                conteudo.innerHTML += "<p>4º Geração</p>"
            } else if (data.id > 494 && data.id <=649){
                conteudo.innerHTML += "<p>5º Geração</p>"
            }else if (data.id > 649 && data.id <=721){
                conteudo.innerHTML += "<p>6º Geração</p>"
            }else if (data.id > 721 && data.id <=809){
                conteudo.innerHTML += "<p>7º Geração</p>"
            }else if (data.id > 809 && data.id <= 905){
                conteudo.innerHTML += "<p>8º Geração</p>"
            }else{
                conteudo.innerHTML += "<p>9º Geração</p>"
            }
                

        })
}