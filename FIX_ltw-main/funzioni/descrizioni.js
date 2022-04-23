var app=new Vue({
    el: "#app"
});

Vue.component("info",{
    template:`
        <div>
            <div class="container-12">
                <div class="row">
                    <div class="col-xl-2">
                        Il processore<br>
                        <img src="imm/processore.jpeg" width="50%" v-on:click="updateInfo('proc')">
                    </div>
                    <div class="col-xl-2">
                        La ram<br>    
                        <img src="imm/ram.jpeg" width="50%" v-on:click="updateInfo('ram')">
                    </div> 
                    <div class="col-xl-2">   
                        La scheda grafica<br>
                        <img src="imm/scheda_grafica.jpeg" width="50%" v-on:click="updateInfo('gpu')">
                    </div>
                    <div class="col-xl-2">    
                        La scheda madre<br>
                        <img src="imm/scheda_madre.jpeg" width="50%" v-on:click="updateInfo('default')">
                    </div>    
                    <div class="col-xl-2">       
                        L'hard disk<br>
                        <img src="imm/hdd.jpeg" width="50%" v-on:click="updateInfo('hdd')">
                    </div>
                    <div class="col-xl-2">
                        Il solid state drive<br>
                        <img src="imm/ssd.jpeg" width="50%" v-on:click="updateInfo('ssd')"> 
                    </div>
                 </div>
            </div><br><br>

            <div class="container-6">
                <h3>{{prodotti[selected].nome}}</h3><br>
                <div class="row" id="riga_b">
                    <div class="col-sm-2">
                        <img v-bind:src="prodotti[selected].image" width="50%" />
                    </div>
                    <div class="col-sm-4">
                        {{prodotti[selected].text}}
                    </div>
                </div>
            </div>
        </div> `,
    data: function(){
        return{
            selected: 0,
            prodotti:[
                 {id:0, nome:"ram", text:"In elettronica e informatica, la RAM (acronimo dell'inglese Random Access Memory ovvero memoria ad accesso"+
                                     "casuale in contrapposizione con la memoria ad accesso sequenziale) è un tipo di memoria volatile"+ 
                                      "caratterizzata dal permettere l'accesso diretto a qualunque indirizzo di memoria con lo stesso tempo di accesso.",
                 image:"imm/ram.jpeg", link:""},

                {id:1, nome:"processore", text:"L'unità di elaborazione o processore[1][2] in informatica ed elettronica, è un tipo di dispositivo hardware di un computer che si"+
                                            "contraddistingue per essere dedicato all'esecuzione di istruzioni, a partire da un instruction set.",
                image:"imm/processore.jpeg",  link:""},

                {id:2, nome:"hard-disk", text:"Il disco rigido è un dispositivo di archiviazione del computer ed è uno dei tipi di dispositivi di memoria di massa attualmente"+ 
                                            "più utilizzati essendo presente nella maggior parte dei computer ed anche in altri dispositivi elettronici, come per esempio il PVR."+ 
                                            "È stato per lungo tempo l'unica scelta sui personal computer, ma sta conoscendo"+ 
                                            "una perdita di quote di mercato a favore delle più recenti e veloci, ma anche più costose, unità a stato solido (SSD, Solid State Drive.",
                image:"imm/hdd.jpeg", link:""},

                {id:3, nome:"Solid State Drive", text:"A differenza dei supporti di tipo magnetico come nel caso del disco rigido a testina, una unità di memoria a stato solido ha la possibilità"+ 
                                                    "di memorizzare in maniera non volatile grandi quantità di dati, senza l'utilizzo di organi meccanici (piatti, testine, motori ecc.)"+ 
                                                    "come fanno invece gli hard disk tradizionali. La maggior parte delle unità a stato solido utilizza la tecnologia delle memorie flash NAND,"+ 
                                                    "che permette una distribuzione uniforme dei dati e di 'usura' dell'unità.[2]",
                image:"imm/ssd.jpeg", link:""},

                {id:4, nome:"Scheda grafica", text:"In informatica ed elettronica una scheda video[1] è un componente hardware del computer, sotto forma di scheda elettronica che ha lo scopo di elaborazione"+ 
                                                    "del segnale video ovvero generare, a partire da un segnale elettrico in ingresso dal processore, un determinato segnale elettrico in uscita che possa essere"+ 
                                                    "poi inviato in input a video (display o monitor) per essere tradotto da quest'ultimo in segnale ottico visivo e mostrato all'utente.",
                image:"imm/scheda_grafica.jpeg", link:""},

                {id:5, nome:"Scheda madre", text:"Una scheda madre(plurale schede madri[1]), mainboard ('scheda principale'), o meno conosciuta come planar board (scheda piana), abbreviata MB, M/B, mobo, in elettronica"+
                                                " e informatica, è un tipo di scheda elettronica principale, raccoglie in sé tutta la circuiteria elettronica e i collegamenti di interfaccia tra i vari componenti interni"+ 
                                                "principali di un personal computer come memoria e le altre schede elettroniche montate o alloggiate sopra, comprendendo anche i bus di espansione e le interfacce verso le"+
                                                "periferiche esterne.",
                image:"imm/scheda_madre.jpeg", link:""},
            ]
        }
    },
    methods:{
        updateInfo: function(info){
            if (info=='proc')       this.selected=1;
            else if(info=="ram")    this.selected=0;
            else if(info=="hdd")    this.selected=2;
            else if(info=="ssd")    this.selected=3;
            else if(info=="gpu")    this.selected=4;
            else this.selected=5;
            return true;
        }
    }     
});


function assegnaEvento(){
    var bottoni=document.getElementsByClassName("sec");
    for(var i=0;i<bottoni.length;i++){
       bottoni[i].onclick=caricaDocumento;
    }
    return true;
}

function caricaDocumento(e){   
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=visualizza;
    ajax.open("GET",e.target.innerHTML+".html",true);
    ajax.send();
}

function visualizza(e){
    if(e.target.readyState==4 && e.target.status==200){
        alert("dentro");
       document.getElementById("visualizza").innerHTML=e.target.responseText;
    }
    //else alert(e.target.readyState+"  "+e.target.status)
}
    