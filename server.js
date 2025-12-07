const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (CSS, JS, images, etc.)
app.use(express.static(__dirname, {
  maxAge: '1d',
  etag: true
}));

// Routes explicites pour les fichiers statiques avec CORS
app.get('/questions.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(path.join(__dirname, 'questions.json'));
});

app.get('/app.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(path.join(__dirname, 'app.js'));
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

