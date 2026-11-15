# Nos week-ends

Site pour planifier des week-ends entre amis sur 12 mois : chacun coche ses dispos, les week-ends jouables ressortent, on propose des lieux, l'orga valide et tout le monde ajoute le week-end à son agenda.

**Fichiers**

| Fichier | Rôle |
|---|---|
| `index.html` | Le site (tout est dedans) |
| `config.js` | **Le seul fichier à modifier** : nom, codes, config Firebase |
| `firestore.rules` | Règles de sécurité à coller dans Firebase |

Tant que la config Firebase est vide, le site tourne en **mode démo** (données dans le navigateur, bande fictive) : pratique pour essayer.

---

## 1. Créer la base Firebase (gratuit, ~10 min)

1. Va sur <https://console.firebase.google.com> et connecte-toi avec un compte Google.
2. **Créer un projet** → nom au choix (ex. `nos-weekends`) → tu peux désactiver Google Analytics.
3. Menu de gauche **Build → Firestore Database → Créer une base de données**
   - Emplacement : `eur3 (europe-west)`
   - Mode : **production**
4. Onglet **Règles** : remplace tout par le contenu de `firestore.rules`, puis **Publier**.
5. Roue crantée ⚙️ → **Paramètres du projet** → section « Vos applications » → icône **`</>` (Web)**
   - Nom : `site` · ne coche pas Firebase Hosting → **Enregistrer l'application**
   - Firebase affiche un bloc `const firebaseConfig = { apiKey: "...", ... }`.
6. Copie ces valeurs dans `config.js`, dans la partie `firebase: { ... }`.

> La clé `apiKey` n'est pas un secret : elle est faite pour être visible dans un site web. Ce sont les règles qui protègent la base.

Le plan gratuit (Spark) autorise 50 000 lectures et 20 000 écritures **par jour**. Pour 20 personnes, vous n'en utiliserez pas 1 %. Pas de carte bancaire, pas de mise en veille.

## 2. Régler `config.js`

```js
APP_NAME: "Nos week-ends",   // le nom affiché
GROUP_CODE: "WEEKEND2027",   // code demandé à l'entrée ("" = aucun)
ADMIN_CODE: "un-code-a-toi", // code du mode orga
DEFAULT_THRESHOLD: 4,        // nb de dispo pour qu'un week-end soit « jouable »
```

⚠️ Si le dépôt GitHub est public, n'importe qui qui lit `config.js` voit les codes. Pour un groupe d'amis c'est suffisant, mais n'y mets pas un mot de passe que tu utilises ailleurs.

## 3. Mettre en ligne sur GitHub Pages

1. Crée un compte sur <https://github.com> si besoin, puis **New repository** (ex. `nos-weekends`), en **Public** (GitHub Pages gratuit exige un dépôt public).
2. **Add file → Upload files** → glisse `index.html`, `config.js` (et `README.md`, `firestore.rules` si tu veux) → **Commit changes**.
3. **Settings → Pages** → Source : *Deploy from a branch* → Branch : `main` / `(root)` → **Save**.
4. Après 1 à 2 minutes, le site est en ligne à l'adresse
   `https://<ton-pseudo>.github.io/nos-weekends/`
5. Envoie ce lien (et le code du groupe) dans le groupe WhatsApp.

Pour modifier plus tard : ouvre `config.js` sur GitHub → crayon ✏️ → modifie → **Commit**. Le site se met à jour en une minute.

## 4. Utilisation

- **Accueil** : on choisit *Solo* (compte pour 1) ou *Couple* (compte pour 2, avec les deux prénoms). Déjà inscrit : on clique sur son nom.
- **Calendrier** : tous les week-ends des 12 prochains mois, regroupés par mois. Trois boutons par billet : ✓ dispo, ? peut-être, ✕ pas dispo (re-cliquer efface). Plus le billet est vert, plus il y a de monde. Filtres : à cocher, jouables, épinglés, avec férié.
- **Fiche d'un week-end** (clic sur un billet) : qui vient, suggestions de destinations selon le nombre de dispo et la saison, idées de lieux (type, budget, note) avec votes +1, fil de commentaires.
- **Les plus chauds** : week-ends validés (avec bouton agenda), épinglés par l'orga, et top 10 des week-ends.
- **Jours fériés** : les fériés des 12 mois, avec le week-end associé (3 jours, pont…) et ses dispos.
- **Qui manque à l'appel** : avancement de chacun, et un bouton qui copie un rappel à coller dans le groupe.
- **Mode orga** (lien en bas de page + code) : épingler un week-end, valider une date et un lieu (confettis 🎉), régler le seuil « jouable », retirer quelqu'un.
- **Ajouter à mon agenda** : télécharge un fichier `.ics` (Google Agenda, Apple Calendrier, Outlook). Si le lundi ou le vendredi est férié, l'événement couvre les 3 jours.

## Bon à savoir

- Pas de mot de passe par personne : chacun peut cliquer sur le nom d'un autre. C'est un outil entre amis, basé sur la confiance.
- Changer `GROUP_ID` dans `config.js` repart d'un calendrier vide (les anciennes données restent dans Firebase).
- Le calendrier glisse tout seul : il affiche toujours les 12 mois à partir d'aujourd'hui.
