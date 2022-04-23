function convertiDecBin(){
    var dec=document.getElementById("decimale").value;
    var temp="";
    if (dec==0){
        document.getElementById("binario").value=0;
        return true;
    }
    var n=dec;
        while(n>0){
            temp+=(n%2).toString();
            n=Math.floor(n/2);
        }       
    var out=temp.split("").reverse().join("");
    document.getElementById("decimale").value=dec;
    document.getElementById("binario").value=out;
    return true;
}

function convertiBinDec(){
    var bin=document.getElementById("binario").value;
    var out=0;
    var n=bin;
    var size=bin.toString().length;
    for(var i=0;i<size;i++)
        if(bin.toString()[i]==1)
          out+=Math.pow(2,size-1-i);
        else if(bin.toString()[i]==0)
          continue;
        else{
          alert("Il numero inserito non è binario");
          return false;
        }
    document.getElementById("decimale").value=out;
    document.getElementById("binario").value=bin; 
    return true;          
}

function generaMatrici(){
    r=document.getElementById("righe").value;
    c=document.getElementById("colonne").value;
    //MATRICE 1
    var s="<table>";
    for(i=0;i<r;i++){
       s+="<tr>";
       for(j=0;j<c;j++){
          var id=i.toString()+','+j.toString();
          s+="<td> <input type='number' value=0 id="+id+"> </td>";
       }
       s+="</tr>";
    }
    s+="</table>";
    document.getElementById("mat1").innerHTML=s;
    //MATRICE 2
    var s="<table>";
    for(i=0;i<r;i++){
       s+="<tr>";
       for(j=0;j<c;j++){
          var id=i.toString()+'-'+j.toString();
          s+="<td> <input type='number' value=0 id="+id+"> </td>";
       }
       s+="</tr>";
    }
    s+="</table>";
    document.getElementById("mat2").innerHTML=s;
    return true;
}

function sommaMat(){
    r=document.getElementById("righe").value;
    c=document.getElementById("colonne").value;
    var s="<table>";
    for(i=0;i<r;i++){
        s+="<tr>";
        for(j=0;j<c;j++){
           var id1=i.toString()+','+j.toString();
           var x1=document.getElementById(id1).value;
            var id2=i.toString()+'-'+j.toString();
           var x2=document.getElementById(id2).value;
           var x=parseInt(x1)+parseInt(x2);
           s+="<td> <input type='number' value="+x+"> </td>";
        }
        s+="</tr>";
    }
    s+="</table>";
    document.getElementById("mat3").innerHTML=s;
    return true;
}

function resetta_mat(){
    document.getElementById("mat1").innerHTML="";
    document.getElementById("mat2").innerHTML="";
    document.getElementById("mat3").innerHTML="";
    return true;
}

function generateData(value1, value2, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
        a=eval(value1);
        b=eval(value2);
        yValues_1.push(a);
        yValues_2.push(b);
        xValues.push(x);
    }
}

function sistema(a,b){
    for(var i=0;i<a.length;i++)
        if(a[i]==b[i])
            uguali="Le funzioni ammettono un punto comune in: ("+i+","+b[i]+")";
}

var grafico;
var xValues=[];
var yValues_1=[];
var yValues_2=[];
var uguali="Le funzioni non ammettono alcun punto in comune";

function resetta_graf(){
    xValues=[];
    yValues_1=[];
    yValues_2=[];
    uguali="Le funzioni non ammettono alcun punto in comune";

    document.getElementById("f1").value="";
    document.getElementById("f2").value="";
    inizializza(); //commenta se vuoi lasciare le funzioni vecchie a vista
    return true;
}

function inizializza(){
        grafico=new Chart("graf",{
        type:"line",
        data:{
            labels: xValues,
            datasets: [{
                fill: false,
                pointRadius: 1,
                borderColor: "rgba(255,0,0,0.5)",
                data: []
            },{
                fill: false,
                pointRadius:1,
                borderColor: "rgba(128,0,0,0.5)",
                data:[]
            }]
        },
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: "Piano Cartesiano",
            fontSize: 16
            }
        }
    });
}

function costruisci(){
  valida_funzione();
  var f1=document.getElementById("f1").value;
  var f2=document.getElementById("f2").value;
  generateData(f1,f2,0,10);
  sistema(yValues_1,yValues_2);
  grafico=new Chart("graf",{
    type:"line",
    data:{
        labels: xValues,
        datasets: [{
            fill: false,
            pointRadius: 1,
            borderColor: "rgba(255,0,0,0.5)",
            data: yValues_1
            },
            {
            fill: false,
            pointRadius:1,
            borderColor: "rgba(128,0,0,0.5)",
            data: yValues_2
        }]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: "f1: "+f1+"  f2: "+f2+"  "+uguali,
        fontSize: 16
        }
    }
  });
  return true;
}

