<?php
header('Content-Type: application/json');

//ToDo:
// send confirmation email to sender
// send email to admin
// save to database
// return json


echo rand(1,100)%2==0 ? json_encode(['success' =>  true])  : json_encode(['success' =>  false, 'error' => 'Ups, coś poszło nie tak, spróbuj ponownie!']);