const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Routes explicites pour les fichiers statiques
app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles.css'), {
    headers: { 'Content-Type': 'text/css' }
  });
});

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'), {
    headers: { 'Content-Type': 'application/javascript' }
  });
});

app.get('/questions.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'questions.json'), {
    headers: { 'Content-Type': 'application/json' }
  });
});

// Route pour servir index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route API pour obtenir les questions (optionnel, si besoin)
app.get('/api/questions', (req, res) => {
  try {
    const questionsData = fs.readFileSync(path.join(__dirname, 'questions.json'), 'utf8');
    const questions = JSON.parse(questionsData);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors du chargement des questions' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📝 Ouvrez votre navigateur et allez sur http://localhost:${PORT}`);
});

