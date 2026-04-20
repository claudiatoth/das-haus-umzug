// ============================================
// TEST FINAL - Das Haus vor und nach dem Umzug
// Claudia Toth · 20 întrebări mixte
// ============================================

const finalTestData = [
    // Articol (der/die/das) - matching
    { type: 'matching', category: '🎯 Articol', question: 'Care articol?', nomen: 'Schrank', options: ['der', 'die', 'das'], correct: 'der', explanation: 'der Schrank (dulapul) — masculin' },
    { type: 'matching', category: '🎯 Articol', question: 'Care articol?', nomen: 'Bett', options: ['der', 'die', 'das'], correct: 'das', explanation: 'das Bett (patul) — neutru' },
    { type: 'matching', category: '🎯 Articol', question: 'Care articol?', nomen: 'Küche', options: ['der', 'die', 'das'], correct: 'die', explanation: 'die Küche (bucătăria) — feminin' },
    { type: 'matching', category: '🎯 Articol', question: 'Care articol?', nomen: 'Wohnzimmer', options: ['der', 'die', 'das'], correct: 'das', explanation: 'Toate -zimmer sunt das (neutru)' },
    { type: 'matching', category: '🎯 Articol', question: 'Care articol?', nomen: 'Waschmaschine', options: ['der', 'die', 'das'], correct: 'die', explanation: 'Toate -maschine sunt die' },

    // Camere
    { type: 'multiple', category: '🏠 Camere', question: 'Unde pui frigiderul?', options: ['in die Küche', 'ins Schlafzimmer', 'ins Badezimmer'], correct: 'in die Küche', explanation: 'Frigiderul e în bucătărie.' },
    { type: 'multiple', category: '🏠 Camere', question: 'Unde pui patul?', options: ['in die Küche', 'ins Schlafzimmer', 'ins Wohnzimmer'], correct: 'ins Schlafzimmer', explanation: 'Patul e în dormitor.' },
    { type: 'multiple', category: '🏠 Camere', question: 'Unde pui canapeaua?', options: ['ins Schlafzimmer', 'ins Wohnzimmer', 'ins Badezimmer'], correct: 'ins Wohnzimmer', explanation: 'Canapeaua e în living.' },

    // Lückentext
    { type: 'luckentext', category: '📝 Lückentext', question: 'Completează verbul:', sentence: 'Wir ______ in ein neues Haus.', translation: 'Ne mutăm într-o casă nouă.', accept: ['ziehen um', 'umziehen'], correct: 'ziehen um', explanation: '„umziehen" — verb separabil: „wir ziehen um"' },
    { type: 'luckentext', category: '📝 Lückentext', question: 'Completează articolul:', sentence: '______ Schrank ist sehr schwer.', translation: 'Dulapul e foarte greu.', accept: ['der'], correct: 'Der', explanation: 'der Schrank — masculin' },
    { type: 'luckentext', category: '📝 Lückentext', question: 'Completează prepoziția:', sentence: 'Das Bild hängt ______ der Wand.', translation: 'Tabloul atârnă pe perete.', accept: ['an'], correct: 'an', explanation: '„an der Wand" — lipit de perete' },
    { type: 'luckentext', category: '📝 Lückentext', question: 'Completează articolul:', sentence: 'Ich wohne im ______ Stock.', translation: 'Locuiesc la etajul 1.', accept: ['ersten'], correct: 'ersten', explanation: '„im ersten Stock" — la etajul 1' },

    // Multiple choice - prepoziții
    { type: 'multiple', category: '📍 Prepoziții', question: 'Der Teppich liegt ___ dem Boden.', options: ['auf', 'unter', 'neben'], correct: 'auf', explanation: 'Covorul e pe podea.' },
    { type: 'multiple', category: '📍 Prepoziții', question: 'Das Bett steht ___ dem Nachttisch.', options: ['auf', 'zwischen', 'neben'], correct: 'neben', explanation: 'Patul e lângă noptieră.' },
    { type: 'multiple', category: '📍 Prepoziții', question: 'Die Schuhe sind ___ dem Bett.', options: ['auf', 'unter', 'vor'], correct: 'unter', explanation: 'Pantofii sunt sub pat.' },

    // Traducere
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Unde e baia?', accept: ['wo ist das badezimmer?', 'wo ist das badezimmer'], correct: 'Wo ist das Badezimmer?', explanation: 'das Badezimmer — baia' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Poți să mă ajuți?', accept: ['kannst du mir helfen?', 'kannst du mir helfen'], correct: 'Kannst du mir helfen?', explanation: '„helfen" cere Dativ — de-aia „mir", nu „mich"' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Dulapul e în dormitor.', accept: ['der schrank ist im schlafzimmer.', 'der schrank ist im schlafzimmer'], correct: 'Der Schrank ist im Schlafzimmer.', explanation: '„im Schlafzimmer" = în dormitor (Dativ)' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Mulțumesc pentru ajutor!', accept: ['danke für deine hilfe!', 'danke für deine hilfe', 'danke fuer deine hilfe!', 'danke fuer deine hilfe'], correct: 'Danke für deine Hilfe!', explanation: '„die Hilfe" — ajutorul' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>20 de întrebări mixte</strong> (articol, cameră, prepoziții, Lückentext, traducere).</p>
            <ul class="test-info-list">
                <li>📋 <strong>Format:</strong> o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ <strong>Verificare:</strong> feedback instant la fiecare întrebare</li>
                <li>🎓 <strong>Prag de promovare:</strong> 70%</li>
                <li>⏱️ <strong>Timp estimat:</strong> 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'matching') {
        let optionsHTML = '<option value="">-- alege articolul --</option>';
        q.options.forEach(opt => { optionsHTML += `<option value="${opt}">${opt}</option>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">_____ <span class="nomen-highlight">${q.nomen}</span></div><select id="test-answer" class="test-input">${optionsHTML}</select></div>`;
    } else if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple' || q.type === 'matching') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userAnswerNorm = userAnswer.toLowerCase().replace(/\s+/g, ' ');
        isCorrect = q.accept.some(a => a.toLowerCase() === userAnswerNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) {
        emoji = '🏆'; badge = 'PERFEKT!';
        message = 'Ausgezeichnet! Du kennst das Haus-Vokabular perfekt.';
        messageRo = 'Excelent! Stăpânești perfect vocabularul casei.';
    } else if (percentage >= 90) {
        emoji = '⭐'; badge = 'AUSGEZEICHNET';
        message = 'Sehr gut! Du hast fast alles richtig gemacht.';
        messageRo = 'Foarte bine! Aproape totul corect.';
    } else if (percentage >= 80) {
        emoji = '🎓'; badge = 'SEHR GUT';
        message = 'Sehr gute Leistung!';
        messageRo = 'Performanță foarte bună!';
    } else if (percentage >= 70) {
        emoji = '✅'; badge = 'BESTANDEN';
        message = 'Bestanden! Mai exersează puțin pentru perfecțiune.';
        messageRo = 'Promovat! Mai exersează puțin pentru perfecțiune.';
    } else if (percentage >= 50) {
        emoji = '📚'; badge = 'NICHT BESTANDEN';
        message = 'Leider nicht bestanden. Wiederhole die Theorie!';
        messageRo = 'Din păcate, nepromovat. Repetă teoria!';
    } else {
        emoji = '💪'; badge = 'WEITER ÜBEN';
        message = 'Mehr Übung ist nötig. Geh zurück zur Theorie!';
        messageRo = 'E nevoie de mai multă exersare!';
    }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite (revezi):</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #6b7280;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() { buildFinalTest(); });
