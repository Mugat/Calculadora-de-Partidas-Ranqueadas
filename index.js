    // Criei uma função, 1 constante e uma varíavel do nivel

function balanceRanked(vitorias, derrotas){
    const balanceVictories = vitorias - derrotas
    let nível;

    // Continuei usando uma estrutura de decisão

    if(vitorias<10){
        nivel = "Ferro";
    }   else if(vitorias>=11 && vitorias <=20){
        nivel=  "Bronze";
    }   else if(vitorias>=21 && vitorias <=50){
        nivel=   'Prata';
    }   else if( vitorias>=51 && vitorias <=80){
        nivel=   "Ouro"
    }   else if(vitorias>=81 && vitorias <=90){
        nivel=   "Diamante"
    }   else if (vitorias >=91 && vitorias <=100){
        nivel=   "Lendário"
    }   else {
        nivel= "Imortal";
    }
    


    // Criei outra constante com um retorno dessa constante
    const mensagem = `O Herói tem saldo de ${balanceVictories} está no nível de ${nivel}`
    return mensagem;
    }

    // Terminei usando mais 3 Constantes, uma de vitorias, outra de derrotas, de resultado e a mensagem de saída ao final
const vitorias= 97
const derrotas= 12
const resultado= balanceRanked(vitorias, derrotas);
console.log(resultado);

