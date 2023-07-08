function h1click(){
console.log("executando a função");
}

function changeh1(t){
let h1 = document.getElementsByTagName("h1")[0];
h1.innerText = t.value;
}

function hide(){
    let sumiu = getElementsById("sumiu")
    sumiu.style.display = "none";
}