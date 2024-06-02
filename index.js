let NomeHeroi = "gabriel";
let pontos = 8001;
let nivel = "";

if(pontos === 1000){
    nivel = "ferro";
}
else if(pontos >= 1001 && pontos <= 2000){
    nivel = "bronze";
}
else if(pontos >= 2001 && pontos <= 5000){
    nivel = "prata";
}
else if(pontos >= 6001 && pontos <= 7000){
    nivel = "ouro";
}
else if(pontos >= 7001 && pontos <= 8000){
    nivel = "platina";
}
else if(pontos >= 8001 && pontos <= 9000){
    nivel = "ascendente";
}
else if(pontos >= 9001 && pontos <= 10000){
    nivel = "imortal";
}
else{
    nivel = "radiante";
}

console.log("O Herói de nome " + NomeHeroi + " está no nível de " + nivel + ".");

