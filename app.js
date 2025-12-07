// Configuration
let questions = [];
let currentQuestionIndex = 0;
let results = [];
let randomMode = false;
let showAnswersImmediately = false;
let shuffledQuestions = [];

// Éléments DOM
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const summaryScreen = document.getElementById('summary-screen');

// Charger les questions
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
        document.getElementById('total-questions').textContent = `${questions.length} questions disponibles`;
    } catch (error) {
        console.error('Erreur lors du chargement des questions:', error);
        alert('Erreur lors du chargement des questions. Vérifiez que le fichier questions.json est présent.');
    }
}

// Mélanger les questions (Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Démarrer le QCM
function startQCM() {
    randomMode = document.getElementById('random-mode').checked;
    showAnswersImmediately = document.getElementById('show-answers').checked;
    
    if (randomMode) {
        shuffledQuestions = questions.map((q, index) => ({ question: q, originalIndex: index }));
        shuffledQuestions = shuffleArray(shuffledQuestions);
    } else {
        shuffledQuestions = questions.map((q, index) => ({ question: q, originalIndex: index }));
    }
    
    currentQuestionIndex = 0;
    results = [];
    showQuestion();
}

// Afficher une question
function showQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showSummary();
        return;
    }
    
    const { question: q, originalIndex } = shuffledQuestions[currentQuestionIndex];
    
    // Mettre à jour l'écran
    startScreen.classList.remove('active');
    summaryScreen.classList.remove('active');
    questionScreen.classList.add('active');
    
    // Cacher la section de résultat
    document.getElementById('result-section').style.display = 'none';
    
    // Mettre à jour le header
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions-display').textContent = shuffledQuestions.length;
    
    if (randomMode) {
        document.getElementById('original-number').textContent = `(Originale: #${originalIndex + 1})`;
    } else {
        document.getElementById('original-number').textContent = '';
    }
    
    // Afficher la question
    document.getElementById('question-text').textContent = q.question;
    
    // Afficher les réponses
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    q.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.dataset.index = index;
        
        answerDiv.innerHTML = `
            <div class="answer-checkbox"></div>
            <div class="answer-text">${answer}</div>
        `;
        
        answerDiv.addEventListener('click', () => toggleAnswer(answerDiv, index));
        answerDiv.style.pointerEvents = 'auto';
        answersContainer.appendChild(answerDiv);
    });
    
    // Réinitialiser les boutons
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    submitBtn.disabled = true;
    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
}

// Toggle une réponse
function toggleAnswer(element, index) {
    element.classList.toggle('selected');
    updateSubmitButton();
}

// Mettre à jour le bouton de validation
function updateSubmitButton() {
    const selected = document.querySelectorAll('.answer-option.selected');
    document.getElementById('submit-btn').disabled = selected.length === 0;
}

// Valider la réponse
function submitAnswer() {
    const selectedElements = document.querySelectorAll('.answer-option.selected');
    const selectedIndices = Array.from(selectedElements).map(el => parseInt(el.dataset.index));
    
    const { question: q } = shuffledQuestions[currentQuestionIndex];
    const correctIndices = q.correctAnswers || [];
    
    // Vérifier si correct
    const correctSorted = [...correctIndices].sort((a, b) => a - b);
    const selectedSorted = [...selectedIndices].sort((a, b) => a - b);
    const isCorrect = correctIndices.length > 0 && 
                     selectedSorted.length === correctSorted.length &&
                     selectedSorted.every((val, idx) => val === correctSorted[idx]);
    
    // Sauvegarder le résultat
    results.push({
        question: q.question,
        selectedIndices: selectedIndices,
        selectedAnswers: selectedIndices.map(idx => q.answers[idx]),
        correctIndices: correctIndices,
        correctAnswers: correctIndices.map(idx => q.answers[idx]),
        isCorrect: isCorrect
    });
    
    // Afficher le résultat
    if (showAnswersImmediately) {
        showResult(isCorrect, q, selectedIndices, correctIndices);
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex >= shuffledQuestions.length) {
            showSummary();
        } else {
            showQuestion();
        }
    }
}

