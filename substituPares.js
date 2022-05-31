var matriz = [1,2,3,4,0];

for(var i = 0; i<=matriz.length; i++){
    
    let par = matriz[i]%2;

    if(par == 0){
        matriz[i] = 0;
    }
        
}

if(matriz.length == 0){
saida = -1
console.log(saida);
}

