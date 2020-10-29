 /*//genero numeri random
function randomNum( min, max){
  var numeroRandom = Math.floor(Math.random()* (max-min+1) + min);
  return numeroRandom;
}
//array
var pcListNmber[]

while (pcListNmber.lenght < 16) {
  var newRandomNum = numeroRandom(1, 100);



}*/
var min = 1;
var max = 100;
var round = 5; //per ora poi 84
 //BONUS
 var difficoltà = parseInt(prompt( "scegli unm livello fra 1 2 e 3"));
 switch (difficoltà){
   case 1:
   max = 100;
   break;
   case 2:
   max = 80;
   break;
   case 3:
   max = 50;
   break;
 }
 //definisco Array
 var pcListNumber = [];

 // genero numero randomico
 while ( pcListNumber < 16){
   var numeroRandom = Math.floor(Math.random()* (max - min + 1)+min);
   if( !numArray(numeroRandom, pcListNumber)){
      pcListNumber.push(numeroRandom);
   }

 }
//funzione che sta nella condizione dell'if e che se è vera genera un elemento mentre se è falsa non lo genera
function numArray(number, numberArr){
  for(var i= 0; i < numberArr.lenght; i++){
    if(number === numberArr[i]){
      return true;
    }
  } return false;
}

//blocco centrale
//condizioni per continuare il gioco
 var vinto =false;
 var isAlive = true;
 var sceltaUtenteArr = [];

 // ciclo while
 while (!vinto && isALive){
   var sceltaUtente = parseInt (prompt("Devi scegliere un numero fra" + min "e" +  max ));
       if(numArray(sceltaUtente, sceltaUtenteArr)){
         alert.("Numero già inserito, riteta, sarai più fortunato!");
       } else{
         sceltaUtenteArr.push(sceltaUtente);
         if(numArray(sceltaUtente, pcListNumber)){
           isAlive = false;
         } else if (sceltaUtenteArr.lenght == round){
           vinto = true;
         }
       }
 }

 //stampa utente vince o perde
 var messageEL = document.getElementById("messageOne");

 if(vinto){
  .innerHTML ="Hai vinto!!!";

} else{
  innerHTML = "Hai perso!!!";
}

// stampa numero tentativi
var tentativiEL = document.getElementById("tentativi").innerHTML += sceltaUtenteArr.lenght
