function adicionar(){
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    if(n <=1 || n >= 100){
        window.alert('Os números tem que ser entre 1 à 100')
    }else{
        let item = document.createElement('option')
        item.text = `O seu número é ${n}`
        
    }
}