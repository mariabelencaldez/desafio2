
// Os resultados dos testes das funções são verificados por meio da consola

//#QUESTÃO 1 
// (1-A) Saida esperada: 4
let arrA = [9, 2, 1, 4, 6]
console.log("Saída #Questão 1-A: 4.", encontrar(arrA))

// (1-B) Saida esperada: 3
let arrB = [1, 2, 3, 4, 5]
console.log("Saída #Questão 1-B: 3.", encontrar(arrB))

// (1-C) Saida esperada: 200
let arrC = [1572, 200, 33, 49, 5000]
console.log("Saída #Questão 1-C:200.", encontrar(arrC))


//#QUESTÃO 2

// (2-A) Saida esperada: 3
let vetorA = [1, 5, 3, 4, 2]
let xA = 2
console.log("Saída #Questão 2-A: 3.", subtrair(vetorA, xA))

// (2-B) Saida esperada: 9
let vetorB = [1,2,3,4,5,6,7,8,9,10]
let xB = 1
console.log("Saída #Questão 2-B: 9.", subtrair(vetorB, xB))

// (2-C) Saida esperada: 4
let vetorC = [5,15,10,25,20]
let xC = 5
console.log("Saída #Questão 2-C: 4.", subtrair(vetorC, xC))

//  #QUESTÃO 3

// (3-A) Saida esperada: "taoa eum nmd hbi"
let stringA = "tenha um bom dia"
console.log("Saída #Questão 3-A: taoa eum nmd hbi", encriptar(stringA))

// (3-B) Saida esperada: "omd luo an"
let stringB = "ola mundo"
console.log("Saída #Questão 3-B: omd luo an", encriptar(stringB))

// (3-C) Saida esperada: "capgemini capgemini capgemini capgemini capgemini capgemini capgemini capgemini capgemini."
let stringC = "CCCCCCCCC aaaaaaaaa ppppppppp ggggggggg eeeeeeeee mmmmmmmmm iiiiiiiii nnnnnnnnn iiiiiiiii"
console.log("Saída #Questão 3-C: 9 vezes Capgemini.  ", encriptar(stringC))

