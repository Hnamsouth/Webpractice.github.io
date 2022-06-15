var dsteam = [];
var team = [0, 0, 0, 0, 0];
const tdmaker = (elm, i) => {
    document.getElementById('team' + elm.tp).innerHTML += `<td id="t${elm.tp+i}"><span class="slt${elm.tp}">${(elm.fn)}</span>
    <button type="button" onclick="Dlet('team${elm.tp+i}',${elm.tp+i},${elm.tp})"><span>Delete</span></button></td>`
}

for (let i = 1; i <= 6; i++) {
    for (let j = 0; j < 6; j++) {
        let s = localStorage.getItem('team' + i + j);
        if (s) {
            team[i - 1]++;
            let f = JSON.parse(localStorage.getItem('team' + i + j));
            tdmaker(f, j);
        }
    }
}
// var count = document.querySelectorAll('td');
// console.log(count);
function myfunction() {

    var fullname = document.getElementById('fullname').value;
    var teampick = document.getElementById('teampick').value;
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
        let i = 0;
        while (i < 6) {
            let test = document.getElementById('t' + teampick + i);
            // console.log(test);
            if (test == null) {
                let dsT = localStorage.setItem('team' + teampick + i, JSON.stringify(sv));
                let getdsT = localStorage.getItem('team' + teampick + i);
                let arrdsT = [];
                arrdsT[teampick] = JSON.parse(getdsT) // chuyen cac gtri trong team1 thanh 1 mang
                render(i);
                break;
            }
            i++;
        }
        // ktr neu team hon 5 thi thong bao  team full
        let kt = ktr(teampick);
        if (kt) {
            let k = [];
            k[teampick + i] = document.getElementById("team" + teampick).innerHTML += render(i);
        } else {
            localStorage.removeItem('team' + teampick + 5);
            alert('Team day day. Vui long chon team khac')
        }

    }
}

function render(i) {
    var kq;
    var test = document.querySelectorAll("tr td");
    dsteam.forEach(elm => {
        kq = `<td id="t${elm.tp+i}"><span class="slt${elm.tp}">${(elm.fn)}</span>
        <button type="button" onclick="Dlet('team${elm.tp+i}',${elm.tp+i},${elm.tp})"><span>Delete</span></button></td>`
    });
    return kq;
}



function ktr(tp) {
    if (tp == 1) {
        if (team[0] < 6) { team[0]++ } else { return false; }
    } else if (tp == 2) {
        if (team[1] < 6) { team[1]++ } else { return false; }
    } else if (tp == 3) {
        if (team[2] < 6) { team[2]++ } else { return false; }
    } else if (tp == 4) {
        if (team[3] < 6) { team[3]++ } else { return false; }
    } else if (tp == 5) {
        if (team[4] < 6) { team[4]++ } else { return false; }
    }
    return true;
}

function Dlet(kw, stt, teampick) {
    if (teampick == 1) { team[0]--; } else if (teampick == 2) { team[1]--; } else if (teampick == 3) { team[2]--; } else if (teampick == 4) { team[3]--; } else if (teampick == 5) { team[4]--; }
    let k = [];
    k[stt] = document.getElementById("t" + stt);
    k[stt].remove();
    localStorage.removeItem(kw);
}