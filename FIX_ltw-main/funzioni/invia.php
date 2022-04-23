<html>
    <head></head>

    <body>
        <?php
            $dbconn= pg_connect("host=localhost port=5432
            dbname=recensioni user=postgres password=biar")
                or die('Could not connect : ' . pg_last_error());
            if(!(isset($_POST['contattiButton']))) {
                header("Location: ../homepage.html");
            }
            else{
                
                    $testo=$_POST['ilMessaggio'];
                    $voto=$_POST['bar'];
                   
                    $q2="insert into rec values ($1,$2)";
                    $data=pg_query_params($dbconn, $q2, array($testo,$voto));
                    if($data) {
                        echo "<h1>Recensione inviata! $testo  con Voto: $voto<br/></h1>" ;
                        echo "Torna alla homepage";
                        echo "<a href= ../homepage.html > </a>";
                        //echo "<a href =../Welcome.php?name=$nome> Premi qui
                        //</a> per iniziara ad utilizzare il sito  web";
                        


                    }
                }



        
        ?>
    </body>
</html>
