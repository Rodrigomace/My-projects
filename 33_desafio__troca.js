// troque os valores entre variáveis (depois da troca: a = 94 e b = 7)
let a = 7
let b = 94

let temp = a // criou-se uma variável temporária para guardar o valor inicia de a
a = b // a recebendo o valor de b
b = temp // b recebendo o valor de temp (valor inicial de a)

// [a, b] = [b, a]

console.log(a)
console.log(b)