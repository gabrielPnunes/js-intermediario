window.onload = function (){
    let d1 = document.getElementById("d1")
    let h = d1.children[0]
    console.log(h)
    console.log(h.parentElement)
    console.log(d1.children[1])
    console.log(document.body.children[1])

    let h1 = document.getElementsByTagName("h1")
     
    for ( let title of h1){
    console.log(title)  
    title.addEventListener("click", qop)
    }

    function qop(e){
        let t = e.target
        console.log(t.parentElement)

    }
}