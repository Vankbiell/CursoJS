let num = document.getElementById('txtn')
let lista  = document.getElementById('lisnum')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){ // Função para daber se o numero esta dentro da premissa
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){ // saber se o  número está dentro da lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ // Conferencia para saber se o número está dentro do intervalo e se ele já está dentro do vetor
        valores.push(Number(num.value)) // adicionar o número dentro do vetor
        let item = document.createElement('option') // criação de um objeto do html pelo js
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){  //Conferencia se o vetor está vazio
        window.alert('Adicione valores para continuar! ')
    }else{
        let tot = valores.length // variavél de tamanho do vetor
        let maior = valores[0]   // variavél de maior número
        let menor = valores[0]   // variavél de menor número
        let soma = 0             // variavél de soma de números
        let media = 0            // variavél de media dos números

        for (let pos in valores){ // for para percorrer o vetor inteiro
            soma += valores[pos]  // enquanto percorre o vetor já soma dentro da varivél
            if(valores[pos] > maior) 
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos Valores é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
        
    }
}
