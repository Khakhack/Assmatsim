// Enregistrement d'un enfant
const formEnfant = document.getElementById('formEnfant');

if (formEnfant) {
  formEnfant.addEventListener('submit', (e) => {
    e.preventDefault();

    const enfant = {
      prenom: document.getElementById('prenom').value,
      nom: document.getElementById('nom').value,
      dateNaissance: document.getElementById('dateNaissance').value,
      nomParent: document.getElementById('nomParent').value,
      telephone: document.getElementById('telephone').value,
      typeContrat: document.getElementById('typeContrat').value,
      cdiCdd: document.getElementById('cdiCdd').value,
      dateDebutContrat: document.getElementById('dateDebutContrat').value,
      heuresSemaine: document.getElementById('heuresSemaine').value,
      joursSemaine: document.getElementById('joursSemaine').value,
      tarifHoraire: document.getElementById('tarifHoraire').value,
      majorationComplementaire: document.getElementById('majorationComplementaire').value,
      majorationSupplementaire: document.getElementById('majorationSupplementaire').value,
      repasFournis: document.getElementById('repasFournis').value,
      prixRepas: document.getElementById('prixRepas').value,
      fraisEntretien: document.getElementById('fraisEntretien').value,
      remarques: document.getElementById('remarques').value,
      createdAt: new Date()
    };

    db.collection("enfants").add(enfant)
      .then(() => {
        alert("Enfant enregistré !");
        formEnfant.reset();
        window.location.href = "enfants.html"; // Redirige vers la liste des enfants après enregistrement
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement :", error.message);
        alert(error.message);
      });
  });
}

// Affichage des enfants dans la page enfants.html
const listeEnfants = document.getElementById('listeEnfants');

if (listeEnfants) {
  db.collection("enfants").orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
    listeEnfants.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const enfant = doc.data();
      const div = document.createElement("div");
      div.classList.add("carte-enfant");

      div.innerHTML = `
        <h3>${enfant.prenom} ${enfant.nom}</h3>
        <p>Date de naissance : ${enfant.dateNaissance}</p>
        <p>Parent : ${enfant.nomParent} (${enfant.telephone})</p>
        <p>Contrat : ${enfant.typeContrat} - ${enfant.cdiCdd}</p>
        <p>Début : ${enfant.dateDebutContrat}</p>
        <p>Horaires : ${enfant.heuresSemaine}h/semaine sur ${enfant.joursSemaine} jours</p>
        <p>Tarif : ${enfant.tarifHoraire} €/h</p>
        <p>Majoration compl.: ${enfant.majorationComplementaire} % / supp.: ${enfant.majorationSupplementaire} %</p>
        <p>Repas : ${enfant.repasFournis} (${enfant.prixRepas} €)</p>
        <p>Entretien : ${enfant.fraisEntretien} €/jour</p>
        <p>Remarques : ${enfant.remarques}</p>
      `;

      listeEnfants.appendChild(div);
    });
  });
}
