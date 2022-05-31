var palavra = "amor";
var separada=palavra.split("");
var reverso = separada.reverse();
var concatenada = `${reverso[0]}${reverso[1]}${reverso[2]}${reverso[3]}`

(concatenada === palavra)? console.log(`A palavra ${palavra} é um palindromo`):console.log(`A palavra ${palavra} não é um palindromo`);