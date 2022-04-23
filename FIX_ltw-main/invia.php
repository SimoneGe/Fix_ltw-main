<html>
    <head></head>

    <body>
        <?php
            $dbconn= pg_connect("host=localhost port=5432
            dbname=Recensioni user=postgres password=password")
                or die('Could not connect : ' . pg_last_error());
            if(!(isset($_POST['contattiButton']))) {
                header("Location: homepage.html");
            }
            else{
                    $nome=$_GET['name'];
                    $testo=$_POST['ilMessaggio'];
                    $voto=$_POST['bar'];
                   
                    $q2="insert into rec values ($1,$2,$3)";
                    $data=pg_query_params($dbconn, $q2, array($nome,$testo,$voto));
                    if($data) {
                        echo "<h1>Recensione inviata!  $nome ha inviato $testo  con Voto: $voto<br/></h1>" ;
                        echo "Torna alla homepage";
                        header("Location: homepage.html ");
                        //echo "<a href =../Welcome.php?name=$nome> Premi qui
                        //</a> per iniziara ad utilizzare il sito  web";
                        


                    }
                }



        
        ?>
    </body>
</html>
