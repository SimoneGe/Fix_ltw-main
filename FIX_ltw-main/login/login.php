<html>
    <head></head>

    <body>
        <?php
            $dbconn= pg_connect("host=localhost port=5432
            dbname=Login user=postgres password=password")
                or die('Could not connect : ' . pg_last_error());
            if(!(isset($_POST['loginButton']))) {
                header("Location: ../homepage.html");
                //Se non esiste loginButton ci reindirizza alla pagina principale quindi
                //funziona solo se accediamo tramite loginButton
            }
            else{
                $email = $_POST['inputEmail'];
                $q1="select * from utente where email= $1";
                $result=pg_query_params($dbconn,$q1,array($email));
                if(!($line=pg_fetch_array($result,null,PGSQL_ASSOC))){
                    echo"<h1>Sorry , Non sei registrato </h1>
                    <a href=../registrazione/index.html> Clicca qua per registrarti </a>";
                }
                else{
                    $password = md5($_POST['inputPassword']);
                    $q2="select * from utente where email= $1 and pass=$2";
                    $result=pg_query_params($dbconn, $q2, array($email,$password));
                    if(!$line=pg_fetch_array($result,null,PGSQL_ASSOC)) {
                        echo "<h1>Password Errata </h1>";
                        echo "<a href=login.html> Clicca qua per accedere </a>";

                    }
                    else{
                        $utente = $line['nome'];
                        header("Location: ./redirect.php?username=$utente");



                    }
                    


                }
            }



            
        ?>
    </body>
</html>



