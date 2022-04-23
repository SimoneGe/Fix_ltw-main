<html>
    <head></head>

    <body>
        <?php
            $dbconn= pg_connect("host=localhost port=5432
            dbname=recensioni user=postgres password=biar")
                or die('Could not connect : ' . pg_last_error());
            if(!(isset($_POST['laMedia']))) {
                header("Location: ../homepage.html");
                //Se non esiste loginButton ci reindirizza alla pagina principale quindi
                //funziona solo se accediamo tramite loginButton
            }
            else{
                
                $q1="select avg(voto) from rec ";
                $result=pg_query_params($dbconn,$q1,array());
                if(!($line=pg_fetch_array($result,null,PGSQL_ASSOC))){
                    echo"<h1>Mi dispiace, non sono presenti voti</h1>";
                }
                else{
                    
                        echo "$line";



                }
            }



            
        ?>
    </body>
</html>



