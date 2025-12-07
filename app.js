// Configuration
let questions = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
let currentQuestionIndex = 0;
let results = [];
let randomMode = false;
let showAnswersImmediately = false;
let shuffledQuestions = [];

// Éléments DOM
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const summaryScreen = document.getElementById('summary-screen');

// Fonction pour afficher un écran
function showScreen(screenName) {
    [startScreen, questionScreen, summaryScreen].forEach(screen => screen.classList.add('hidden'));
    if (screenName === 'start') startScreen.classList.remove('hidden');
    else if (screenName === 'question') questionScreen.classList.remove('hidden');
    else if (screenName === 'summary') summaryScreen.classList.remove('hidden');
}

// Charger les questions
function loadQuestions() {
    try {
        // Les questions sont déjà chargées depuis questions.js
        if (typeof QUESTIONS !== 'undefined') {
            questions = QUESTIONS;
        } else {
            // Fallback: essayer de charger depuis l'API ou le fichier JSON
            fetch('/api/questions')
                .then(response => response.ok ? response.json() : fetch('questions.json').then(r => r.json()))
                .then(data => {
                    questions = data;
                    updateQuestionsDisplay();
                })
                .catch(error => {
                    console.error('Erreur:', error);
                    document.getElementById('total-questions').textContent = `Erreur: ${error.message}`;
                    document.getElementById('total-questions').classList.add('text-red-500');
                });
            return;
        }
        
        if (!questions || questions.length === 0) {
            throw new Error('Aucune question disponible');
        }
        
        updateQuestionsDisplay();
        console.log('Questions chargées avec succès:', questions.length);
    } catch (error) {
        console.error('Erreur lors du chargement des questions:', error);
        const totalQuestionsEl = document.getElementById('total-questions');
        totalQuestionsEl.textContent = `Erreur: ${error.message}`;
        totalQuestionsEl.classList.add('text-red-500');
    }
}

function updateQuestionsDisplay() {
    document.getElementById('total-questions').textContent = `${questions.length} questions disponibles`;
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
    showScreen('question');
    
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
        answerDiv.className = 'p-5 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-500 hover:bg-purple-50 flex items-center gap-4 bg-white';
        answerDiv.dataset.index = index;
        
        answerDiv.innerHTML = `
            <div class="w-6 h-6 border-2 border-gray-300 rounded-md flex items-center justify-center flex-shrink-0 transition-all"></div>
            <div class="flex-1 text-lg text-gray-800">${answer}</div>
        `;
        
        answerDiv.addEventListener('click', () => toggleAnswer(answerDiv, index));
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
    const checkbox = element.querySelector('div');
    const isSelected = element.classList.contains('border-purple-500');
    
    if (isSelected) {
        element.classList.remove('border-purple-500', 'bg-purple-50');
        checkbox.classList.remove('bg-purple-600', 'border-purple-600');
        checkbox.innerHTML = '';
    } else {
        element.classList.add('border-purple-500', 'bg-purple-50');
        checkbox.classList.add('bg-purple-600', 'border-purple-600');
        checkbox.innerHTML = '<span class="text-white text-sm font-bold">✓</span>';
    }
    updateSubmitButton();
}

// Mettre à jour le bouton de validation
function updateSubmitButton() {
    const selected = document.querySelectorAll('.border-purple-500.bg-purple-50');
    document.getElementById('submit-btn').disabled = selected.length === 0;
}

// Valider la réponse
function submitAnswer() {
    const selectedElements = document.querySelectorAll('.border-purple-500.bg-purple-50');
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
    resultSection.classList.remove('hidden');
    
    // Désactiver les réponses
    const answerOptions = document.querySelectorAll('[data-index]');
    answerOptions.forEach(option => {
        option.style.pointerEvents = 'none';
        option.classList.remove('cursor-pointer', 'hover:border-purple-500', 'hover:bg-purple-50');
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
        let html = '<h3 class="text-xl font-semibold mb-4" style="color: #667eea;">Bonnes réponses :</h3><ul class="list-none p-0">';
        correctIndices.forEach(idx => {
            const isSelected = selectedIndices.includes(idx);
            html += `<li class="p-3 mb-2 bg-white rounded-lg border-l-4 border-green-500">${isSelected ? '✅' : '✓'} ${q.answers[idx]}</li>`;
        });
        html += '</ul>';
        correctAnswersDisplay.innerHTML = html;
    } else {
        correctAnswersDisplay.innerHTML = '<p class="text-gray-600">Aucune bonne réponse définie pour cette question.</p>';
    }
    
    // Mettre à jour les styles des réponses
    answerOptions.forEach((option, index) => {
        const checkbox = option.querySelector('div');
        option.classList.remove('border-green-500', 'bg-green-50', 'border-red-500', 'bg-red-50', 'border-green-400', 'bg-green-100');
        
        if (selectedIndices.includes(index)) {
            if (correctIndices.includes(index)) {
                option.classList.add('border-green-500', 'bg-green-50');
                checkbox.classList.add('bg-green-500', 'border-green-500');
            } else {
                option.classList.add('border-red-500', 'bg-red-50');
                checkbox.classList.add('bg-red-500', 'border-red-500');
            }
        } else if (correctIndices.includes(index)) {
            option.classList.add('border-green-400', 'bg-green-100');
            checkbox.classList.add('bg-green-400', 'border-green-400');
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
    showScreen('summary');
    
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
        const borderColor = result.isCorrect ? 'border-green-500' : 'border-red-500';
        resultDiv.className = `p-4 mb-4 rounded-xl ${borderColor} border-l-4 bg-gray-50`;
        
        let selectedText = result.selectedAnswers.length === 1 
            ? result.selectedAnswers[0]
            : result.selectedAnswers.join(', ');
        
        resultDiv.innerHTML = `
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Question ${index + 1}: ${result.question}</h3>
            <p class="text-gray-700 mb-1"><strong>Votre réponse:</strong> ${selectedText}</p>
            ${result.correctIndices.length > 0 ? `
                <p class="text-gray-700 mb-1"><strong>Bonne(s) réponse(s):</strong> ${result.correctAnswers.join(', ')}</p>
                <p class="font-semibold">${result.isCorrect ? '✅ Correct' : '❌ Incorrect'}</p>
            ` : '<p class="text-yellow-600">⚠️ Aucune bonne réponse définie</p>'}
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

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé');
    showScreen('start');
    loadQuestions();
});

