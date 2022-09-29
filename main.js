// Crea un programa el cual te pregunte por una nota del 0 al 10

// function restevaluacion() {

//     let nota = +prompt('Cual es tu nota')
//     console.log(nota)

//     switch (nota) {
      
//         case 0:
//         case 1:
//         case 2:
//         case 3:
//         case 4:
         
//            return console.log('Insuficiente')
//             break;

//             case 5:
//             case 6:

//             return console.log('Suficiente')

//             break;
    
//             case 7:
//             case 8:
//             return console.log('Notable')

//             break;
     
//             case 9:
//             case 10:
//             return console.log('Sobresaliente')

//         default: 
//         return console.log('El valor ingresado, no corresponde')
            
//     }

// }
// restevaluacion ()

// Crea una función resta que espere dos parámetros a y b 

function resta(a,b){
   return a-b

}
console.log(resta(454,56))

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido

function duplicaNumero(numero){
    if(typeof numero !== 'number')
        console.log('Debo ser ejecutada con un número')

   return numero*2
}
console.log(duplicaNumero(56))

//Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter

function caracterInicial(instring){
    if(typeof instring !== 'string')
        return console.log('Debo ser ejecutada con un string')

    else if (instring ==='')
        return console.log('Debo ser ejecutada con un string no vacío');
    return instring [0];
}

console.log(caracterInicial('Hola'));

//Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.

function ultimoCaracter(ulstring){
    if(typeof ulstring !== 'string')
        return console.log('Debo ser ejecutada con un string')

    else if (ulstring ==='')
        return console.log('Debo ser ejecutada con un string no vacío');
    
        // let ululstring= ulstring.length;
        // return ulstring.charAt(ululstring-1)
        return ulstring[ulstring.length - 1];

}

console.log(ultimoCaracter('Adios'));

//Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres

function cuentaCaracteres(carstring){
    if(typeof carstring !== 'string')
        return console.log('Debo ser ejecutada con un string')

    else if (carstring ==='')
        return console.log('Debo ser ejecutada con un string no vacío');

    return carstring.length;
}
console.log(cuentaCaracteres("Peroporque"));

//Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.

function esPalindromo(palindro) {
    
    if(typeof palindro !== 'string' || palindro==='' )
        return console.log('Debo ser ejecutada con un string')

    else {
        
        let cad2= palindro.split("").reverse().join("");
        if(palindro==cad2)
           return console.log('Es palindromo')
        else return console.log('no es palindromo')
    }
    
  }
  //No me funciona sin espacios, no entiendo
  console.log(esPalindromo('anitalavalatina'))

  //Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales.

  function getPrecioMostrar (num){
    let decimales = num
   if (typeof num != "number" )
   {
        console.log('no es un formato correcto');  
    }
    console.log(decimales.toFixed(2)+" €"); 
}

getPrecioMostrar(2);


//Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division (num1,num2) {
    return num1 / num2
    }

    console.log(division(34,23))

 //

 function mayorquecinco (numeros)
 {
    let tam=numeros.length
    let array2=[]
    for(i=0;i<tam;i++)
    {
        if (numeros[i]>=5)
        {
            array2[i]=numeros[i]
            console.log(array2[i])
        }    
    }
    

 }

 const nums = [1,2,3,5,6,7];
 mayorquecinco(nums)

 function numprimo(primo)
 {
    let t=1
    for(i=2;i<primo;i++)
    {
        if(primo%i===0)
            t++
        
    }
    if(t>1)
        console.log("No es un numero primo")
    if(t==1)
        console.log("Es un numero primo")
 }

 let primo = prompt("Ingrese el numero");
 numprimo(primo)
    