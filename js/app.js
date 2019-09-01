// APP

var confluToMock = function (data) {
  var line = data.list.replace(/\n/g, '|'),
    arr = line.split('|'),
    list = [];
  arr.forEach(function (str) {
    var a = str.split('-'),
      label = a[0].trim(),
      t = a[1].split(','),
      col = t[1] ? t[1] : '4',
      b = t[0].trim().split(' '),
      type = b[0];
    label += b[1] ? ' *':'';
    type = type === 'text' ? 'input':type;
    type = type === 'file' ? 'upload':type;
    var s = type + ',' + label + ',' + col;
    list.push(s);
  });
  data.list = list;
 // console.log(list);
  return data;
}

var view = confluToMock(prices);



Mockup(view);