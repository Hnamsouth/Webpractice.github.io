var dsteam = [];
var k = [];
var dsT;
var getdsT;
var arrdsT = [];

function myfunction() {

    var fullname = document.getElementById('fullname').value;
    var teampick = document.getElementById('teampick').value;
    // console.log(fullname);
    let boolen = true;
    if (fullname.length == "") {
        boolen = false;
        alert('Vui long nhap ho ten')
    } else if (fullname.trim().length < 6) {
        boolen = false;
        alert('nhap day du ho ten')
    } else if (fullname.length > 50) {
        boolen = false;
        alert('nhap qua dai')
    }
    if (teampick.length == "") {
        boolen = false;
        alert('Vui long chon Team ')
    } else if (teampick > 5 || teampick < 1) {
        boolen = false;
        alert('Vui long chon team tu 1-5')
    }
    if (boolen) {
        var sv = {
            fn: fullname,
            tp: teampick
        }
        dsteam.push(sv);
        let bd = biendem(teampick);
        // console.log(sv);
        let i = 0;
        while (i < 5) {
            let test = document.getElementById('t' + teampick + i);
            console.log(test);
            if (test == null) {
                dsT = localStorage.setItem('team' + teampick + i, JSON.stringify(sv));
                getdsT = localStorage.getItem('team' + teampick + i);
                arrdsT[teampick] = JSON.parse(getdsT) // chuyen cac gtri trong team1 thanh 1 mang
                render(i);
                break;
            }
            i++;
        }

        // console.log(arrdsT[teampick])
        let kt = ktr(teampick);
        // console.log(ks);
        if (kt) {
            k[teampick + i] = document.getElementById("team" + teampick).innerHTML += render(i);
        } else {
            localStorage.removeItem('team' + teampick + 5);
            alert('Team day day. Vui long chon team khac')
        }

    }
}

function biendem(teampick) {
    let bd;
    if (teampick == 1) { bd = bd1 } else if (teampick == 2) { bd = bd2 } else if (teampick == 3) { bd = bd3 } else if (teampick == 4) { bd = bd4 } else if (teampick == 5) { bd = bd5 }
    return bd;
}
// ktr tung ptu trong mang team__ ko co thi gan nguoc lai bo qua
function render(i) {
    var kq;
    var test = document.querySelectorAll("tr td");
    // neu teampeak bang 1 thi chuyen den tr1
    dsteam.forEach(elm => {
        let bd = biendem(elm.tp) - 1;
        let bdem = biendem(elm.tp);
        kq = `<td id="t${elm.tp+i}">${(elm.fn)} 
        <button class="ip-btn btn" type="button" onclick="Dlet('team${elm.tp+i}',${elm.tp+i},${elm.tp})">Delete</button></td>`
    });
    return kq;
}
var bd1 = 0;
bd2 = 0;
bd3 = 0;
bd4 = 0;
bd5 = 0;

function ktr(tp) {
    let k = true;
    if (tp == 1) { if (bd1 < 5) { bd1++ } else { return false; } } else if (tp == 2) { if (bd2 < 5) { bd2++ } else { return false; } } else if (tp == 3) { if (bd3 < 5) { bd3++ } else { return false; } } else if (tp == 4) { if (bd4 < 5) { bd4++ } else { return false; } } else if (tp == 5) { if (bd5 < 5) { bd5++ } else { return false; } }
    return true;
}

function Dlet(kw, stt, teampick) {
    // console.log(teampick);
    if (teampick == 1) { bd1--; } else if (teampick == 2) { bd2--; } else if (teampick == 3) { bd3--; } else if (teampick == 4) { bd4--; } else if (teampick == 5) { bd5--; }
    k[stt] = document.getElementById("t" + stt);
    k[stt].remove();
    localStorage.removeItem(kw);
}