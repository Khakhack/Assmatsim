// app.js

// Importer ce qu'il faut depuis firebase.js
import { db } from "./firebase.js";

// Fonction pour enregistrer un enfant
export function enregistrerEnfant(event) {
  event.preventDefault(); // Empêche la page de recharger
  
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const dateNaissance = document.getElementById('dateNaissance').value;
  const nomParent = document.getElementById('nomParent').value;
  const telephone = document.getElementById('telephone').value;
  const typeContrat = document.getElementById('typeContrat').value;
  const dateDebut = document.getElementById('dateDebut').value;
  const nbHeures = document.getElementById('nbHeures').value;
  const nbJours = document.getElementById('nbJours').value;
  const remarques = document.getElementById('remarques').value;

  // Vérification rapide
  if (!prenom || !nom) {
    alert("Merci de remplir au minimum le prénom et le nom !");
    return;
  }

  // Ajouter dans la base Firestore
  db.collection("enfants").add({
    prenom,
    nom,
    dateNaissance,
    nomParent,
    telephone,
    typeContrat,
    dateDebut,
    nbHeures: parseFloat(nbHeures),
    nbJours: parseFloat(nbJours),
    remarques,
    creeLe: new Date()
  })
  .then(() => {
    alert("Enfant enregistré avec succès !");
    window.location.href = "enfants.html"; // Rediriger vers la page des enfants
  })
  .catch((error) => {
    console.error("Erreur lors de l'ajout : ", error);
    alert("Erreur lors de l'enregistrement.");
  });
}
