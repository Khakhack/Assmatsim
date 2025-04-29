// Import Firebase
import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore-lite.js";

// Fonction pour enregistrer un enfant
async function enregistrerEnfant() {
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const dateNaissance = document.getElementById('dateNaissance').value;
    const nomParent = document.getElementById('nomParent').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const typeContrat = document.getElementById('typeContrat').value;
    const typeCdiCdd = document.getElementById('typeCdiCdd').value;
    const dateDebutContrat = document.getElementById('dateDebutContrat').value;
    const heuresSemaine = document.getElementById('heuresSemaine').value;
    const joursSemaine = document.getElementById('joursSemaine').value;
    const repas = document.getElementById('repas').value.trim();
    const majorationHeureComplementaire = document.getElementById('majorationHeureComplementaire').value;
    const majorationHeureSupp = document.getElementById('majorationHeureSupp').value;
    const fraisEntretien = document.getElementById('fraisEntretien').value.trim();
    const remarques = document.getElementById('remarques').value.trim();

    if (!prenom || !nom) {
        alert('Veuillez remplir tous les champs requis.');
        return;
    }

    try {
        await addDoc(collection(db, "enfants"), {
            prenom,
            nom,
            dateNaissance,
            nomParent,
            telephone,
            typeContrat,
            typeCdiCdd,
            dateDebutContrat,
            heuresSemaine,
            joursSemaine,
            repas,
            majorationHeureComplementaire,
            majorationHeureSupp,
            fraisEntretien,
            remarques,
            createdAt: new Date()
        });
        alert('Enfant ajouté avec succès !');
        document.getElementById('ajouter-enfant-form').reset();
    } catch (error) {
        console.error('Erreur lors de l\'ajout :', error);
        alert('Erreur lors de l\'ajout.');
    }
}

// Pour rendre la fonction accessible au HTML
window.enregistrerEnfant = enregistrerEnfant;
