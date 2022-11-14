function shuffleArray(compchoices) {
  for (let i = compchoices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [compchoices[i], compchoices[j]] = [compchoices[j], compchoices[i]];
  }
console.log(compchoices);
}
let compchoices = ['water', 'grass', 'fire']; 
shuffleArray(compchoices);













var body = document.getElementById('frame');

function red() {

if (compchoices[0] === "grass") {
alert(" YOU win!! the computer chose: " + compchoices[0]);
} else if (compchoices[0] === "water") {
alert(" YOU lose!! the computer chose: " + compchoices[0]);
} else {
alert(" IT'S  a draw, the compter chose " + compchoices[0] + " too ");
}
} 





function green() {

if (compchoices[0] === "grass") {
alert(" IT'S  a draw, the compter chose " + compchoices[0] + " too " );
} else if (compchoices[0] === "water") {
alert(" YOU win!! the computer chose: " + compchoices[0]);
} else {
alert(" YOU lose!! the computer chose: " + compchoices[0]);
}
} 




function blue() {

if (compchoices[0] === "grass") {
alert(" YOU lose!! the computer chose: " + compchoices[0]);
} else if (compchoices[0] === "water") {
alert(" IT'S  a draw, the compter chose " + compchoices[0]);
} else {
alert(" YOU win!! the computer chose: " + compchoices[0]);
}
} 

