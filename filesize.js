(function($){

  $.fn.filesize = function (){
  
  var filelen = this.attr("size") || 0, filelength;
  if(filelen === 0 || filelen <1000){
    filelength = filelen+" B";
  }
  else if(filelen >=1000 && filelen <1000000 ){
    filelength = filelen/1000;
    filelength = filelength.toFixed(2) + " KB";
    
  }else if(filelen >=1000000 && filelen <1000000000 ){
    filelength = filelen/1000000;
    filelength = filelength.toFixed(2) + " MB";
    
  }
  else if(filelen >=1000000000 && filelen <1000000000000 ){
    filelength = filelen/1000000000;
    filelength = filelength.toFixed(2) + " GB";
    
  }else {
    filelength = filelen/1000000000000;
    filelength = filelength.toFixed(2) + " TB";
  }

  this.html(filelength);
}
})(jQuery);