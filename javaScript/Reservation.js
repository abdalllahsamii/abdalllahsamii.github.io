let ll = document.getElementById("ll");
let s = document.getElementById("s");
let l = document.getElementById("l32");
let k = document.getElementById("l31");

document.getElementById("l31").onclick = function () {
    s.style.cssText = "display: block;";
    ll.style.cssText = "display: none;";
    k.style.cssText = "background-color: rgba(9, 33, 64, .75);";
    l.style.cssText = "background-color: transparent"
    }
    document.getElementById("l32").onclick = function () {
    l.style.cssText = "background-color: rgba(9, 33, 64, .75);";
    k.style.cssText = "background-color: transparent;";
    s.style.cssText = "display: none;";
    ll.style.cssText = "display: block;";
    }