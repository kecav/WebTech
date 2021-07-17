let x;
let sol;

function clearSol() {
    document.getElementById("display").value = "";
    document.getElementById("sec-display").innerHTML = "";
}

function clearLast() {
    let prev = document.getElementById("display").value
    prev = prev.slice(0, prev.length - 1);
    document.getElementById("display").value = prev;
}

function concat(x) {
    document.getElementById("display").value += x;
}

function solution() {
    document.getElementById("sec-display").innerHTML = document.getElementById("display").value;
    sol = eval(document.getElementById("display").value);
    document.getElementById("display").value = sol;
}