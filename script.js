var i = 0;
var txt = 'MAŁE WYMIARY - WIELKIE MOŻLIWOŚCI';
var speed = 50;

function autotekst() {
  if (i < txt.length) {
    document.getElementById("tekst").innerHTML += txt.charAt(i);
    i++;
    setTimeout(autotekst, speed);
  }
}

window.onload = autotekst;
