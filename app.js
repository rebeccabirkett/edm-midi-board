const playSound = (sampleName) => {
    let sample = document.getElementById(sampleName);
    sample.play();
    document.getElementById("display").innerHTML=sampleName;
}

window.addEventListener('keydown', function (event) {
    var k=event.keyCode;

    if(k===81) playSound('Q'); else
    if(k===87) playSound('W'); else
    if(k===69) playSound('E'); else
    if(k===82) playSound('R'); else
    if(k===84) playSound('T'); else
    if(k===89) playSound('Y'); else
    if(k===85) playSound('U'); else
    if(k===73) playSound('I'); else
    if(k===79) playSound('O'); else
    if(k===80) playSound('P'); 
})