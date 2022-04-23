
function cambiaBarra() {
    document.getElementById("valore").innerHTML = document.getElementById("barra").value;
}

function verificaAccesso(){
    var nome=sessionStorage.getItem("nomeUtente");
    if (typeof(sessionStorage.nomeUtente) == "undefined") {
       document.getElementById("inviaB").disabled=true;
       document.getElementById("inviaT").disabled=true;
       document.getElementById("inviaT").placeholder="Per mandarci un messaggio devi accedere al sito!";
       
    }
    else{
        var destinazione = "/invia.php?name=" + nome;
        document.getElementById("form").action = destinazione;
        document.getElementById("Register").hidden=true;
       document.getElementById("log").innerHTML= "<a class='nav-item nav-link active' href='../homepage.html' onclick='return disconnetti();'><strong><h2>Log Out</h2></strong> </a>";
   

    }
    



}
function verificaAccessoHome(){
    var nome=sessionStorage.getItem("nomeUtente");
    if(typeof(sessionStorage.nomeUtente ) != "undefined"){
        document.getElementById("Register").hidden=true;
        document.getElementById("log").innerHTML= "<a class='nav-item nav-link active' href='../homepage.html' onclick='return disconnetti();'><strong><h2>Log Out</h2></strong> </a>";
    }


}

function disconnetti(){
    sessionStorage.removeItem("nomeUtente");
}


function settaUtente(utente){
    sessionStorage.setItem("nomeUtente",utente);
}



var count=0;
function aggiornaCount(e){
   e.target.disabled=true;
   count++;
   document.getElementById("interesse").innerHTML="Hai trovato interessanti "+count+" su 6";
    

}


function assegnaEventHandlers(){
    verificaAccessoHome();
    var buttonsi= document.getElementsByName("si")
    for(i=0;i<buttonsi.length;i++){
       buttonsi[i].addEventListener("click",aggiornaCount);
   }
}
