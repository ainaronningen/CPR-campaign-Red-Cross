// Read more - The three lifesaving steps

//step one
document.getElementById("call").addEventListener("mouseover", readCall);
document.getElementById("call").addEventListener("mouseleave", leaveCall);

function readCall() {
    document.getElementById("call").innerHTML = ("Puster den skadde normalt? Ja: Overvåk i ett minutt for å se at han fortsetter å puste. Legg deretter i sideleie. Ring 113. Overvåk. Undersøk for skader. Nei: Ring straks 113. Start straks hjerte-lungeredning 30:2");
}

function leaveCall() {
    document.getElementById("call").innerHTML = ("LES MER");
}


//step two
document.getElementById("push").addEventListener("mouseover", readPush);
document.getElementById("push").addEventListener("mouseleave", leavePush);

function readPush() {
    document.getElementById("push").innerHTML = ("Legg hendene oppå hverandre, midt på brystet, og trykk 30 ganger loddrett ned. Takten skal være omkring 100 trykk i minuttet. Trykk 4-5 cm ned hver gang.");
}

function leavePush() {
    document.getElementById("push").innerHTML = ("LES MER");
}


//step three
document.getElementById("breathe").addEventListener("mouseover", readBreathe);
document.getElementById("breathe").addEventListener("mouseleave", leaveBreathe);

function readBreathe() {
    document.getElementById("breathe").innerHTML = ("Gi to innblåsninger munn til munn! Åpne luftveiene ved å bøye hodet lett bakover. Klem sammen neseborene med en hånd. Bruk den andre til løfte haken fram. Blås 2 ganger rolig inn.");
}

function leaveBreathe() {
    document.getElementById("breathe").innerHTML = ("LES MER");
}