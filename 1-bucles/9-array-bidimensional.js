
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]
for(var i=0;i<matriz.length;i++){
    for(var j=0;j<matriz.length;j++){
        matriz[i][j]=""+i+j;
    }
}
    /*if(i==0){
        matriz[i].push('00','01','02');
    }
    else if(i==1){
        matriz[i].push('10','11','12');
    }
    else if(i==2){
        matriz[i].push('20','21','22');
    }*/
    

console.log(matriz);