var button=document.querySelector(".button");

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        button.click();  
    }
});
button.addEventListener("click",function(e){
    var nod=document.createElement("div");
    nod.innerHTML=`
        <span class="visually-hidden">Chargement...</span>
   
    `
    nod.classList.add("spin","spinner-border");
    nod.setAttribute("role","status");
    nod.style.cssText=`position:relative;left:500px;top:-322px;`;
    document.body.appendChild(nod);
    setTimeout(()=>{
        document.body.removeChild(nod);
        afficher();

    },100);


    


})


function afficher(){
    let elt=document.body.querySelector(".text");
    let c=document.body.querySelector(".color");
    let aff=document.body.querySelector(".affichage");
    aff.innerHTML=elt.value;
    apply(aff,'color',c.value);
    let f=document.body.querySelector("#fontSelector");

    apply(aff,'font-family',f.value);
    let t=document.body.querySelector(".taille");
    console.log(t.value);
    if(Number(t.value)>t.max){
        alert("vous avez depassé la valeur maximale de taille!(100)");
        location.reload();
    }
    apply(aff,'font-size',t.value+'px');


}


function apply(elt,propriete,valeur){
    elt.style[propriete]=valeur;





}
