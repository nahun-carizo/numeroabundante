let numero,n;

numero=parseInt(prompt('Ingrese un numero: ',' '));
 
 for(let i=1;i<=numero;i++){
     if(esAbundante(i))
     document.write(i);
     document.write(" - ");
 }


function esAbundante(n){
 
     let a=0;
     for(let j=1;j<n;j++){
         if(n % j ==0){
             a+=j;
         }
     }
     if(a>n){
     return true;
     }
     else{
         return false;
     }
}