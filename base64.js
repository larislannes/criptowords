/* BASE64 */
function encriptar (elemento) { 
var palavra = document.getElementsByTagName("input")[0].value; 
var palavraCodificada = btoa(palavra)
document.getElementById("resultado").innerHTML = palavraCodificada;

}

function desencriptar (elemento) { 
    var palavra = document.getElementsByTagName("input")[0].value; 
    var palavraDescodificada = atob(palavra)
    document.getElementById("resultado").innerHTML = palavraDescodificada;
    

}

/* deveria ser a cifra de cesar mas fodase */
var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var key = +document.getElementById("key").innerHTML;

function prev() {
    if(key > 1) {
        key--;
        document.getElementById("key").innerHTML = key;
    }
}

function next() {
    if(key < 25) {
        key++;
        document.getElementById("key").innerHTML = key;
    }
}

function calculate() {
    var input = document.getElementById("input").value.toUpperCase();
    var result = "";

    for(var i = 0; i<input.length; i++){ 

        var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; 
        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; 
        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; 
        result += values[letraComDeslocamento-1]; 
    }

    document.getElementById("output").innerHTML = result;
}