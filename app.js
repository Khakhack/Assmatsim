// Fonction pour enregistrer un enfant dans Firestore
function enregistrerEnfant() {
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const dateNaissance = document.getElementById("dateNaissance").value;
    const nomParent = document.getElementById("nomParent").value;
    const telephone = document.getElementById("telephone").value;
    const typeContrat = document.getElementById("typeContrat").value;
    const dateDebut = document.getElementById("dateDebut").value;
    const heuresParSemaine = document.getElementById("heuresParSemaine").value;
    const joursParSemaine = document.getElementById("joursParSemaine").value;
    const remarques = document.getElementById("remarques").value;

    firebase.firestore().collection("enfants").add({
        prenom: prenom,
        nom: nom,
        dateNaissance: dateNaissance,
        nomParent: nomParent,
        telephone: telephone,
        typeContrat: typeContrat,
        dateDebut: dateDebut,
        heuresParSemaine: heuresParSemaine,
        joursParSemaine: joursParSemaine,
        remarques: remarques,
        utilisateur: firebase.auth().currentUser ? firebase.auth().currentUser.email : "inconnu"
    })
    .then(() => {
        alert("Enfant enregistré avec succès !");
        window.location.href = "enfants.html";
    })
    .catch((error) => {
        console.error("Erreur lors de l'enregistrement :", error);
        alert("Erreur lors de l'enregistrement");
    });
}
