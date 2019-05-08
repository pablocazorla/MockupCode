
ctx.beginPath();
ctx.rect(0, 0, width, height);
ctx.closePath();
ctx.fill();
ctx.stroke();

var titleHeight = cfg.fontSizeTitle * 2

ctx.fillStyle = fillColor;
ctx.fillText(cfg.title, x, y + (titleHeight * 3 / 4));

y += titleHeight;

ctx.font = cfg.fontSize + 'px Comic Sans MS';

cfg.list.forEach(function (str) {
  Element(str);
});