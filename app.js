// ----------------- Données ----------------- //
let enfants = JSON.parse(localStorage.getItem('enfants')) || [];
let plannings = JSON.parse(localStorage.getItem('plannings')) || [];

// ----------------- Ajouter un enfant ----------------- //
const formEnfant = document.getElementById('formEnfant');
if (formEnfant) {
    formEnfant.addEventListener('submit', function(e) {
        e.preventDefault();
        const nouvelEnfant = {
            prenom: document.getElementById('prenom').value,
            nom: document.getElementById('nom').value,
            dateNaissance: document.getElementById('dateNaissance').value,
            parent: document.getElementById('parent').value,
            telephone: document.getElementById('telephone').value,
            typeContrat: document.getElementById('typeContrat').value,
            cdiCdd: document.getElementById('cdiCdd').value,
            debutContrat: document.getElementById('debutContrat').value,
            heuresSemaine: document.getElementById('heuresSemaine').value,
            joursSemaine: document.getElementById('joursSemaine').value,
            tarifHoraire: document.getElementById('tarifHoraire').value,
            majHeuresComp: document.getElementById('majHeuresComp').value,
            majHeuresSupp: document.getElementById('majHeuresSupp').value,
            fraisRepas: document.getElementById('fraisRepas').value,
            fraisEntretien: document.getElementById('fraisEntretien').value,
            remarques: document.getElementById('remarques').value
        };
        enfants.push(nouvelEnfant);
        localStorage.setItem('enfants', JSON.stringify(enfants));
        alert('Enfant ajouté avec succès !');
        window.location.href = "enfants.html";
    });
}

// ----------------- Afficher liste des enfants ----------------- //
const listeEnfants = document.getElementById('listeEnfants');
if (listeEnfants) {
    enfants.forEach((enfant, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${enfant.prenom} ${enfant.nom}</h3>
            <p>Type de contrat : ${enfant.typeContrat} (${enfant.cdiCdd})</p>
            <p>Tarif horaire : ${enfant.tarifHoraire} € brut</p>
            <a href="planning.html?index=${index}"><button>Voir Planning</button></a>
        `;
        listeEnfants.appendChild(div);
    });
}

// ----------------- Ajouter Planning ----------------- //
const formPlanning = document.getElementById('formPlanning');
if (formPlanning) {
    const enfantPlanning = document.getElementById('enfantPlanning');
    enfants.forEach((enfant, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${enfant.prenom} ${enfant.nom}`;
        enfantPlanning.appendChild(option);
    });

    formPlanning.addEventListener('submit', function(e) {
        e.preventDefault();
        const planning = {
            indexEnfant: enfantPlanning.value,
            dateTravail: document.getElementById('dateTravail').value,
            heureArrivee: document.getElementById('heureArrivee').value,
            heureDepart: document.getElementById('heureDepart').value
        };
        plannings.push(planning);
        localStorage.setItem('plannings', JSON.stringify(plannings));
        alert('Journée ajoutée au planning !');
    });

    const listePlanning = document.getElementById('listePlanning');
    plannings.forEach(planning => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${enfants[planning.indexEnfant].prenom} ${enfants[planning.indexEnfant].nom} - ${planning.dateTravail} de ${planning.heureArrivee} à ${planning.heureDepart}</p>
        `;
        listePlanning.appendChild(div);
    });
}

// ----------------- Convertisseur Net ⇄ Brut ----------------- //
function convertirNetBrut() {
    const net = parseFloat(document.getElementById('tauxNet').value);
    if (!isNaN(net)) {
        const brut = net * 1.23;
        document.getElementById('resultatConvertisseur').innerHTML = `Taux Brut estimé : ${brut.toFixed(2)} €`;
    }
}

function convertirBrutNet() {
    const brut = parseFloat(document.getElementById('tauxBrut').value);
    if (!isNaN(brut)) {
        const net = brut / 1.23;
        document.getElementById('resultatConvertisseur').innerHTML = `Taux Net estimé : ${net.toFixed(2)} €`;
    }
}
