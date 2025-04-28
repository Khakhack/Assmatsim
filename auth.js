// Initialisation de l'authentification
const auth = firebase.auth();

// Fonction pour s'inscrire
function inscrireUtilisateur(email, motdepasse) {
    auth.createUserWithEmailAndPassword(email, motdepasse)
        .then((userCredential) => {
            console.log('Inscription réussie', userCredential.user);
            alert("Inscription réussie !");
            window.location.href = "index.html"; // Redirige vers l'accueil après inscription
        })
        .catch((error) => {
            console.error('Erreur inscription', error.message);
            alert(error.message);
        });
}

// Fonction pour se connecter
function connecterUtilisateur(email, motdepasse) {
    auth.signInWithEmailAndPassword(email, motdepasse)
        .then((userCredential) => {
            console.log('Connexion réussie', userCredential.user);
            alert("Connexion réussie !");
            window.location.href = "index.html"; // Redirige vers l'accueil après connexion
        })
        .catch((error) => {
            console.error('Erreur connexion', error.message);
            alert(error.message);
        });
}
// Fonction pour se déconnecter
function deconnexionUtilisateur() {
    auth.signOut()
        .then(() => {
            console.log('Déconnexion réussie');
            alert('Déconnexion réussie');
            window.location.href = "connexion.html"; // Redirige vers la page de connexion
        })
        .catch((error) => {
            console.error('Erreur déconnexion', error.message);
        });
}
