<?php
if(!empty($_POST["send"])) {
	$name = $_POST["userName"];
	$email = $_POST["userEmail"];
	$subject = $_POST["subject"];
	$content = $_POST["content"];

	$toEmail = "admin@justit-training.co.uk";

	$headers = "From: " . $name . "<". $email .">\r\n";
    
    // Always set content-type when sending HTML email
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // More headers
    $headers .= "From: <". $email .">" . "\r\n"; 
       ini_set("SMTP","mail.justit-training.co.uk");
       ini_set("smtp_port","25");
       ini_set("sendmail_from",$email);
    
    
	if(mail($toEmail, $subject, $content, $headers)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "contact-form.php";
?>