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
            debutContrat: document.getElementById('debutContrat').value,
            heuresSemaine: document.getElementById('heuresSemaine').value,
            joursSemaine: document.getElementById('joursSemaine').value,
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
            <p>Contrat : ${enfant.typeContrat}</p>
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

// ----------------- Calculs ----------------- //
function afficherCalculs() {
    const index = document.getElementById('enfantCalculs').value;
    const enfant = enfants[index];
    if (!enfant) return;

    const heuresSemaine = parseFloat(enfant.heuresSemaine) || 0;
    const joursSemaine = parseFloat(enfant.joursSemaine) || 0;
    const heuresMois = heuresSemaine * 4.33; // en moyenne par mois
    const indemnitesRepas = joursSemaine * 3 * 4.33; // 3€ par repas
    const indemnitesEntretien = joursSemaine * 3.50 * 4.33; // 3.50€ par jour

    document.getElementById('resultatCalculs').innerHTML = `
        <h3>Résumé pour ${enfant.prenom} ${enfant.nom}</h3>
        <p>Heures normales (moyenne) : ${heuresMois.toFixed(2)}h</p>
        <p>Indemnités repas : ${indemnitesRepas.toFixed(2)} €</p>
        <p>Indemnités entretien : ${indemnitesEntretien.toFixed(2)} €</p>
    `;
}

// Remplir la liste d'enfants pour les calculs
const enfantCalculs = document.getElementById('enfantCalculs');
if (enfantCalculs) {
    enfants.forEach((enfant, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${enfant.prenom} ${enfant.nom}`;
        enfantCalculs.appendChild(option);
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
