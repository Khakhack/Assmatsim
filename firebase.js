// Importer Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Ta configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDMyuNMouCQEUlG6cg2uE2ib9cI-WWnx-o",
    authDomain: "assmatsim.firebaseapp.com",
    projectId: "assmatsim",
    storageBucket: "assmatsim.firebasestorage.app",
    messagingSenderId: "73332672940",
    appId: "1:73332672940:web:29243e73f8f13195a4d209",
    measurementId: "G-DYJD1PEXZ9"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firestore et Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
