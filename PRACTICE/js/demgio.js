var bd;
var m = 10;
var s = 00;
var ts = 0;
var pumos = document.getElementsByClassName('pumos');

var time = document.getElementById('dn');
var Tstart = document.getElementById('Tstart');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
/*
function mss(x) {
    pumos[x].addEventListener("mousedown", function() {
        this.style.animation = "lightunder 0.1s 1";
    })
    pumos[x].addEventListener("mouseup", function() {
        this.style.animation = "none 0.1s 1 1s";

    })
}*/


start.addEventListener("mousedown", function() {
    this.style.animation = "lightunder 0.15s 1";
})
start.addEventListener("mouseup", function() {
    this.style.animation = "none 0.15s 1 1s";
})
document.getElementById('start').addEventListener("click", function() {
    bd = setInterval(cd, 10);
    if (m == 00 && s == 00) {
        alert('heeli');
        start.disabled = false;
    } else {
        start.disabled = true;
    }
});


function cd() {
    if (s == 00) {
        s = 60;
        m--;
    }
    s--;
    if (m == 0 && s == 0) {
        start.disabled = false;
        Tstart.innerHTML = 'Start';
        Tstart.style.fontSize = "13px";
        clearInterval(bd);
        m = 10;
        ts = 0;
    }
    s < 10 ? s = '0' + s : s;
    time.innerHTML = m + ":" + s;
    // 36 cd  60s 
    time.style.textShadow = `0 0 5px hsl(${ts+=0.6}, 100%, 50%),0 0 10px hsl(${ts}, 100%, 50%)`
    Tstart.style.textShadow = `0 0 5px hsl(${ts}, 100%, 50%)`;
}

stop.addEventListener("mousedown", function() {
    this.style.animation = "lightunder 0.15s 1";
})
stop.addEventListener("mouseup", function() {
    this.style.animation = "none 0.15s 1";
})
document.getElementById('stop').addEventListener("click", function() {
    clearInterval(bd);
    if (m >= 0 && s >= 0) {
        Tstart.style.fontSize = "9px";
        Tstart.innerHTML = 'Continue';
        start.disabled = false;
    }
})

reset.addEventListener("mousedown", function() {
    this.style.animation = "lightunder 0.15s 1";
})
reset.addEventListener("mouseup", function() {
    this.style.animation = "none 0.15s 1";
})
document.getElementById('reset').addEventListener("click", function() {
    clearInterval(bd);
    s = 00;
    m = 10;
    ts = 0;
    time.innerHTML = "10:00";
    Tstart.innerHTML = 'Start';
    Tstart.style.fontSize = "13px";
    start.disabled = false;
    time.style.textShadow = `0 0 5px hsl(${ts}, 100%, 50%),0 0 10px hsl(${ts}, 100%, 50%)`
    Tstart.style.textShadow = `0 0 5px hsl(${ts}, 100%, 50%)`;
})