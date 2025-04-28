// Inscription
const formInscription = document.getElementById('formInscription');

if (formInscription) {
  formInscription.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formInscription.emailInscription.value;
    const motDePasse = formInscription.motDePasseInscription.value;
    console.log("Inscription:", email);
    alert("Inscription fictive réussie !");
    window.location.href = "connexion.html";
  });
}

// Connexion
const formConnexion = document.getElementById('formConnexion');

if (formConnexion) {
  formConnexion.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formConnexion.emailConnexion.value;
    const motDePasse = formConnexion.motDePasseConnexion.value;
    console.log("Connexion:", email);
    alert("Connexion fictive réussie !");
    window.location.href = "index.html";
  });
}
