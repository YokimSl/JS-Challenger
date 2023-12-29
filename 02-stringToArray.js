// Faça uma função que converte uma string para um array. 
// O nome da função é stringToArray e recebe um parâmetro de entrada, 
// que é uma string. A função deve retornar o array 
// (atenção, retornar é diferente de ‘dar um console’ hein?! 😉

// PS: Esse código roda um teste para verificar 
// se a função está funcionando corretamente!

// Dica: dê uma olhada nas aulas sobre Arrays para ajudar a resolver esse 
// desafio 🙂

const exampleString = "I love technology";

function stringToArray(string) {
    return string.split('');
}

let meuArrey = stringToArray(exampleString)

console.log(meuArrey)






// ________________________ TEST ________________________
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
console.log('TESTS:')
if (compareArrays(['I', ' ', 'l', 'o', 'v', 'e', ' ', 't', 'e', 'c', 'h', 'n', 'o', 'l', 'o', 'g', 'y'], stringToArray(exampleString))) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________