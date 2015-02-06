<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html; charset=utf-8');

$txt[0]="hi";
$txt[1]="hi";
echo json_encode($txt);
?>