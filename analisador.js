let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true     
    }else{
        return false
    }
}

function adicionar()
{
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'Valor ' + num.value + ' adicionado'
        lista.appendChild(item)
        res.innerHTML = ''
    
    }else {
        window.alert('Valor inválido ou já está incluso na lista.')
    }

    num.value = '' // para depois que digitar o valor no input o input fique em branco novamente
    num.focus() //para o ponteiro do mouse voltar a pistar no imput

}

function finalizar()
{
     if(valores.length==0){
        window.alert('Adicionar valores para análise antes de finalizar')
     }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores)
        {
            soma += valores[pos]
         
            //verificando qual maior valor
            if(valores[pos] > maior)
            maior = valores[pos]
        
            //verificando qual menor valor
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += '<p>Ao todo temos ' + total + ' números cadastrados.</p>'
        res.innerHTML += '<p>O menor valor é ' + menor + '.</p>'
        res.innerHTML += '<p>O maior valor é ' + maior + '.</p>'
        res.innerHTML += '<p>O valor da soma dos números é ' + soma + '.</p>'
        res.innerHTML += '<p>O valor da média entre os números é ' + media + '.</p>'

     }
}
