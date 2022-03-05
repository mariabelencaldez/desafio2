document.write("<h2>DESAFIO DE PROGRAMAÇÃO 02</h2>")

// 1

let elementosUser = prompt("#QUESTÃO 1\nGere uma lista ingressando uma quantidade ímpar de números separados por virgula")
let arrUser = elementosUser.split(",")


function encontrar(elementos){
  elementos.sort((a,b) => a -b)
  let metade = Math.floor(elementos.length / 2)
  return mediana = elementos [metade]
}

encontrar(arrUser)

document.write("<h4><br><p>#Questão 1</p><h4>")
document.write("<p>A lista ingressada de números com quantidade de elementos impar é: ", arrUser,".</p>")
document.write("<p>A mediana da lista de números com quantidade de elementos impar é: ", encontrar(arrUser),".</p><br>")


// 2

let numerosUsuario = prompt("#QUESTÃO 2\nIngrese números inteiros separados por virgula os quais integrarão um vetor n ")
let arrayUsuario = JSON.parse ("["+ numerosUsuario +"]")
let inteiroUsuario = Number(prompt("#QUESTÃO 2\nIngrese um número inteiro qualquer o qual será denominado x"))



function subtrair (n,x){
  let nLength = n.length
  let pares = 0
  for(let i = 0 ; i < nLength; i++){
    for(let j = 0 ; j < nLength; j++){
        let resta = n[i] - n[j]
            if (resta === x){
            pares += 1
            }
    }
  }
  return pares
}

subtrair(arrayUsuario, inteiroUsuario)

document.write("<br><p>#Questão 2</p>")
document.write("<p>Os números inteiros que integram o vetor n são: ", arrayUsuario,".</p>")
document.write("<p>O número inteiro x é: ", inteiroUsuario,".</p>")
document.write("<p>O número de elementos pares do vetor que tem uma difereça igual a ", inteiroUsuario, " é: ", subtrair(arrayUsuario, inteiroUsuario),".</p>")


// 3



let textoUser = prompt("#QUESTÃO 3\nescreva o texto a ser encriptado")

function encriptar(s){
  let textoSemEspaco = s.replace(/ /g, "")
  let raizString = Math.round(Math.sqrt(textoSemEspaco.length))
  let partes = [];
  let partesAlteradas = []

  for (var i = 0; i <textoSemEspaco.length; i += raizString) {
      partes.push(textoSemEspaco.substring(i, i + raizString));
  }

  for (let i = 0; i < partes.length; i++) {
      partesAlteradas[i] = " "
      for (let y = 0; y < raizString; y++) {
          partesAlteradas[i] = partesAlteradas[i] + partes[y].charAt(i)
      }
  }
  return partesAlteradas.join("")
}

encriptar(textoUser)

document.write("<br><p>#Questão 3</p>")
document.write("<p>O texto original é: ", textoUser,".</p>")
document.write("<p>O texto encriptado é: ", encriptar(textoUser) ,".</p>")

