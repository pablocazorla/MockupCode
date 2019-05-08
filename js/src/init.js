var Mockup = function(options){
  "use strict";

  var cfg = Object.assign({
    width:800,
    height:600,
    margin: 20,
    gap:24,
    inputHeight:30,
    title: 'Mockup',
    separator: '|',
    list:[]
  },options);

  var canvas = document.getElementById('the-canvas'),
    ctx = canvas.getContext('2d');

  var width = cfg.width,
    height = cfg.height,
    margin = cfg.margin;

  ctx.fillStyle = 'transparent';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;