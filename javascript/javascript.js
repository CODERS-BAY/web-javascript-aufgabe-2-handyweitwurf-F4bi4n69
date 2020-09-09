var versuche;
var g;          // Fallbeschleunigung \\
var winkel;          // Wurfwinkel \\
var miss;          // Gibt an wie um viel der Spieler das Ziel verpasst hat \\
var entfernung;          // Speichert den zufälligen Wert für die Entfernung \\
// var v0;          // Anfangsgeschiwndigkeit \\
var wurfweite;          // Berechnet sich auf Wurfwinkel und Anfangsgeschwindigkeit \\
var verbleibend;
var geschossen = 1;


var v0 = document.getElementById("kraft").value;
var winkel = document.getElementById("winkel").value;
var versuche = document.getElementById("schuesse").value;

function pl1() {g = 9.81;}
function pl2() {g = 1.62;}
function pl3() {g = 3.69;}
function pl4() {g = 24.79;}
function pl5() {g = 274;}

function start() {
    derwinkel();
    zahlenausgabe();
    verbleibend = versuche;
    geschossen++;
    verbleibend--;
}

function zahlenausgabe() {
    document.getElementById("verbleibend2").innerHTML = verbleibend;
    document.getElementById("geschossen2").innerHTML = geschossen;
}

function derwinkel() {
    winkel= winkel* (Math.PI/180);
    weite();
}

function weite() {
    wurfweite = ((v0 * v0) + Math.sin(2 * winkel)) / g;
    entfernungMonster();
}

// function entfernungMonster() {
//     entfernung = Math.random() * 90 + 10;
//     entfernung = Math.round(entfernung);
//     auswertung();
    
// }

// function auswertung() {

//     miss = entfernung - wurfweite;

//     if (entfernung == wurfweite) {
//         alert ("Du hast getroffen!")
//     } else {
//         alert ("Du hast um " + miss + "m daneben geschossen!")
//     }
// }

alert(v0);