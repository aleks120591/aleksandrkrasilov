<html> 
<head> 
<meta charset="utf-8">
<title>PHP и HTML</title> 
<style type="text/css">
	@import url("../style/header.css");
	@import url("../style/menu.css");
	@import url("../style/rest.css");
	@import url("../style/kod.css");
</style>
</head> 
<body> 
<!-- шапка -->  
<div id="header">
	<div id="fixedBox">
	  <h1 id="h1"><font>WEB - программирование</font></h1>
		<h3 id="h1">Автор: Красилов Александр Александрович</h3>
	</div>
</div>   
<!-- Меню -->  
<div id="left">	
<ul class="secondary-menu">		
<li><a href="index.html">Главная</a></li>		
<li><a href=" ">HTML</a></li>	
<li><a href=" ">PHP</a>		
<ul class="sub-menu">			
<li><a href=" ">Урок 1.1</a>				
<ul class="sub-menu">					
<li><a href="/PhpHtml/index.php">PHP и HTML</a>
</li>					
<li><a href=" ">Раздел 1.1.2</a></li>				
</ul>			
</li>			
<li><a href=" ">Раздел 1.2</a></li>			
<li><a href=" ">Раздел 1.3</a></li>		
</ul>			
</li>		
<li><a href=" ">MySQL</a></li>	
<li><a href=" ">Справочник</a>		
<ul class="sub-menu">			
<li><a href=" ">HTML</a>				
<ul class="sub-menu">					
<li><a href="/info/index.php">Основные тэги</a></li>
<li><a href=" ">Раздел 1.1.2</a></li>				
</ul>			
</li>			
<li><a href=" ">PHP</a>				
<ul class="sub-menu">					
<li><a href="/info/index.php">Основные тэги</a></li>
<li><a href=" ">Раздел 1.1.2</a></li>				
</ul>			
</li>			
<li><a href=" ">MySQL</a>				
<ul class="sub-menu">					
<li><a href="/info/index.php">Основные тэги</a></li>		
<li><a href=" ">Раздел 1.1.2</a></li>				
</ul>			
</li>		
</ul>			
</li>		
</ul>
</div>   
<!-- правый вертикальный -->  
<div id="right">

</div>  
<!-- центральный блок (для динамического контента)-->  
<div id="middle">
<h1>PHP и HTML</h1>
С PHP легко выводить текст; фактически, обработка текста – одна из 
сильных сторон PHP.
<br/>
<br/><h4>Вывод текста</h4>
<p class="p">Вы хотите иметь возможность выводить текст на экран часто и без проблем.  PHP  позволит  вам  делать  это,  но  только  если,  создавая  такой 
57программный код, вы будете использовать специальный синтаксис PHP. 
Иначе  броузер  сочтет  все  это  HTML-кодом  и  выведет  PHP-код  прямо 
в  окно  броузера.  Результат  будет  выглядеть  как  смесь  текста  и  программного кода. Это вряд ли обрадует пользователей! Вы можете писать 
PHP-код в любом текстовом редакторе, который вам нравится, включая 
Блокнот, DevPHP или Notepad++.
</p>
<p class="p">Наши примеры показывают, как схожи разметка HTML и код PHP, 
и что вы можете сделать, чтобы лучше различать их.
</p>
<br/>
<br/>Пример 3.1. Все, что нужно для начала работы с PHP, – это простой HTML-
документ

<p class="ex">
&lt;html&gt;<br/>
&nbsp;   &lt;head&gt;<br/>
&nbsp;&nbsp;        &lt;title&gt;Hello World&lt;/title&gt;<br/>
&nbsp;    &lt;/head&gt;<br/>
&nbsp;    &lt;body&gt;<br/>
&nbsp;&nbsp;        &lt;p&gt;Определенно, я хочу что-то сказать.&lt;/p&gt;<br/>
&nbsp;    &lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</p>
<h3><a href="../PhpHtml/html.html">Пример работы HTML</a></h3>
<p class="p">Здесь нет ничего особенного; это простейший файл с кодом HTML. Од-
нако вы можете внедрить PHP-код прямо в этот файл; например, попробуем воспользоваться командой языка PHP echo, которая выводит 
некоторый текст, как показано в примере 3.2.
</p>
<p class="p">Пример 3.2. Некорректный способ добавления PHP-кода в HTML-файл</p>
<p class="ex">
&lt;html&gt;<br/>
&nbsp;   &lt;head&gt;<br/>
&nbsp;&nbsp;        &lt;title&gt;Hello World&lt;/title&gt;<br/>
&nbsp;    &lt;/head&gt;<br/>
&nbsp;    &lt;body&gt;<br/>
&nbsp;&nbsp;         &lt;?php echo("&lt;p&gt;Теперь мне есть что сказать.&lt;/p&gt;");?&gt;<br/>
&nbsp;    &lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</p>
<h3><a href="../PhpHtml/php.php">Пример работы PHP</a></h3>
</div>  
      
<!-- футер -->  
<div id="footer">

</div>  
</body>
</html>