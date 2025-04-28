// --- Configuration et Initialisation de Firebase ---
const firebaseConfig = {
    apiKey: "AIzaSyCCwymqQqc1eBccg4zbgz-E_Mnxx-3cGpQ",
    authDomain: "assmatsim.firebaseapp.com",
    projectId: "assmatsim",
    storageBucket: "assmatsim.appspot.com",
    messagingSenderId: "173386720494",
    appId: "1:173386720494:web:e24938ef08719a5dad2298",
    measurementId: "G-DYJD1RPEX9"
};

// Initialiser Firebase App
firebase.initializeApp(firebaseConfig);

// Initialiser l'authentification
const auth = firebase.auth();

// --- Fonction pour inscrire un utilisateur ---
function inscrireUtilisateur(email, motdepasse) {
    auth.createUserWithEmailAndPassword(email, motdepasse)
        .then((userCredential) => {
            console.log('Inscription réussie', userCredential.user);
            alert("Inscription réussie !");
            window.location.href = "index.html"; // Redirige vers accueil
        })
        .catch((error) => {
            console.error('Erreur inscription', error.message);
            alert(error.message);
        });
}

// --- Fonction pour connecter un utilisateur ---
function connecterUtilisateur(email, motdepasse) {
    auth.signInWithEmailAndPassword(email, motdepasse)
        .then((userCredential) => {
            console.log('Connexion réussie', userCredential.user);
            alert("Connexion réussie !");
            window.location.href = "index.html"; // Redirige vers accueil
        })
        .catch((error) => {
            console.error('Erreur connexion', error.message);
            alert(error.message);
        });
}

// --- Fonction pour déconnecter un utilisateur ---
function deconnexionUtilisateur() {
    auth.signOut()
        .then(() => {
            console.log('Déconnexion réussie');
            alert('Déconnexion réussie');
            window.location.href = "connexion.html"; // Redirige vers page de connexion
        })
        .catch((error) => {
            console.error('Erreur déconnexion', error.message);
        });
}

// --- Sécurité : vérifier si l'utilisateur est connecté ---
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Si connecté ➔ afficher l'email en haut
        if (document.getElementById('bienvenue')) {
            document.getElementById('bienvenue').innerText = "Connecté en tant que : " + user.email;
        }
    } else {
        // Si pas connecté ➔ renvoyer vers page de connexion
        if (window.location.pathname !== "/connexion.html" && window.location.pathname !== "/inscription.html") {
            window.location.href = "connexion.html";
        }
    }
});
