


let prompt = require("prompt-sync")(); 


 function Sorteio() { 
   let tentativas = 0; 
   let sorteado = parseInt(Math.random() * 1000) 


   for(tentativas; tentativas < 10; tentativas){ 

       let a = prompt('insira um Numero: ') 
       let b = Number(a); 

       if(b < sorteado){ 
           console.log('Maior') 
           tentativas++ 
       } 
       else if(b > sorteado){ 
           console.log('Menor') 
           tentativas++ 
       } 
       else if(tentativas==0 && b!=sorteado){ 
         return  console.log('Perdeu otario!!'); 

       } 
       else{ 
         console.log('acertou'); 
         tentativas = 10; 
     } 
   } 

   return sorteado 
 }

 let x = Sorteio();
 console.log(x);