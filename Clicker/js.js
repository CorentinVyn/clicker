let counter = 0;
let counter_click = 1;

let combo = 1;
let comboTimeout;
let lastClickTime = 0;
const comboMax = 5; 
let timeoutDuration = 2000; // Temps avant réinitialisation du combo

const dollyCounter = document.getElementById("point");
const comboCounter = document.getElementById("combo");
const force = document.getElementById("force");
const multiplicateur = document.getElementById("multiplicateur");

function clic() {
    const now = Date.now();
    const dolly = document.getElementById("click");
dolly.classList.add("shake");
setTimeout(() => dolly.classList.remove("shake"), 200);


    // Si le clic est rapide (avant que le délai d'attente ne soit écoulé)
    if (now - lastClickTime < timeoutDuration) {
        if (combo < comboMax) {
            combo += 0.2; // Augmente le combo de 0.1
            design();
            if (Math.floor(combo) !== Math.floor(combo - 0.2)) {
                const mainElement = document.querySelector('main');
                mainElement.classList.add("shake");
                setTimeout(() => mainElement.classList.remove("shake"), 200);
            }
        }
    } else {
        combo = 1;
    }

    lastClickTime = now;

    // Effacer le timeout précédent et en créer un nouveau
    clearTimeout(comboTimeout);

    // Nouveau délai de réinitialisation qui devient plus court avec l'augmentation du combo
    timeoutDuration = Math.max(2000 - combo * 200, 500); // Le délai minimum est de 500ms

    // Démarrer un nouveau setTimeout pour réinitialiser le combo après un certain délai
    comboTimeout = setTimeout(() => {
        combo = 1; // Réinitialiser le combo après la durée du timeout
        updateComboDisplay(); // Met à jour l'affichage du combo
        document.querySelector('.form-combo2').style.clipPath = `inset(0 80% 0 0)`;
        designreset();

    }, timeoutDuration);

    // Assigner les bonnes valeurs de force et multiplicateur
    const forceValue = parseFloat(force.value) || 1; // Récupérer la valeur de force
    const multiplicateurValue = parseFloat(multiplicateur.value) || 1; // Récupérer la valeur du multiplicateur

    // Calcul du score basé sur le combo et les valeurs de force et multiplicateur
    counter_click = forceValue;
    counter += (counter_click * combo) * multiplicateurValue;

    // Gérer l'affichage visuel du combo
    const calculpercentage = 100 - (combo * 20);
    document.querySelector('.form-combo2').style.clipPath = `inset(0 ${calculpercentage}% 0 0)`;

    updateComboDisplay();
    stat();
}

function stat() {
    dollyCounter.innerHTML = counter.toFixed(0); // Affiche le compteur avec une décimale
    comboCounter.innerHTML = combo.toFixed(1); // Affiche le combo avec une décimale

    checkarme();
}

