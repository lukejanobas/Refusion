<?php 
include('../functions/myfunctions.php');

if(isset($_SESSION['auth']))
{
    if($_SESSION['role_as'] != 1 )
    {
        redirect("../index.php", "You are not authorized to access this page." );
         
    }
}
else
{
    redirect("../login.php", "Log In to continue" );

}
?>
