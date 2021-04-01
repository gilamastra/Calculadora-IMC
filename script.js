
window.ChangeColorM = function(){
var woman = document.getElementById("woman")
var man = document.getElementById("man")
man.style.border = "1px solid green "
man.style.color = "black"

woman.style.border = "1px solid #cecece"
woman.style.color = "#cecece"
return false
}


window.ChangeColorW = function(){
    var woman = document.getElementById("woman")
    var man = document.getElementById("man")

    woman.style.border = "1px solid green "
    woman.style.color = "black"
    
    
    man.style.border = "1px solid #cecece"
    man.style.color = "#cecece"
    return false
    }



    window.verify = function(){
   
        var resultado = document.getElementById("resultado")
        var peso = document.getElementsByName("peso");
        var alturaSpan = document.getElementById("alturaSpan")
        var pesoSpan = document.getElementById("pesoSpan")
        var pResultado  =  document.getElementById("pResultado")
        var nome = document.getElementById("nome")




        var altura = document.getElementById("altura")
        var alturaValue = document.getElementById("altura").value
    
        alturaValue =  alturaValue.replace(/[,.]/g, m => (m === ',' ? '.' : '.'))

        var peso = document.getElementById("peso")
        var pesoValue = document.getElementById("peso").value
          

        if (pesoValue && alturaValue &&pesoValue <=300 && alturaValue <=3){
            pesoValue = parseFloat(pesoValue)
            alturaValue = parseFloat(alturaValue)
            nomevalue = document.getElementById("nome").value
            var imc = pesoValue / (alturaValue * alturaValue )
            imc = parseFloat(imc)
            imc = imc.toFixed(2)

            if (imc <= 18.5){
                pResultado.innerHTML = `${nomevalue} O seu imc é de <b>${imc}</b> e sua classificação é <b>abaixo do peso<b>`
            }else if (imc <= 25){
                pResultado.innerHTML = `${nomevalue} O seu imc é de <b> ${imc}</b>  e sua classificação é <b> peso normal</b> `
            }else if (imc <= 30){
                pResultado.innerHTML = `${nomevalue} O seu imc é de <b> ${imc}</b>  e sua classificação é <b> sobrepeso</b> `
            }else if (imc <= 35){
                pResultado.innerHTML = `${nomevalue}O seu imc é de <b> ${imc}</b>  e sua classificação é <b> obesidade grau 1</b>  `
            }
            else if (imc <= 39.9){
                pResultado.innerHTML = `${nomevalue}O seu imc é de <b> ${imc}</b>  e sua classificação é <b> obesidade grau 2</b>  `
             }else{
                pResultado.innerHTML = `${nomevalue}O seu imc é de <b> ${imc}</b>  e sua classificação é <b> obesidade móbida</b>  `
             }

             
        }



        if (alturaValue == false){
            alturaSpan.innerHTML = 'Campo obrigatório'
            altura.style.border = '2px solid red'
        }else{
            altura.style.border = '1px solid #cecece'
            alturaSpan.innerHTML = ''
        };

        if(alturaValue > 3){
            alturaSpan.innerHTML = 'O valor maximo é 3'
            altura.style.border = '2px solid red'
        }



        if (pesoValue == false){
            pesoSpan.innerHTML = 'Campo obrigatório'
            peso.style.border = '2px solid red'
        }else{
            peso.style.border = '1px solid #cecece'
            pesoSpan.innerHTML = ''
        };
        
        if (pesoValue > 300){
            pesoSpan.innerHTML = 'O peso maximo é 300'
            peso.style.border = '2px solid red'
        }


        return false
    }

  