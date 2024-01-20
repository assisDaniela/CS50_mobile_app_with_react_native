(function () {
    var nome = "Felipe";
})();

// console.log(nome); // error! => nome não pode ser acessada fora do escopo

var result = (function () {
    var nome = "Felipe";
})();

result;