var teoremi={
    confronto:
            {
            enunciato: "Il teorema del confronto per le funzioni asserisce che, date tre funzioni f,g,h: X->R " +
                        "definite su un dominio X di R, e dato un punto di accumulazione x<sub>0</sub> per, se"+
                        "<img src='imm/confronto/en_1.svg'/> ed esiste un intorno di U di x<sub>0</sub> tale che: "+
                        "<img src='imm/confronto/en_2.svg'/> allora: <img src='imm/confronto/en_3.svg'/> <br>",
            dimostrazione: "Per la definizione di limite, per ogni &>0 esistono due intorni U<sub>1</sub> e U<sub>2</sub> "+
                            "di x<sub>0</sub> tali che: <img src='imm/confronto_dim_1.svg'/> <br> Quindi:<br>"+
                            "<img src='imm/confronto/dim_2.svg'/> <br> Quindi per ogni &>0 esiste un intorno <img src='imm/confronto/dim_5.svg'/>"+
                            "tale che: <br> <img src='imm/confronto/dim_3.svg'/> <br> In altre parole: <img src='imm/confronto/dim_4.svg'>"
                           
            },
    unicità:
            {
            enunciato: "Il teorema di unicità del limite per le funzioni asserische che: <br>"+
                        "Una funzine f:X->R definita su un intervallo aperto X di numeri reali non può avere due limiti "+
                        "distini in un punto x<sub<0</sub> di accumulazione per X",

            dimostrazione: "Supponiamo che l<sub>1</sub>,l<sub>2</sub> siano limiti della funzione in x<sub>0</sub>.<br>"+
                            "Mostreremo che l<sub>1</sub>=l<sub>2</sub> siano distinti.Allora esistono due intorni V<sub>1</sub> "+
                            "di l<sub>1</sub> e V<sub>2</sub> di l<sub>2</sub> disgiunti.<br>"+
                            "Per definizione di limite, esistono due intorni U<sub>1</sub> e U<sub>2</sub> di x<sub>0</sub> per cui vale:<br>"+
                            " f(x) appartiene a V<sub>1</sub> per ogni x in <img src='imm/unicità/dim_1.svg'/> diverso da x<sub>0</sub>,<br>"+
                            "f(x) appartiene a V<sub>2</sub> per ogni x in <img src='imm/unicità/dim_2.svg'/> diverso da x<sub>0</sub>.<br>"+
                            "L'insieme <img src='imm/unicità/dim_3.svg' /> è un altro intorno di x<sub>0</sub> perchè x<sub>0</sub> è un punto "+
                            "di accumulazione per X. Per questo punto, f(x) è contemporanemente in V<sub>1</sub> e V<sub>2</sub>, che però sono disgiunti: il che è assurdo." 
            },
    weiestrass:
            {
                enunciato: "Sia [a,b] < R un intervallo chiuso e limitato non vuoto e "+
                            "sia f:[a,b]->R una funzione continua. Allora "+ 
                            "f(x) ammette (almeno) un punto di massimo assoluto e un punto di minimo assoluto nell'intervallo [a,b].",

                dimostrazione: "Poiché f è una funzione continua, essa trasforma insiemi compatti in insiemi compatti. Dato che "+
                                "[a,b] è un intervallo chiuso e limitato, per il teorema di Heine-Borel è un compatto; quindi "+
                                "anche la sua immagine mediante f sarà un compatto diR , e dunque è "+
                                "provvista di massimo e minimo, ovvero f  assume un valore massimo e uno minimo in essa. Le loro "+
                                "controimmagini in [a,b] sono rispettivamente un punto di massimo e uno di minimo assoluti."
            },
    segno:
            {
                enunciato: "Il teorema della permanenza del segno per le successioni afferma che: "+
                            "Una successione a<sub>n</sub> che tende a un limite strettamente positivo a>0 (che può essere anche ha definitivamente "+
                            "soltanto termini positivi. In altre parole, esiste un  N  tale che a<sub>n</sub> >0 per ogni n>N."+
                            "Analogamente, una successione che tende a un limite strettamente negativo ha definitivamente soltanto termini negativi.",
            
                dimostrazione: "Se a è finito, basta prendere <img src='imm/segno/dim_1.svg'/> nella definizione di limite: "+
                               "esiste quindi un N tale che a<sub>n</sub> è nell'intervallo <img src='imm/segno/dim_2.svg'/>"+
                               "per ogni n>N; poichè <img src='imm/segno/dim_3.svg'/> allora a<sub>n</sub> <0 per ogni n>N"

            }
}

function caricaDoc1(e){
    document.getElementById("dim").innerHTML="ENUNCIATO:<br>"+teoremi.confronto.enunciato+"<br>DIMOSTRAZIONE:<br>"+teoremi.confronto.dimostrazione;

}

function caricaDoc2(e){
    document.getElementById("dim").innerHTML="ENUNCIATO:<br>"+teoremi.unicità.enunciato+"<br>DIMOSTRAZIONE:<br>"+teoremi.unicità.dimostrazione;

}

function caricaDoc3(e){
    document.getElementById("dim").innerHTML="ENUNCIATO:<br>"+teoremi.weiestrass.enunciato+"<br>DIMOSTRAZIONE:<br>"+teoremi.weiestrass.dimostrazione;

}

function caricaDoc4(e){
    document.getElementById("dim").innerHTML="ENUNCIATO:<br>"+teoremi.segno.enunciato+"<br>DIMOSTRAZIONE:<br>"+teoremi.segno.dimostrazione;

}
