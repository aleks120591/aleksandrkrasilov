// -------------------------------------------------------------------
// ������ ��������� ������ ������ element 
// -------------------------------------------------------------------
function preventSelection(element){  
  var preventSelection = false;
  function addHandler(element, event, handler){
    if (element.attachEvent) element.attachEvent('on' + event, handler);
    else if (element.addEventListener) element.addEventListener(event, handler, false); 
  }

  function removeSelection()
  {
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection && document.selection.clear) document.selection.clear();
  }

  function killCtrlA(event)
  {
    var event = event || window.event;
    var sender = event.target || event.srcElement;

    if (sender.tagName.match(/INPUT|TEXTAREA/i)) return;
    var key = event.keyCode || event.which;

    if (event.ctrlKey && key == 'A'.charCodeAt(0))
    // 'A'.charCodeAt(0) ����� �������� �� 65
    {
      removeSelection();
      if (event.preventDefault) event.preventDefault();
      else event.returnValue = false;
    }
  }

  // �� ���� �������� ����� ������
  addHandler(element, 'mousemove', function(){
  if(preventSelection) removeSelection();
  });

  addHandler(element, 'mousedown', function(event){
  var event = event || window.event;
  var sender = event.target || event.srcElement;
  preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
  });

  // ����� dblclick
  // ���� ������ ������� �� �� ������� dblclick, �����  ��������
  // ��������� ��������� ������ � ��������� ���������

  addHandler(element, 'mouseup', function(){
  if (preventSelection) removeSelection();
  preventSelection = false;
  });

  // ����� ctrl+A
  // ������ ����� ��� � �� ����, � ���� �� ���� ����������
  // ��� � ������ ��� �� ����� ������������� ������� �����
  // ������ ���� ��� � �� document, � �� �� �������

  addHandler(element, 'keydown', killCtrlA);
  addHandler(element, 'keyup', killCtrlA);
}

