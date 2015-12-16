<?php

// Формирователь меню 
$menu = @file($rubric1_menu);
$lines = count($menu);
for ($i = 0; $i < $lines; $i++) 
{
list($menu_link,$menu_name,$menu_title)=explode("::", $menu[$i]);
if($page == rub1_part1 and $i == 0) {$refcolor = "style='color:#cc0000'";} 
elseif($page == rub1_part2 and $i == 1) {$refcolor = "style='color:#cc0000'";} 
elseif($page == rub1_part3 and $i == 2) {$refcolor = "style='color:#cc0000'";} 
else {$refcolor = "";}
$rubric1.="<li><a ".$refcolor." title='".$menu_title."' href='".$turl."/".$menu_link.".html"."'>".$menu_name."</a></li>";
}

?>
