// Fonction pour inscrire un utilisateur
function inscrireUtilisateur(email, motdepasse) {
    auth.createUserWithEmailAndPassword(email, motdepasse)
        .then((userCredential) => {
            console.log('Inscription réussie', userCredential.user);
            alert("Inscription réussie !");
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error('Erreur inscription', error.message);
            alert(error.message);
        });
}

// Fonction pour connecter un utilisateur
function connecterUtilisateur(email, motdepasse) {
    auth.signInWithEmailAndPassword(email, motdepasse)
        .then((userCredential) => {
            console.log('Connexion réussie', userCredential.user);
            alert("Connexion réussie !");
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error('Erreur connexion', error.message);
            alert(error.message);
        });
}

// Fonction pour déconnecter un utilisateur
function deconnexionUtilisateur() {
    auth.signOut()
        .then(() => {
            console.log('Déconnexion réussie');
            alert('Déconnexion réussie');
            window.location.href = "connexion.html";
        })
        .catch((error) => {
            console.error('Erreur déconnexion', error.message);
        });
}

// Vérification automatique de l'utilisateur connecté
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // S'il est connecté, on affiche son email
        document.getElementById('bienvenue').innerText = "Connecté en tant que : " + user.email;
    } else {
        // S'il n'est pas connecté, on le redirige vers la page de connexion
        window.location.href = "connexion.html";
    }
});
