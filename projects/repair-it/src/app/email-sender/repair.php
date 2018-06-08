<?php
 
header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_email = $request->from_email;
	$product = $request->product;
	$name = $request->name;
	$mobile = $request->mobile;
	$complaint = $request ->complaint;
	$to_email = $request ->to_email;
	$email = $request ->email;


	$contact = "<p><strong>Name :</strong> $name</p>
				<p><strong>Email :</strong> $email</p>
				<p><strong>Mobile :</strong> $mobile</p>";
	$content = "<p><strong>Product :</strong> $product</p>
			   <p><strong>Complaint :</strong> $complaint</p>";
 
	$website = 'Repair-it';
	$email_subject = "$website: Repair: $name";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	return $response_array;
} else {
	$response_array['status'] = 'error';
	return $response_array;
}
?>