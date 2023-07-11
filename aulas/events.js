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
    
    function onOver(elemento){
        elemento.style.backgroundColor = "Blueviolet";
    }
    
    function onOut(elemento){
        elemento.style.backgroundColor = "aquamarine";
    }
    
    function loaded(){
        let t = document.getElementById ("titulo1");
       // t.onclick = mudartext;
    
       t.addEventListener("mouseover" , mudartext)
       t.addEventListener("mouseout", mouseout)
    }
    function mudartext(){
        this.innerHTML = "novo texto";
    }
    
    function mouseout(){
        this.innerHTML = "texto padrão"
    }
    
    