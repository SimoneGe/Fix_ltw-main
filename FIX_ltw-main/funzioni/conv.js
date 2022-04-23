

    





function convertiCripto(){
    var testo=document.getElementById("1").value;
    var passhash = CryptoJS.MD5(testo).toString();
    document.getElementById("2").value=passhash;
    return true;




}