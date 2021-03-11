function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle"){
    x.className += " responsive";
  }
  else {x.className = "navtoggle";}
}

  $(window).scroll(function() {
      if ($(this).scrollTop()>2000) {
          $('.index').fadeIn();
       }
      else {
        $('.index').fadeOut();
       }
   })
