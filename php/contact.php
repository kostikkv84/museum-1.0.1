<?php

//проверяем значения полученые при проверке скриптом формы
if (trim($_POST['valTrFal'])!='valTrFal_true') {
	echo 'fasle';
}
else {
	    
		$txtname = trim($_POST['txtname']);

		$txtNameValue = trim($_POST['name_class_value']);

		$txtemail = trim($_POST['txtemail']);

		$txtphone = trim($_POST['txtphone']);

		$txtmessage = trim($_POST['txtmessage']);
		
		$txtorder= trim($_POST['txtorder']);

		// от кого
		$fromMail = 'site.org';
		$fromName = 'site.org';

		// Сюда введите Ваш email
		$emailTo = 'koskv@list.ru';

		$subject = 'Заявка с сайта';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Заявка с \n\nИмя: $txtname\nE-mail: $txtemail\nТелефон: $txtphone\nЧто заказали: $txtorder";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


		echo 'ok';
}
?>
