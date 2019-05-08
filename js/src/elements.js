var sep = cfg.separator;
var gap = cfg.gap;

var x = margin,
  y = margin;

var col_1 = Math.round((width - (2 * margin))/12);


var colStep = {
  'col1': col_1 - gap,
  'col2': col_1 * 2 - gap,
  'col3': col_1 * 3 - gap,
  'col4': col_1 * 4 - gap,
  'col5': col_1 * 5 - gap,
  'col6': col_1 * 6 - gap,
  'col7': col_1 * 7 - gap,
  'col8': col_1 * 8 - gap,
  'col9': col_1 * 9 - gap,
  'col10': col_1 * 10 - gap,
  'col11': col_1 * 11 - gap,
  'col12': col_1 * 12 - gap
};

var Element = function(str){
  var arr = str.split(sep);

  var type = arr[0] === '' ? 'input':arr[0],
    label = arr[1],
    col = arr[2] ? 'col'+arr[2] : 'col3';

  switch (type) {
    case 'input':
      
      break;
  
    default:
      break;
  }
};