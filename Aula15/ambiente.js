let num = [5, 8, 2, 9, 3]
console.log(`O primeiro valor é ${num[0]}`)

console.log(`Nosso vetor é o ${num} e o tamanho do array é de ${num.length} posiçôes`)
num.push(7)
console.log(`O array ordenado em ordem crescente é ${num.sort()}`)
console.log(`Nosso vetor é o ${num} e o tamanho do array é de ${num.length} posiçôes`)

let pos = num.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 ta na posição ${pos}`)    
}
