// Ajout d'un enfant
const formEnfant = document.getElementById('formEnfant');

if (formEnfant) {
  formEnfant.addEventListener('submit', (e) => {
    e.preventDefault();
    const enfant = {
      prenom: formEnfant.prenom.value,
      nom: formEnfant.nom.value,
      dateNaissance: formEnfant.dateNaissance.value,
      nomParent: formEnfant.nomParent.value,
      telephone: formEnfant.telephone.value,
      typeContrat: formEnfant.typeContrat.value,
      dateDebutContrat: formEnfant.dateDebutContrat.value,
      heuresSemaine: formEnfant.heuresSemaine.value,
      joursSemaine: formEnfant.joursSemaine.value,
      tarifHoraire: formEnfant.tarifHoraire.value,
      majorationHeureSup: formEnfant.majorationHeureSup.value,
      majorationHeureCompl: formEnfant.majorationHeureCompl.value,
      repas: formEnfant.repas.value,
      entretien: formEnfant.entretien.value,
      typeContratCDD: formEnfant.typeContratCDD.value,
      remarques: formEnfant.remarques.value,
    };

    console.log('Enfant ajouté:', enfant);
    alert("Enfant enregistré !");
    formEnfant.reset();
  });
}
