var genap10 = "";
var ganjil10 = "";

var genap5 = "";
var ganjil5 = "";

var i;

// Start Genap 10
for (i = 1; i < 10; i = i + 2) {
    genap10 += i;
}

// Start Ganjil 10
for (i = 2; i < 12; i = i + 2) {
    ganjil10 += i;
}

// Start Genap 5
for (i = 1; i < 7; i = i + 2) {
    genap5 += i;
}

// Start Ganjil 5
for (i = 2; i < 6; i = i + 2) {
    ganjil5 += i;
}

document.write('Genap 10 = ', genap10);
document.write('<br/>');
document.write('Ganjil 10 = ', ganjil10);
document.write('<br/><br/>');
document.write('Genap 5 = ', genap5);
document.write('<br/>');
document.write('Ganjil 5 = ', ganjil5);
document.write('<br/><br/>');