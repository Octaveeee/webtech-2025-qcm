# QCM Technologies Web

Application web interactive pour passer un QCM sur les technologies web.

## Fonctionnalités

- ✅ Interface graphique moderne et responsive
- 🔀 Mode aléatoire pour mélanger les questions
- 📊 Affichage du score en temps réel
- 💾 Téléchargement des résultats en JSON
- 🎯 Support des questions à réponses multiples
- 📱 Compatible mobile et desktop

## Installation

1. **Installez les dépendances** :
   ```bash
   npm install
   ```

## Utilisation

### Développement local

Lancez le serveur de développement :

```bash
npm run dev
```

Puis ouvrez votre navigateur sur `http://localhost:3000`

### Production

```bash
npm start
```

## Structure des fichiers

- `server.js` - Serveur Express
- `package.json` - Configuration npm
- `index.html` - Page principale
- `styles.css` - Styles CSS
- `app.js` - Logique JavaScript
- `questions.json` - Fichier des questions

## Déploiement sur Vercel

1. **Connectez votre repository GitHub à Vercel**

2. **Vercel détectera automatiquement** :
   - Le fichier `package.json`
   - Le script `start` pour la production
   - Les fichiers statiques

3. **Configuration automatique** : Vercel utilisera Node.js et lancera `npm start`

## Configuration

Les options disponibles dans l'interface :
- **Mode aléatoire** : Mélange les questions
- **Afficher les bonnes réponses immédiatement** : Affiche le résultat après chaque réponse

