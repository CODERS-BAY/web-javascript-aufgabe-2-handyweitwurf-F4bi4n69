
var g;          // Fallbeschleunigung \\
var miss;          // Gibt an wie um viel der Spieler das Ziel verpasst hat \\
var entfernung;          // Speichert den zufälligen Wert für die Entfernung \\
var anfang;          // Anfangsgeschiwndigkeit \\
var verbleibend;
var geworfen = 0;
var versuche;
var anfang;
var winkel;
var wurfweite;

///// Werte für Fallbeschleunigung \\\\\
function pl1() {if (geworfen==0) g = 9.81;}
function pl2() {if (geworfen==0) g = 1.62;}
function pl3() {if (geworfen==0) g = 3.69;}
function pl4() {if (geworfen==0) g = 24.79;}
function pl5() {if (geworfen==0) g = 274;}



function start() {
    if (geworfen == 0)
    versuche = document.getElementById("schuesse").value;
    anfang = document.getElementById("anfang").value;
    winkel = document.getElementById("winkel").value;

    geworfen++;
    verbleibend--;

    derwinkel();
    zahlenausgabe();
}

///// Berechnung des Winkels \\\\\
function derwinkel() {
    winkel= winkel * ( Math.PI / 180);
    weite();
}

///// Berechnung für die Wurfweite \\\\\
function weite() {
    wurfweite = ((anfang * anfang) + Math.sin(2 * winkel)) / g;
    wurfweite = Math.round(wurfweite); 

    entfernungMonster();
}

///// Berechnet die Entfernung zum Monster \\\\\
function entfernungMonster() {

    if (geworfen == 1) {
    entfernung = Math.random() * 90 + 10;
    entfernung = Math.round(entfernung);
    }

    miss = entfernung - wurfweite;
    auswertung();
    
}

///// Ausgabe für Verbleibend und Geworfen \\\\\
function zahlenausgabe() {

    if (geworfen == 1) {
        verbleibend = versuche;
        verbleibend--;
    }

    document.getElementById("verbleibend2").innerHTML = verbleibend;
    document.getElementById("geschossen2").innerHTML = geworfen;

    if (geworfen == versuche) {
        alert ("Leider hast du keine verbleibende Schüsse mehr!")
        location.reload();
    }

}

function auswertung() {

    if (entfernung == wurfweite) {
        alert ("Du hast getroffen!")
        location.reload();
    } else {
        alert ("Du hast um " + miss + "m daneben geschossen!")
    }
}