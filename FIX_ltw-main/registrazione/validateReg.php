<html>
    <head></head>

    <body>
        <?php
            $dbconn= pg_connect("host=localhost port=5432
            dbname=Login user=postgres password=password")
                or die('Could not connect : ' . pg_last_error());
            if(!(isset($_POST['registerButton']))) {
                header("Location: ../homepage.html");
            }
            else{
                //Controllo se l'utente è gia registrato
                $email = $_POST['inputEmail'];
                $q1="select * from utente where email= $1";
                $result=pg_query_params($dbconn,$q1,array($email));
                if($line=pg_fetch_array($result,null,PGSQL_ASSOC)){
                    echo"<h1>Mi dispiace, sei gia registrato </h1>
                    <a href=../login/index.html> Clicca qua per accedere </a>";
                }
                else{
                    $nome=$_POST['inputName'];
                    $cognome=$_POST['inputSurname'];
                    $password = md5($_POST['inputPassword']);
                    $q2="insert into utente values  ($1,$2,$3,$4)";
                    $data=pg_query_params($dbconn, $q2, array($email, $nome, $cognome,$password));
                    if($data) {
                        echo "<h1>Registrazione completa. 
                        Ini<ia ad usare il sito web<br/></h1>" ;
                        header("Location: ../homepage.html");
                        //echo "<a href =../Welcome.php?name=$nome> Premi qui
                        //</a> per iniziara ad utilizzare il sito  web";
                        


                    }
                }



            }
        ?>
    </body>
</html>



