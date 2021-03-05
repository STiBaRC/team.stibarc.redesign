var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  /*scrollFunction()*/
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("na").style.top = "0";
  } else {
    document.getElementById("na").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

/*function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("na").style.backgroundColor = "#2c63a5";
    document.getElementById("na").style.boxShadow = "0px 5px 20px rgba(40, 40, 40, .3)";
  } else {
    document.getElementById("na").style.backgroundColor = "transparent";
    document.getElementById("na").style.boxShadow = "none";
  }
}*/

window.onload = function () {
  document.getElementById("ico").onclick = function (evt) {
    bringMenu();
  }

  document.getElementById("exita1").onclick = function (evt) {
    outMenu();
  }
}

function bringMenu() {
  document.getElementById("dropdowns").style.display = "inline-block";
  document.getElementById("bod").style.filter = "blur(6px)";
  document.getElementById("va").style.filter = "blur(6px)";
  document.getElementById("fa").style.filter = "blur(6px)";
  setTimeout(function () {
    document.getElementById("dropdowns").style.backgroundColor = "rgba(0,0,0,0.5)";
    document.getElementById("mble").style.right = "0";
  }, 50);
}

function outMenu() {
    document.getElementById("va").style.filter = "blur(0)";
  document.getElementById("fa").style.filter = "blur(0)";
  document.getElementById("bod").style.filter = "blur(0)";
  document.getElementById("dropdowns").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("mble").style.right = "0";
  document.getElementById("mble").style.right = "-370px";
  setTimeout(function () {
    document.getElementById("dropdowns").style.display = "none";
  }, 150);
}