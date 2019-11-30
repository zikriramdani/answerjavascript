// Sample Case
var textSample = 'Sample Case';
var textNext = 'Next Case';

// Sample Vowel
function sampleVowel(str) {
  	return (str.match(/[aaee]/ig)||[]);
}
function sampleConsonant(str) {
  	return (str.match(/[clmpss]/ig)||[]);
}

// Next Case
function nextVowel(str) {
  	return (str.match(/[aee]/ig)||[]);
}
function nextConsonant(str) {
  	return (str.match(/[cnstx]/ig)||[]);
}

// Urutkan Abjad
function urutkanAbjad(str) {
  return str.toString().split('').sort().join('');
}

document.write('<h3>Sample Case</h3>');
document.write('Vowel Characters = ', sampleVowel(urutkanAbjad(textSample)));
document.write('<br/>');
document.write('Consonant Characters = ', sampleConsonant(urutkanAbjad(textSample)));
document.write('<br/><br/>');
document.write('<h3>Next Case</h3>');
document.write('Vowel Characters = ', nextVowel(urutkanAbjad(textNext)));
document.write('<br/>');
document.write('Consonant Characters = ', nextConsonant(urutkanAbjad(textNext)));
document.write('<br/><br/>');

// let convert = (str) => {
//   return str.split('').reduce((a, c) => a + (/[aaee]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
// }

// document.write('Consonant Characters = ', convert("Sample Case"));



