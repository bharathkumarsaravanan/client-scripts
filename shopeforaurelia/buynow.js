  var cl_buy_now = setInterval(function(){
    if(((window.CLabsgbVar || {}).generalProps || {}).uid){
        _cl.trackClick("Buy_now");
        clearInterval(cl_buy_now);
    }
  }, 1000);
