// Initialisation de la liste d'enfants
let enfants = JSON.parse(localStorage.getItem('enfants')) || [];

// Fonction pour enregistrer dans localStorage
function sauvegarderEnfants() {
    localStorage.setItem('enfants', JSON.stringify(enfants));
}

// Fonction pour ajouter un enfant
function ajouterEnfant() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const naissance = document.getElementById('naissance').value;
    const parent = document.getElementById('parent').value;
    const telephone = document.getElementById('telephone').value;
    const typeContrat = document.getElementById('typeContrat').value;
    const typeGarde = document.getElementById('typeGarde').value;
    const dateDebut = document.getElementById('dateDebut').value;
    const nbHeures = document.getElementById('nbHeures').value;
    const nbJours = document.getElementById('nbJours').value;
    const remarque = document.getElementById('remarque').value;

    const nouvelEnfant = {
        nom,
        prenom,
        naissance,
        parent,
        telephone,
        typeContrat,
        typeGarde,
        dateDebut,
        nbHeures,
        nbJours,
        remarque
    };

    enfants.push(nouvelEnfant);
    sauvegarderEnfants();
    alert('Enfant ajouté avec succès !');
    window.location.href = 'enfants.html';
}

// Fonction pour afficher la liste des enfants
function afficherEnfants() {
    const liste = document.getElementById('listeEnfants');
    if (!liste) return; // Si on n'est pas sur la bonne page, ne rien faire

    enfants.forEach((enfant, index) => {
        const div = document.createElement('div');
        div.className = 'enfant';
        div.innerHTML = `
            <h3>${enfant.prenom} ${enfant.nom}</h3>
            <p>Date de naissance : ${enfant.naissance}</p>
            <p>Parent : ${enfant.parent} (${enfant.telephone})</p>
            <p>Type de contrat : ${enfant.typeContrat} - ${enfant.typeGarde}</p>
            <p>Date de début : ${enfant.dateDebut}</p>
            <p>Heures par semaine : ${enfant.nbHeures}h</p>
            <p>Jours par semaine : ${enfant.nbJours} jours</p>
            <p>Remarques : ${enfant.remarque}</p>
        `;
        liste.appendChild(div);
    });
}

// Chargement automatique des enfants au démarrage
document.addEventListener('DOMContentLoaded', afficherEnfants);
