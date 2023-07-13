let a = {
    nome:"igor",
    nota:8.6
}

let ab = JSON.stringify(a);
console.log(a);
console.log(ab);

let a1 = '{"nome":"Junior","nota":7.9}';
let a1b = JSON.parse(a1);
console.log(a1);
console.log(a1b);

console.log(a.nome)
console.log(a.nota)

console.log(a1b.nome)
console.log(a1b.nota)

