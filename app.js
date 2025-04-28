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
// Fonction pour ajouter un enfant dans Firestore
document.getElementById("formEnfant").addEventListener("submit", async (e) => {
    e.preventDefault();

    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const dateNaissance = document.getElementById("dateNaissance").value;
    const nomParent = document.getElementById("nomParent").value;
    const telephone = document.getElementById("telephone").value;
    const typeContrat = document.getElementById("typeContrat").value;
    const typeCDI_CDD = document.getElementById("typeCDI_CDD").value;
    const dateDebut = document.getElementById("dateDebut").value;
    const heuresSemaine = document.getElementById("heuresSemaine").value;
    const joursSemaine = document.getElementById("joursSemaine").value;
    const tauxHoraire = document.getElementById("tauxHoraire").value;
    const majorationComplementaire = document.getElementById("majorationComplementaire").value;
    const majorationSupplementaire = document.getElementById("majorationSupplementaire").value;
    const repas = document.getElementById("repas").value;
    const entretien = document.getElementById("entretien").value;
    const remarques = document.getElementById("remarques").value;

    try {
        const db = firebase.firestore();
        await db.collection("enfants").add({
            prenom,
            nom,
            dateNaissance,
            nomParent,
            telephone,
            typeContrat,
            typeCDI_CDD,
            dateDebut,
            heuresSemaine,
            joursSemaine,
            tauxHoraire,
            majorationComplementaire,
            majorationSupplementaire,
            repas,
            entretien,
            remarques,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        alert("Enfant ajouté avec succès !");
        document.getElementById("formEnfant").reset();
    } catch (error) {
        console.error("Erreur d'ajout:", error);
        alert("Erreur lors de l'ajout, voir la console.");
    }
});