// Afficher le résultat
function showResult(isCorrect, q, selectedIndices, correctIndices) {
    const resultSection = document.getElementById('result-section');
    const resultIcon = document.getElementById('result-icon');
    const resultMessage = document.getElementById('result-message');
    const correctAnswersDisplay = document.getElementById('correct-answers-display');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Afficher la section de résultat
    resultSection.style.display = 'block';
    
    // Désactiver les réponses
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Afficher le résultat
    if (isCorrect) {
        resultIcon.textContent = '✅';
        resultMessage.textContent = 'Correct !';
        resultMessage.style.color = '#4caf50';
    } else {
        resultIcon.textContent = '❌';
        resultMessage.textContent = 'Incorrect';
        resultMessage.style.color = '#f44336';
    }
    
    // Afficher les bonnes réponses
    if (correctIndices.length > 0) {
        let html = '<h3>Bonnes réponses :</h3><ul>';
        correctIndices.forEach(idx => {
            const isSelected = selectedIndices.includes(idx);
            html += `<li>${isSelected ? '✅' : '✓'} ${q.answers[idx]}</li>`;
        });
        html += '</ul>';
        correctAnswersDisplay.innerHTML = html;
    } else {
        correctAnswersDisplay.innerHTML = '<p>Aucune bonne réponse définie pour cette question.</p>';
    }
    
    // Mettre à jour les styles des réponses
    answerOptions.forEach((option, index) => {
        option.classList.remove('correct', 'incorrect', 'should-be-selected');
        
        if (selectedIndices.includes(index)) {
            if (correctIndices.includes(index)) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
        } else if (correctIndices.includes(index)) {
            option.classList.add('should-be-selected');
        }
    });
    
    // Changer les boutons
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
}

// Passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showSummary();
    } else {
        showQuestion();
    }
}

// Afficher le résumé
function showSummary() {
    questionScreen.classList.remove('active');
    summaryScreen.classList.add('active');
    
    const questionsWithAnswers = results.filter(r => r.correctIndices.length > 0);
    const correctCount = results.filter(r => r.isCorrect).length;
    const totalScored = questionsWithAnswers.length;
    const score = totalScored > 0 ? ((correctCount / totalScored) * 100).toFixed(1) : 0;
    
    // Afficher le score
    document.getElementById('score-percentage').textContent = score + '%';
    document.getElementById('score-text').textContent = `${correctCount} / ${totalScored}`;
    document.getElementById('correct-count').textContent = `✅ ${correctCount} bonnes réponses`;
    document.getElementById('incorrect-count').textContent = `❌ ${totalScored - correctCount} mauvaises réponses`;
    
    // Afficher la liste des résultats
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';
    
    results.forEach((result, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
        
        let selectedText = result.selectedAnswers.length === 1 
            ? result.selectedAnswers[0]
            : result.selectedAnswers.join(', ');
        
        resultDiv.innerHTML = `
            <h3>Question ${index + 1}: ${result.question}</h3>
            <p><strong>Votre réponse:</strong> ${selectedText}</p>
            ${result.correctIndices.length > 0 ? `
                <p><strong>Bonne(s) réponse(s):</strong> ${result.correctAnswers.join(', ')}</p>
                <p>${result.isCorrect ? '✅ Correct' : '❌ Incorrect'}</p>
            ` : '<p>⚠️ Aucune bonne réponse définie</p>'}
        `;
        
        resultsList.appendChild(resultDiv);
    });
}

// Télécharger les résultats
function downloadResults() {
    const questionsWithAnswers = results.filter(r => r.correctIndices.length > 0);
    const correctCount = results.filter(r => r.isCorrect).length;
    const totalScored = questionsWithAnswers.length;
    const score = totalScored > 0 ? ((correctCount / totalScored) * 100).toFixed(1) : 0;
    
    const data = {
        date: new Date().toISOString(),
        score: totalScored > 0 ? {
            correct: correctCount,
            total: totalScored,
            percentage: parseFloat(score)
        } : null,
        results: results
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qcm-results-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Événements
document.getElementById('start-btn').addEventListener('click', startQCM);
document.getElementById('submit-btn').addEventListener('click', submitAnswer);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('quit-btn').addEventListener('click', () => {
    if (confirm('Êtes-vous sûr de vouloir quitter ? Votre progression sera perdue.')) {
        location.reload();
    }
});
document.getElementById('restart-btn').addEventListener('click', () => {
    location.reload();
});
document.getElementById('download-btn').addEventListener('click', downloadResults);

// Charger les questions au démarrage
loadQuestions();

