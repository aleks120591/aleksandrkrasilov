<?php

// Строка для уменьшения уровня предупреждений сервера Denwer
Error_Reporting(E_ALL & ~E_NOTICE);

// строки необходимые для выполнения любых операций по методам Get и Post
if(isset($_GET)) {foreach ($_GET as $key=>$val) {$$key=$val;}}
if(isset($_POST)){foreach ($_POST as $key=>$val){$$key=$val;}}

include "php/setings.php";

// загрузка в переменные, в виде строк, содержимого страниц и меню
$title = "Титул страницы";
$meta = file_get_contents ("templates/pages/meta/rub1_part1_meta.html");
$text = file_get_contents ("templates/pages/rub1_part1.html");
$titlepage = "Заголовок страницы";
include "php/menus.php";
//$rubric1 = "Меню рубрики 1";
$rubric2 = "Меню рубрики 2";
$rubric3 = "Меню рубрики 3"; 

// функция по перемещению и замене строк в частях шаблона на содержимое переменных 
function repl ($path)
{
// определение глобальных переменных
global $title,$meta,$titlepage,$text,$rubric1,$rubric2,$rubric3;

// чтение файла в виде строки в переменную $temp
$temp = file_get_contents($path);

// перемещение участков в строке загруженной в $temp 
$temp = str_replace ( "%title%", $title, $temp );
$temp = str_replace ( "%meta%", $meta, $temp );
$temp = str_replace ( "%titlepage%", $titlepage, $temp );
$temp = str_replace ( "%text%", $text, $temp );
$temp = str_replace ( "%rubric1%", $rubric1, $temp );
$temp = str_replace ( "%rubric2%", $rubric2, $temp );
$temp = str_replace ( "%rubric3%", $rubric3, $temp );

// вывод измененной строки содержащейся в переменной $temp
echo ("$temp");
}

// поочередный запуск в работу функции repl для файлов top.html body.html bottom.html

repl ("templates/top.html");
repl ("templates/body.html");
repl ("templates/bottom.html");

exit;

?> 
