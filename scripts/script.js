/* 

*carne - 400 g por pessoa, se o churrasco durar mais de 6 horas 650g por pessoas
*cerveja - 1200 ml por pessoa, se o churrasco durar mais de 6 horas 2000 ml por pessoal
*refrigerante/agua - 1000 ml por pessoa, se o churrasco durar mais de 6 horas 1500 ml por pessoal
*criança vale por 0,5 pessoa

*/

var carne = 400;
var cerveja = 1200
var refri = 1000
var resultado = null


function capturarInf(){


    let info = document.getElementsByTagName("input");

    let resulCarne = (carne * info[0].value) + (carne * info[1].value / 2);
    let resulCerveja = cerveja * info[0].value;
    let resulRefri = (refri * info[0].value) + (refri * info[1].value/2);
    let horas = info[2].value;
    

    if(info[0].value == "" && info[1].value == "" && info[2].value == ""){
        alert ("Digite os dados necessários para o cálculo.")
    }   
    
    else if (horas >= 6){
        let resulCarne = (650 * info[0].value) + (650 * info[1].value / 2);
        let resulCerveja = 2000 * info[0].value;
        let resulRefri = (1500 * info[0].value) + (1500 * info[1].value/2);
        resultado = "<h4>Para seu churrasco será preciso: </h4>" +"- "+resulCarne/1000+" kg de carne. "+"<br>"+ "- "+Math.ceil(resulCerveja/355)+" latas de Cerveja." +"<br>"+ "- "+Math.ceil(resulRefri/1000)+" litros de bebidas" + "<br>"+ " <img src='./images/drooling-face-emoji.png' alt='fome' style='width: 100px;'>"

    } else {
        resultado = "<h4>Para seu churrasco será preciso: </h4>" +"- "+resulCarne/1000+" kg de carne. "+"<br>"+ "- "+Math.ceil(resulCerveja/355)+" latas de Cerveja." +"<br>"+ "- "+Math.ceil(resulRefri/1000)+" litros de bebidas" + "<br>"+ " <img src='./images/drooling-face-emoji.png' alt='fome' style='width: 100px;'>"
    }
   

    let p = document.getElementById("resultado") 
    p.innerHTML = resultado
    
    console.log(resultado)


}




