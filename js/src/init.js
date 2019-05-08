var Mockup = function(options){
  "use strict";

  var cfg = Object.assign({
    width:950,
    height:950,
    margin: 30,
    gap:24,
    inputHeight:30,
    title: 'Mockup',
    separator: ',',
    fontSize: 12,
    fontSizeTitle: 30,
    list:[]
  },options);

  var canvas = document.getElementById('the-canvas'),
    ctx = canvas.getContext('2d');

  var width = cfg.width,
    height = cfg.height,
    margin = cfg.margin,
    labelHeight = 2 * cfg.fontSize,
    inputHeight = cfg.inputHeight;

  canvas.width = width;
  canvas.height = height;

  var fillColor = '#000',
    strokeColor = '#000',
    placeColor = '#BBB';

  ctx.fillStyle = '#F2F2F2';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;  
  ctx.font = cfg.fontSizeTitle + 'px Comic Sans MS';