
  var dw = document.getElementById('dw');

  

  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

  dw.setAttribute("href", image);



  var imgName = cfg.title.replace(/ /g,'_').toLowerCase();



  dw.setAttribute("download", imgName + '.png');
  

};