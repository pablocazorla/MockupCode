var sep = cfg.separator;
var gap = cfg.gap;

var x = margin,
  y = margin;

var col_1 = Math.round((width - margin - (margin - gap)) / 12);


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

var drawRect = function (x, y, w, h) {
  ctx.save();
  ctx.fillStyle = '#FFF';
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

var drawBtn = function (x, y, w, h) {
  ctx.save();
  ctx.fillStyle = '#DDD';
  ctx.strokeStyle = '#999';
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

var circleWidth = 6;

var drawCircle = function (x, y, r) {
  var r = r || circleWidth;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
};

var triangWidth = 16;

var drawTriang = function (x, y, isUp, w) {

  var w = w || triangWidth;

  var up = isUp ? -1 : 1,
    h = w / 2;

  var y = y + (isUp ? h : 0);


  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + h, y + (h * up));
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
};

var maxY = 0;

var Element = function (str) {
  var arr = str.split(sep);

  var type = arr[0] === '' ? 'input' : arr[0],
    label = arr[1] === '' ? null : arr[1],
    col = arr[2] ? colStep['col' + arr[2]] : colStep['col4'],
    placeholder = arr[3] ? arr[3] : 'Some text';

  var maxX = x + col + gap;

  if (maxX > (width)) {
    x = margin;
    y = maxY;
    maxY = 0;
  }

  var cy = y;

  ctx.fillStyle = fillColor;

  switch (type) {
    case 'input':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      ctx.fillStyle = placeColor;
      ctx.fillText(placeholder, x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'textarea':
      var textareaHeight = 3 * inputHeight;
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, textareaHeight);
      ctx.fillStyle = placeColor;
      ctx.fillText(placeholder, x+10, cy + (labelHeight * 4/5));
      var my = cy + textareaHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'select':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      drawTriang(x+col-(1.5*triangWidth),cy + (inputHeight/2 - triangWidth/4));
      ctx.fillStyle = placeColor;
      ctx.fillText('Select...', x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'number':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      var tw = 10;
      var delta = inputHeight/2 + 2;
      drawTriang(x+col-(1.1*triangWidth),cy + delta - (tw/1.4),true,tw);
      drawTriang(x+col-(1.1*triangWidth),cy + delta,false,tw);
      ctx.fillStyle = placeColor;
      ctx.fillText('0', x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'checkbox':
      cy = y + labelHeight;

      var chw = 16;
      var drawChk = function(lab){
        drawRect(x, cy + (inputHeight-chw)/2, chw, chw);

        ctx.fillText(lab, x + 10 +chw, cy + (labelHeight * 5/6));

        var my = cy + inputHeight + gap;
        if (my > maxY) {
          maxY = my;
        }
        cy += inputHeight;
      };

      var arrLabel = label.split('|');

      arrLabel.forEach(drawChk);
      
      
      break;
    case 'radio':
      cy = y + labelHeight;

      
      var drawChk = function(lab,i){
        drawCircle(x, cy + (inputHeight)/2 + circleWidth/6);
        if(i === 0){
          drawCircle(x, cy + (inputHeight)/2 + circleWidth/6,circleWidth/3);
        }

        ctx.fillText(lab, x + circleWidth*3, cy + (labelHeight * 5/6));

        var my = cy + inputHeight + gap;
        if (my > maxY) {
          maxY = my;
        }
        cy += inputHeight;
      };

      var arrLabel = label.split('|');

      arrLabel.forEach(drawChk);
      
      
      break;
    case 'phone':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      ctx.fillStyle = placeColor;
      ctx.fillText('+00 000-000-0000', x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'email':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      ctx.fillStyle = placeColor;
      ctx.fillText('miemail@mail.com', x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'text':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'upload':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      var wBtn = 55;
      drawBtn(x, cy, wBtn, inputHeight);
      ctx.fillText('Subir', x+10, cy + (labelHeight * 4/5));
      ctx.fillText('o arrastra archivos aquí', x+10+wBtn, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'button':
      cy = y;
      
      var wBtn = ctx.measureText(label).width + 20;
      drawBtn(x, y, wBtn, inputHeight);
      ctx.fillText(label, x+10, cy + (labelHeight * 4/5));

      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'buttonSec':
      cy = y;
      
      var wBtn = ctx.measureText(label).width + 20;
      drawRect(x, y, wBtn, inputHeight);
      ctx.fillText(label, x+10, cy + (labelHeight * 4/5));

      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'date':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      ctx.fillStyle = placeColor;
      ctx.fillText('DD/MM/AAAA', x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'money':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      ctx.fillStyle = placeColor;
      ctx.fillText('0 €', x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
    case 'password':
      cy = y + labelHeight;
      if (label) {
        ctx.fillText(label + ':', x, cy - (labelHeight / 4));
      }
      drawRect(x, cy, col, inputHeight);
      ctx.fillStyle = placeColor;
      ctx.fillText('******', x+10, cy + (labelHeight * 4/5));
      var my = cy + inputHeight + gap;
      if (my > maxY) {
        maxY = my;
      }
      break;
   
    default:
      break;
  }

  x += col + gap;
};