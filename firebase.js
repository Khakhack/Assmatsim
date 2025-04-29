// Import Firebase App, Firestore et Auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Ton code de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDMyuNMouCQEUlG6cg2uE2ib9cI-WWnx-o",
  authDomain: "assmatsim.firebaseapp.com",
  projectId: "assmatsim",
  storageBucket: "assmatsim.appspot.com",
  messagingSenderId: "73332672940",
  appId: "1:73332672940:web:29243e73f8f13195a4d209",
  measurementId: "G-DYJD1PEXZ9"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore et Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
