// ─────────────────────────────────────────────────────────────
//  Réglages du site : c'est le SEUL fichier à modifier.
// ─────────────────────────────────────────────────────────────
window.WEEKEND_CONFIG = {
  // Nom affiché en haut du site
  APP_NAME: "Corona Saintes",

  // Identifiant du groupe dans la base (lettres, chiffres, tirets).
  // Changer cette valeur = repartir d'un calendrier vide.
  GROUP_ID: "les-copains",

  // Code demandé à l'entrée du site (laisser "" pour ne rien demander).
  GROUP_CODE: "",

  // Code du mode orga (épingler, valider un week-end, supprimer quelqu'un…).
  // ⚠️ Visible par qui lit le code source : c'est un garde-fou, pas un coffre-fort.
  ADMIN_CODE: "orga2027",

  // À partir de combien de personnes dispo un week-end devient « jouable »
  // (modifiable ensuite dans l'onglet Orga).
  DEFAULT_THRESHOLD: 4,

  // Collez ici la config de votre projet Firebase (voir README.md).
  // Tant que apiKey est vide, le site tourne en MODE DÉMO (données locales).
  firebase: {
    apiKey: "AIzaSyATkNrXQYx8HAOgciy4h_wLqaS0o4ZYqFk",
    authDomain: "nos-weekends-97fdd.firebaseapp.com",
    projectId: "nos-weekends-97fdd",
    storageBucket: "nos-weekends-97fdd.firebasestorage.app",
    messagingSenderId: "129232594654",
    appId: "1:129232594654:web:8531ac28c8f69078d2844f"
  }
};
