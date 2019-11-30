function isPrime(n) {
    if (!(n % 2) || !(n % 3)) return 0;
 
    var p = 1;
    while (p * p < n) {
        if (n % (p += 4) == 0 || n % (p += 2) == 0) {
            return false
        }
    }
    return true
}
 
function isEmirp(n) {
    var s = n.toString();
    var r = s.split("").reverse().join("");
    return r != n && isPrime(n) && isPrime(r);
}

// Urutkan Abjad
// function urutkanAbjad(str) {
//   return str.toString().split('').sort().join('');
// }
 

// 5
var one = document.getElementById("5");
var two = document.getElementById("15");

var c = 0;
var x = 11;
var str;

while (c < 79) {
    if (isEmirp(x)) {
        c += 1;

        // 5
        if (c == 1) {
            str = "<h3>5</h3>" + x + " " + "and" + " " + x + " " + "are Match";
        }
        else if (c < 4) {
            str += "<br/>" + x + " " + "and" + " " + x + " " + "are Match";
        }
        else if (c == 4) {
            one.innerHTML = str + "<br/>" + x + " " + "and" + " " + x + " " + "are Match<br/><br/>";
        }

        // 15
        else if (c == 1) {
            str = "<h3>15</h3>" + x + " " + "and" + " " + x + " " + "are Match";
        }
        else if (c < 10) {
            str += "<br/>" + x + " " + "and" + " " + x + " " + "are Match";
        }
        else if (c == 10) {
            two.innerHTML = str + "<br/>" + x + " " + "and" + " " + x + " " + "are Match<br/><br/>";
        }
    }
    x += 2;
}
