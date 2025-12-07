const fs = require('fs');
const readline = require('readline');

// Variable pour commencer à partir d'une question spécifique (1 = première question)
const START_FROM_QUESTION = 1;

// Variable pour activer le mode aléatoire (true = questions mélangées, false = ordre normal)
const RANDOM_MODE = true;

// Configuration de l'interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour effacer la console (compatible Windows)
function clearConsole() {
  process.stdout.write('\x1B[2J\x1B[0f');
}

// Fonction pour poser une question
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array]; // Créer une copie pour ne pas modifier l'original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Fonction principale
async function runQCM() {
  try {
    // Lire le fichier JSON
    const data = fs.readFileSync('questions.json', 'utf8');
    let questions = JSON.parse(data);

    console.log('\n=== QCM - Technologies Web ===\n');
    console.log(`Nombre total de questions: ${questions.length}`);
    
    // Créer un mapping pour garder trace de l'index original de chaque question
    let questionsWithIndex = questions.map((q, index) => ({ question: q, originalIndex: index }));
    
    // Mélanger les questions si le mode aléatoire est activé
    if (RANDOM_MODE) {
      questionsWithIndex = shuffleArray(questionsWithIndex);
      console.log('🔀 Mode aléatoire activé - Les questions sont mélangées\n');
    }
    
    // Vérifier et ajuster START_FROM_QUESTION
    const startIndex = Math.max(0, Math.min(START_FROM_QUESTION - 1, questionsWithIndex.length - 1));
    if (START_FROM_QUESTION > 1) {
      console.log(`⚠️  Démarrage à partir de la question ${START_FROM_QUESTION}\n`);
    } else {
      console.log('');
    }
    
    console.log('Appuyez sur Entrée pour commencer...');
    await askQuestion('');

    const results = [];
    
    // Commencer à partir de la question spécifiée
    for (let i = startIndex; i < questionsWithIndex.length; i++) {
      const { question: q, originalIndex } = questionsWithIndex[i];
      const questionNumber = i + 1;
      clearConsole();
      if (RANDOM_MODE) {
        console.log(`\n=== Question ${questionNumber}/${questionsWithIndex.length} (Originale: #${originalIndex + 1}) ===\n`);
      } else {
        console.log(`\n=== Question ${questionNumber}/${questionsWithIndex.length} ===\n`);
      }
      console.log(q.question);
      console.log('\nRéponses possibles:\n');

      // Afficher les réponses numérotées
      q.answers.forEach((answer, index) => {
        console.log(`  ${index + 1}. ${answer}`);
      });

      // Demander la réponse
      let userAnswer;
      let isValid = false;

      while (!isValid) {
        userAnswer = await askQuestion(`\nVotre réponse (1-${q.answers.length}, plusieurs réponses séparées par des virgules, ex: 1,3) ou 'q' pour quitter: `);
        
        if (userAnswer && userAnswer.toLowerCase().trim() === 'q') {
          console.log('\nQCM interrompu par l\'utilisateur.');
          rl.close();
          return;
        }

        // Parser les réponses (peut être une seule ou plusieurs)
        const numbers = userAnswer.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        
        if (numbers.length === 0) {
          console.log(`\n❌ Veuillez entrer au moins un nombre entre 1 et ${q.answers.length}`);
          continue;
        }

        // Vérifier que tous les numéros sont valides
        const allValid = numbers.every(n => n >= 1 && n <= q.answers.length);
        if (!allValid) {
          console.log(`\n❌ Veuillez entrer des numéros entre 1 et ${q.answers.length}`);
          continue;
        }

        // Convertir en indices (0-based) et supprimer les doublons
        const selectedIndices = [...new Set(numbers.map(n => n - 1))].sort((a, b) => a - b);
        isValid = true;
        
        // Vérifier si les réponses sont correctes
        let isCorrect = null;
        if (q.correctAnswers && q.correctAnswers.length > 0) {
          // Les deux tableaux doivent avoir la même longueur et les mêmes éléments (triés)
          const correctSorted = [...q.correctAnswers].sort((a, b) => a - b);
          isCorrect = selectedIndices.length === correctSorted.length && 
                     selectedIndices.every((val, idx) => val === correctSorted[idx]);
        }
        
        // Afficher immédiatement le résultat
        console.log('\n' + '='.repeat(60));
        if (isCorrect !== null) {
          if (isCorrect) {
            console.log('\n✅ CORRECT !\n');
          } else {
            console.log('\n❌ INCORRECT\n');
          }
        } else {
          console.log('\n⚠️  Aucune bonne réponse définie pour cette question\n');
        }
        
        // Afficher la question et toutes les réponses
        console.log(`Question: ${q.question}\n`);
        console.log('Réponses possibles:');
        q.answers.forEach((answer, index) => {
          let marker = '   ';
          if (selectedIndices.includes(index)) {
            // Vérifier si cette réponse sélectionnée est correcte
            const isThisCorrect = q.correctAnswers && q.correctAnswers.includes(index);
            marker = isThisCorrect ? ' ✅ ' : ' ❌ ';
          } else if (q.correctAnswers && q.correctAnswers.includes(index)) {
            marker = ' ✓ ';
          }
          console.log(`${marker}${index + 1}. ${answer}`);
        });
        
        console.log('\n' + '='.repeat(60));
        
        results.push({
          question: q.question,
          selectedAnswers: selectedIndices.map(idx => q.answers[idx]),
          selectedIndices: selectedIndices,
          correctAnswers: q.correctAnswers ? q.correctAnswers.map(idx => q.answers[idx]) : null,
          correctIndices: q.correctAnswers || null,
          isCorrect: isCorrect
        });
        
        // Attendre avant de passer à la question suivante
        await askQuestion('\nAppuyez sur Entrée pour continuer...');
      }
    }

    // Calculer le score
    const questionsWithAnswers = results.filter(r => r.correctIndices !== null);
    const correctCount = results.filter(r => r.isCorrect === true).length;
    const totalScored = questionsWithAnswers.length;
    const score = totalScored > 0 ? ((correctCount / totalScored) * 100).toFixed(1) : 0;

    // Afficher le résumé
    clearConsole();
    console.log('\n=== Résumé du QCM ===\n');
    console.log(`Nombre de questions répondues: ${results.length}`);
    
    if (totalScored > 0) {
      console.log(`\n📊 Score: ${correctCount}/${totalScored} (${score}%)`);
      console.log(`✅ Bonnes réponses: ${correctCount}`);
      console.log(`❌ Mauvaises réponses: ${totalScored - correctCount}`);
    }

    // Afficher toutes les réponses
    console.log('\n' + '='.repeat(60));
    console.log('\nDétail des réponses:\n');
    results.forEach((result, index) => {
      console.log(`${index + 1}. ${result.question}`);
      
      // Afficher les réponses sélectionnées (peut être une ou plusieurs)
      if (result.selectedAnswers && result.selectedAnswers.length > 0) {
        if (result.selectedAnswers.length === 1) {
          console.log(`   Vos réponses: ${result.selectedAnswers[0]}`);
        } else {
          console.log(`   Vos réponses: ${result.selectedAnswers.join(', ')}`);
        }
      } else if (result.selectedAnswer) {
        // Compatibilité avec l'ancien format
        console.log(`   Votre réponse: ${result.selectedAnswer}`);
      }
      
      if (result.correctAnswers !== null) {
        if (result.correctAnswers.length === 1) {
          console.log(`   Bonne réponse: ${result.correctAnswers[0]}`);
        } else {
          console.log(`   Bonnes réponses: ${result.correctAnswers.join(', ')}`);
        }
        console.log(`   ${result.isCorrect ? '✅ Correct' : '❌ Incorrect'}`);
      }
      console.log('');
    });

    // Option pour sauvegarder les résultats
    const save = await askQuestion('Voulez-vous sauvegarder vos réponses dans un fichier? (o/n): ');
    if (save && (save.toLowerCase().trim() === 'o' || save.toLowerCase().trim() === 'oui')) {
      const filename = `reponses_${Date.now()}.json`;
      const saveData = {
        date: new Date().toISOString(),
        score: totalScored > 0 ? {
          correct: correctCount,
          total: totalScored,
          percentage: parseFloat(score)
        } : null,
        results: results
      };
      fs.writeFileSync(filename, JSON.stringify(saveData, null, 2), 'utf8');
      console.log(`\n✅ Réponses sauvegardées dans ${filename}`);
    }

    console.log('\nMerci d\'avoir participé au QCM!\n');
    rl.close();

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    if (error.stack) {
      console.error('Détails:', error.stack);
    }
    rl.close();
  }
}

// Démarrer le QCM
runQCM();