function updateComboDisplay() {
    comboCounter.innerHTML = combo.toFixed(1); // Met à jour le combo dans le DOM
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// PRIX DES ARMES ET DES AMELIORATIONS ////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const prixtournevis = 50;
const prixcouteau =60;
const prixtronconneuse=70;
const prixarbalete = 80;  
const prixpistolet = 90;


function checkarme(){
    if (prixtournevis <= counter){
        document.getElementById('dispotournevis').src="input/inputv.png";
        document.getElementById('dispotournevis').style.cursor = 'pointer';
    } else{
        document.getElementById('dispotournevis').src="input/inputindispo.png";
        document.getElementById('dispotournevis').style.cursor = 'default';
    }
    if (prixcouteau <= counter){
        document.getElementById('dispocouteau').src="input/inputve.png";
        document.getElementById('dispocouteau').style.cursor = 'pointer';
    } else{
        document.getElementById('dispocouteau').src="input/inputindispo.png";
        document.getElementById('dispocouteau').style.cursor = 'default';
    }
    if (prixtronconneuse <= counter){
        document.getElementById('dispotronconneuse').src="input/inputr.png";
        document.getElementById('dispotronconneuse').style.cursor = 'pointer';
    } else{
        document.getElementById('dispotronconneuse').src="input/inputindispo.png";
        document.getElementById('dispotronconneuse').style.cursor = 'default';
    }
    if (prixarbalete <= counter){  // Utiliser le bon nom de variable
        document.getElementById('dispoarbalete').src = "input/inputo.png";
        document.getElementById('dispoarbalete').style.cursor = 'pointer';
    } else {
        document.getElementById('dispoarbalete').src = "input/inputindispo.png";
        document.getElementById('dispoarbalete').style.cursor = 'default';
    }
    if (prixpistolet <= counter){
        document.getElementById('dispopistolet').src = "input/inputb.png";
        document.getElementById('dispopistolet').style.cursor = 'pointer';
    } else {
        document.getElementById('dispopistolet').src = "input/inputindispo.png";
        document.getElementById('dispopistolet').style.cursor = 'default';
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////

//// SELECTION DE L ARME /////

////////////////////////////////////////////////////////////////////////////////////////////////



const degattournervis = 10;
const multtournevis = 2;
const degatscouteau = 30;
const multcouteau = 4;
const degattronconneuse = 50;
const multtronconneuse = 6;
const degatarbalete = 70;
const multarbalete = 8;
const degatpistolet = 90;
const multpistolet = 10;
const lvltournevis = document.getElementById("lvltournevis");


const dispotournevis = document.getElementById('dispotournevis');

function achat(){
    if (event.target.id==="dispotournevis"){
        counter -= prixtournevis;
        document.getElementById('dispotournevis').src="input/inputsel.png";
        force.value=degattournervis;
        multiplicateur.value=multtournevis;
        lvltournevis.innerHTML=1;
        stat();
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////

//////// DESIGN EN FONCTION DU COMBO ///////////

//////////////////////////////////////////////////////////////////////////////////////////////////


function design(){
    if (combo>=2 && combo <3){
        document.getElementById('click').src="dolly/dollyver1.png";
        document.querySelector('.power').src='power/cliquehn.png';
        document.querySelector('.power1').src='power/doublehn.png';
        document.querySelector('.power2').src='power/x10hn.png';
    }
    if (combo>=3 && combo<4){
        document.getElementById('click').src="dolly/dollyver2.png";
        document.querySelector('.de1').src='dé/attaquen.png';
        document.querySelector('.de2').src='dé/missionn.png';
        document.querySelector('.de3').src='dé/statistiquen.png';
        document.body.style.fontFamily="Lacquer";
        document.getElementById('boutonve').src='bouton/bouton2creepy.png';
        document.getElementById('boutonv').src='bouton/bouton4creepy.png';
        document.getElementById('boutonr').src='bouton/bouton1creepy.png';
        document.getElementById('boutono').src='bouton/bouton5creepy.png';
        document.getElementById('boutonb').src='bouton/bouton3creepy.png';
    }

    if (combo>=4 && combo <5){
        document.getElementById('click').src="dolly/dollyver3.png";
        document.getElementById('fond').src="fond/fondn.png"
        document.querySelector(".form-attack").style.color='black';
        document.querySelector('.form-titre').style.backgroundImage="url('titre/patchworkcreepy.png')";
    }
    if (combo.toFixed(1) == "4.2"){
        const blackout = document.getElementById('blackout');
        blackout.style.opacity = '1'; // Écran noir total

        setTimeout(() => {
            blackout.style.opacity = '0'; // Réapparition du jeu
            blackout.style.pointerEvents = 'none'; // Réactive l'interaction
        }, 1000); // Durée du fondu au noir (2s)
    }
    if (combo>=5){
        document.querySelector('.lumiere').style.display='block';
        document.querySelector('body').style.backgroundColor="#464646";
        document.getElementById('click').src='dolly/creepy.png'

    }
}

function designreset(){
    document.getElementById("click").src = "dolly/dolly.png";
    document.querySelector('.power').src='power/cliqueh.png';
    document.querySelector('.power1').src='power/doubleh.png';
    document.querySelector('.power2').src='power/x10h.png';
    document.querySelector('.de1').src='dé/attaque.png';
    document.querySelector('.de2').src='dé/mission.png';
    document.querySelector('.de3').src='dé/statistique.png';
    document.body.style.fontFamily="Irish";
    document.getElementById('boutonve').src='bouton/boutonve.png';
    document.getElementById('boutonv').src='bouton/boutonv.png';
    document.getElementById('boutonr').src='bouton/boutonr.png';
    document.getElementById('boutono').src='bouton/boutono.png';
    document.getElementById('boutonb').src='bouton/boutonb.png';
    document.getElementById('fond').src="fond/fond.png"
    document.querySelector(".form-attack").style.color='white';
    document.querySelector('body').style.backgroundColor="#e0a4a4";
    document.querySelector('.lumiere').style.display='none';
    document.querySelector('.form-titre').style.backgroundImage="url('titre/patchwork.png')";
}