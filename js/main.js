// Игра Жизнь
// -------------------------------------------------
// Пространство имён внутри глобального объекта Life
// Life - единственное глобальное имя в этом скрипте
// ------------------------------------------------
var Life = {};
// -------------------------------------------------
// Константы
// ---------
Life.nRow = 30; // Число строк в игровой матрице
Life.nCol = 45; // Число столбцов в игровой матрице
Life.emptyCell = ""; // Пустая клетка
Life.lifeCell = "#f00"; // Живая клетка (цвет Жизни)
Life.nTick = 50; // Интервал времени между поколениями
// Представление на экране ===========================================
// ---------------------------------------------------
// Построение матрицы на экране
// ---------------------------------------------------
Life.putM = function(){
var str = "<table id='mLife' cellspacing=0 cellpadding=0>";
for(var i=0; i<Life.nRow; i++){
str += "<tr>";
for(var j=0; j<Life.nCol; j++)
str += "<td onclick='Life.click("+i+","+j+")' id='"+Life.getId(i,j)+"'>&nbsp;</td>";
str += "</tr>";
}
str += "</table>";
document.write(str);
};
// Математика ===================================
// ----------
// Первый список ячеек
// Здесь будем хранить живые клетки
// -------------------
Life.list1 = {};
//
// Второй список ячеек (рабочий)
// Здесь будем хранить живые клетки и их соседей
// -------------------
Life.list2 = {};
// Формат хранения клеток в списках:
// id:значение
// Значение равно 100 для живой клетки, 0 для пустой.
// Во втором списке к значению клетки (к 0 или к 100) будем добавлять
// количество ее соседей.
// Имя клетки совпадает с её идентификатором id в TABLE и
// строится по формуле сROW_COL
// Здесь:
// c - латинская буква (идентификатор должен начинаться с буквы)
// ROW - число, номер строки
// _ - знак подчеркивания (разделитель ROW и COL)
// COL - число, номер столбца
// Идентификатор строит функция id = Life.getId(row,col) - см. ниже
// ----------------------------------------------------
// Вернуть/установить стиль background-color клетки (элемент TD)
// ------------------------------------------------------
Life.CellStatus = function(row, col, status){
var st = document.getElementById(Life.getId(row, col)).style;
if (arguments.length > 2) st.backgroundColor = status;
return st.backgroundColor;
};
//------------------------------------------------------
// Изменить статус клетки.
// Для живой клетки:
// * сбросить стиль background-color (Life.emptyCell)
// * удалить клетку из Life.list1
// Для пустой клетки:
// * установить стиль background-color (Life.lifeCell)
// * добавить клетку в Life.list1
// -----------------------------------------------------
Life.changeCellStatus = function(row, col){
var id = Life.getId(row, col);
var st = document.getElementById(id).style;
if (st.backgroundColor)
{
st.backgroundColor = Life.emptyCell; // сбросить фон
delete Life.list1[id]; // удалить клетку из Life.list1
}
else
{
st.backgroundColor = Life.lifeCell; // установить фон
Life.list1[id] = 100; // добавить клетку в Life.list1
}
};
// --------------------------------------------------
// Обработка нажатия кнопки Старт/Стоп
// --------------------------------------------------
Life.start = true; // На кнопке Старт/Стоп надпись Старт?
Life.timer; // Таймер
Life.time; // Счетчик поколений
Life.startStop = function()
{
Life.start = !Life.start;
document.getElementById("start").value = Life.start ? "Старт" : "Стоп";
if(Life.start) clearInterval(Life.timer); // остановить игру
else // запустить игру
{
Life.time = 0;
// Запускать смену поколений через каждые Life.nTick
Life.timer = setInterval(Life.generation, Life.nTick);
}
};
// ------------------------------------------------
// Построение следующего поколения
// Алгоритм описан Олегом Алферовым на сайте
// http://www.secoh.ru/msx/life-algorithm-r.html
// -----------------------------------------------
Life.generation = function()
{
// Копировать список 1 в список 2
for(var cell in Life.list1) Life.list2[cell] = Life.list1[cell];
// Соседи живых клеток заносятся в список 2 и их значения увеличиваются на 1.
// После выполнения этого шага каждая клетка в Life.list2 содержит
// количество ее живых соседей. (Для клеток, которые живы на текущем
// шаге, -- количество соседей плюс 100.)
for(var cell in Life.list1)
{
var list = Life.listNear(cell); // список соседей клетки cell
// Добавить в список Life.list2 те ячейки из list, которых там нет,
// если ячейка уже есть, увеличить ее значение (число соседей) на 1
for(var k in list) Life.list2[k] = Life.list2[k] ? (Life.list2[k]+1) : 1;
// Удалить ячейку из первого списка
delete Life.list1[cell];
}
// Работа со вторым списком (первый список сейчас пуст)
for(var cell in Life.list2)
{
// Преобразуем значения во втором списке:
// 3, 102, 103 заменить на 100 (живые клетки в следующем поколении)
// заменить на 0 в остальных случаях (погибшие клетки)
Life.list2[cell] = (Life.list2[cell] == 3 ||
Life.list2[cell] == 102 ||
Life.list2[cell] == 103) ? 100 : 0;
// Если 100, то добавить в первый список и покрасить на экране,
// в противном случае сбросить окраску.
var ob = Life.getRowCol(cell); // получить координаты клетки
if (Life.list2[cell] == 100)
{
Life.list1[cell] = 100;
Life.CellStatus(ob.row,ob.col,Life.lifeCell);
}
else Life.CellStatus(ob.row,ob.col,Life.emptyCell);
// Удалить элемент из второго списка.
delete Life.list2[cell];
}
// Поколение построено.
// Сейчас список Life.list2 пуст, а в списке Life.list1 собраны
// живые клетки. Все готово к построению следующего поколения.
// Вывести номер поколения на экран
document.getElementById("time").innerHTML = ++Life.time;
};
// ---------------------------------------------------
// Построение списка соседей данной клетки (8 клеток):
// 2 1 3
// 4 * 5 (схема соседей клетки *)
// 7 6 8
// --------------------------------------------------
Life.listNear = function(cell)
{
var list = {}; // здесь будем формировать список соседей клетки cell
var row, col; // здесь будем формировать координаты соседей
// Получить координаты для исходной клетки
var ob = Life.getRowCol(cell);
// Соседи в строке выше
row = ob.row-1;
if(row < 0) row = Life.nRow-1; // учитываем, что среда - тор
col = ob.col;
list[Life.getId(row, col)] = 1; // клетка 1 (по схеме соседей)
col = ob.col-1;
if(col < 0) col = Life.nCol-1; // учитываем, что среда - тор
list[Life.getId(row, col)] = 1; // клетка 2 (по схеме соседей)
col = ob.col+1;
if(col >= Life.nCol) col = 0; // учитываем, что среда - тор
list[Life.getId(row, col)] = 1; // клетка 3 (по схеме соседей)
// Соседи в той же строке
row = ob.row;
col = ob.col-1;
if(col < 0) col = Life.nCol-1; // учитываем, что среда - тор
list[Life.getId(row, col)] = 1; // клетка 4 (по схеме соседей)
col = ob.col+1;
if(col >= Life.nCol) col = 0; // учитываем, что среда - тор
list[Life.getId(row, col)] = 1; // клетка 5 (по схеме соседей)
// Соседи в строке ниже
row = ob.row+1;
if(row >= Life.nRow) row = 0 // учитываем, что среда - тор
col = ob.col;
list[Life.getId(row, col)] = 1; // клетка 6 (по схеме соседей)
col = ob.col-1;
if(col < 0) col = Life.nCol-1; // учитываем, что среда - тор
list[Life.getId(row, col)] = 1; // клетка 7 (по схеме соседей)
col = ob.col+1;
if(col >= Life.nCol) col = 0; // учитываем, что среда - тор
list[Life.getId(row, col)] = 1; // клетка 8 (по схеме соседей)
return list; // возвращаем список
}
// ---------------------------------------------
// Очистить среду
// ---------------------------------------------
Life.clear = function()
{
if(!Life.start) return;
// Каждой живой клетке присвоим статус "пустая"
// и удалим ее из списка Life.list1
for(var cell in Life.list1)
{
var ob = Life.getRowCol(cell);
Life.CellStatus(ob.row,ob.col,Life.emptyCell);
delete Life.list1[cell];
}
// Вывести номер поколения
Life.time = 0;
document.getElementById("time").innerHTML = Life.time;
};
// Обработка щелчка в матрице ========================================
//
Life.click = function(row, col)
{
if(!Life.start) return;
Life.changeCellStatus(row, col);
};
// Вспомогательные функции ===========================================
// ---------------------------------------------
// Вернуть координаты ячейки по ее идентификатору
// ---------------------------------------------
Life.getRowCol = function(id)
{
var ob = {};
var d = id.indexOf("_");
ob.row = parseInt(id.substring(1, d));
ob.col = parseInt(id.substring(d+1));
return ob;
};
// ----------------------------------------
// Вернуть идентификатор по координатам ячейки
// ---------------------------------------
Life.getId = function(row, col)
{
return "c"+row+"_"+col;
};