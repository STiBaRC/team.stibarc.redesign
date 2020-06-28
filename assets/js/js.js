var prevScrollpos = window.pageYOffset;
window.onscroll = function () { 
    scrollFunction() 
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("na").style.top = "0";
    } else {
      document.getElementById("na").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("na").style.backgroundColor = "#2c63a5";
    document.getElementById("na").style.boxShadow = "0px 5px 20px rgba(40, 40, 40, .3)";
  } else {
    document.getElementById("na").style.backgroundColor = "transparent";
    document.getElementById("na").style.boxShadow = "none";
  }
}


