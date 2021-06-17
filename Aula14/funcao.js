/* Função que lê se o numero é par ou impar 
Se o numero dividido por 2 der resto ou resultado 0, será par
*/

function parimpar(n) {
    if(n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resposta = parimpar(4)
console.log(resposta)