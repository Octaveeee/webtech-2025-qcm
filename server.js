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

app.get('/questions.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(path.join(__dirname, 'questions.js'));
});

// Route pour servir index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route API pour obtenir les questions (prioritaire pour Vercel)
app.get('/api/questions', (req, res) => {
  try {
    const questionsPath = path.join(__dirname, 'questions.json');
    if (!fs.existsSync(questionsPath)) {
      return res.status(404).json({ error: 'Fichier questions.json introuvable' });
    }
    const questionsData = fs.readFileSync(questionsPath, 'utf8');
    const questions = JSON.parse(questionsData);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.json(questions);
  } catch (error) {
    console.error('Erreur API questions:', error);
    res.status(500).json({ error: 'Erreur lors du chargement des questions', details: error.message });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📝 Ouvrez votre navigateur et allez sur http://localhost:${PORT}`);
});

