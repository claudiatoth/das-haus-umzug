// ============================================
// EXERCIȚII - DAS HAUS VOR UND NACH DEM UMZUG
// Claudia Toth · 5 exerciții interactive
// ============================================

// ============================================
// EXERCIȚIUL 1: Articol (der / die / das)
// ============================================
const ex1Data = [
    { id: 'a', word: 'Schrank', ro: 'dulap', correct: 'der' },
    { id: 'b', word: 'Bett', ro: 'pat', correct: 'das' },
    { id: 'c', word: 'Küche', ro: 'bucătărie', correct: 'die' },
    { id: 'd', word: 'Tisch', ro: 'masă', correct: 'der' },
    { id: 'e', word: 'Stuhl', ro: 'scaun', correct: 'der' },
    { id: 'f', word: 'Tür', ro: 'ușă', correct: 'die' },
    { id: 'g', word: 'Bild', ro: 'tablou', correct: 'das' },
    { id: 'h', word: 'Teppich', ro: 'covor', correct: 'der' },
    { id: 'i', word: 'Stehlampe', ro: 'lampadar', correct: 'die' },
    { id: 'j', word: 'Fernseher', ro: 'televizor', correct: 'der' },
    { id: 'k', word: 'Kühlschrank', ro: 'frigider', correct: 'der' },
    { id: 'l', word: 'Badezimmer', ro: 'baie', correct: 'das' },
    { id: 'm', word: 'Keller', ro: 'pivniță', correct: 'der' },
    { id: 'n', word: 'Zimmerpflanze', ro: 'plantă de cameră', correct: 'die' },
    { id: 'o', word: 'Bücherregal', ro: 'raft de cărți', correct: 'das' }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Wählen Sie den richtigen Artikel.</strong><br>
            Alegeți articolul corect: <em>der</em> (masculin), <em>die</em> (feminin), <em>das</em> (neutru).
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>_____ <span class="nomen-highlight">${item.word}</span> <small style="color:#6b7280;">(${item.ro})</small></label>
                    <input type="text" id="ex1-${item.id}" placeholder="der / die / das">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const feedback = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase();
        if (userAnswer === item.correct.toLowerCase()) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} ${item.word}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} ${item.word}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Lückentext
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Wir ________ in ein neues Haus.', correct: 'ziehen um', accept: ['ziehen um', 'umziehen'], translation: 'Ne mutăm într-o casă nouă.' },
    { id: 'b', sentence: 'Peter ________ den schweren Schrank.', correct: 'trägt', accept: ['trägt', 'traegt'], translation: 'Peter cară dulapul greu.' },
    { id: 'c', sentence: 'Das Bild ________ an der Wand.', correct: 'hängt', accept: ['hängt', 'haengt'], translation: 'Tabloul atârnă pe perete.' },
    { id: 'd', sentence: 'Ich ________ das Bett ins Schlafzimmer.', correct: 'stelle', accept: ['stelle'], translation: 'Pun patul în dormitor.' },
    { id: 'e', sentence: 'Kannst du mir ________?', correct: 'helfen', accept: ['helfen'], translation: 'Poți să mă ajuți?' },
    { id: 'f', sentence: 'Wir ________ die Bücher aus dem Karton ________.', correct: 'packen ... aus', accept: ['packen ... aus', 'packen aus', 'packenaus'], translation: 'Despachetăm cărțile din cutie.' },
    { id: 'g', sentence: 'Das Sofa ________ im Wohnzimmer.', correct: 'steht', accept: ['steht'], translation: 'Canapeaua stă în living.' },
    { id: 'h', sentence: 'Wo ________ der Kühlschrank?', correct: 'ist', accept: ['ist', 'steht'], translation: 'Unde e frigiderul?' }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Ergänzen Sie das passende Verb.</strong><br>
            Completați cu verbul potrivit, la forma corectă.
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex2-${item.id}" placeholder="Scrie verbul...">
                    <small style="color: #6b7280; font-style: italic;">💬 ${item.translation}</small>
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const feedback = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
        if (item.accept.some(a => a.toLowerCase() === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Multiple Choice — În ce cameră?
// ============================================
const ex3Data = [
    { id: 'a', question: 'Wohin kommt der Kühlschrank?', options: ['ins Schlafzimmer', 'in die Küche', 'ins Badezimmer'], correct: 'in die Küche', explanation: 'Frigiderul stă în bucătărie.' },
    { id: 'b', question: 'Wohin kommt das Bett?', options: ['ins Wohnzimmer', 'in die Küche', 'ins Schlafzimmer'], correct: 'ins Schlafzimmer', explanation: 'Patul stă în dormitor.' },
    { id: 'c', question: 'Wohin kommt der Fernseher?', options: ['ins Badezimmer', 'ins Wohnzimmer', 'in die Küche'], correct: 'ins Wohnzimmer', explanation: 'Televizorul e în living.' },
    { id: 'd', question: 'Wohin kommt der Spiegel?', options: ['ins Badezimmer', 'in die Küche', 'in den Keller'], correct: 'ins Badezimmer', explanation: 'Oglinda e în baie (sau în hol).' },
    { id: 'e', question: 'Wohin kommt der Herd?', options: ['ins Schlafzimmer', 'in die Küche', 'ins Wohnzimmer'], correct: 'in die Küche', explanation: 'Aragazul e în bucătărie.' },
    { id: 'f', question: 'Wohin kommt das Sofa?', options: ['ins Wohnzimmer', 'ins Schlafzimmer', 'in den Dachboden'], correct: 'ins Wohnzimmer', explanation: 'Canapeaua e în living.' },
    { id: 'g', question: 'Wohin kommt die Waschmaschine?', options: ['in die Küche', 'in den Keller', 'ins Wohnzimmer'], correct: 'in den Keller', explanation: 'Mașina de spălat e în pivniță (sau în baie).' },
    { id: 'h', question: 'Wohin kommt der Kleiderständer?', options: ['in den Eingang', 'ins Badezimmer', 'in die Küche'], correct: 'in den Eingang', explanation: 'Cuierul de haine stă la intrare.' }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Wählen Sie die richtige Antwort.</strong><br>
            În ce cameră se pune fiecare obiect?
        </div>
    `;
    ex3Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex3-${item.id}" value="${opt}" id="ex3-${item.id}-${i}">
                    <label for="ex3-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex3-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = selected ? selected.value : '';
        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} — ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: Prepoziții de loc
// ============================================
const ex4Data = [
    { id: 'a', question: 'Das Bett steht ___ dem Nachttisch.', options: ['neben', 'unter', 'auf'], correct: 'neben', explanation: 'Patul stă lângă noptieră.' },
    { id: 'b', question: 'Der Teppich liegt ___ dem Boden.', options: ['auf', 'unter', 'neben'], correct: 'auf', explanation: 'Covorul e pe podea.' },
    { id: 'c', question: 'Das Bild hängt ___ der Wand.', options: ['auf', 'an', 'in'], correct: 'an', explanation: 'Tabloul atârnă pe perete (an = lipit de perete).' },
    { id: 'd', question: 'Die Lampe steht ___ dem Tisch.', options: ['auf', 'unter', 'hinter'], correct: 'auf', explanation: 'Lampa e pe masă.' },
    { id: 'e', question: 'Wir wohnen ___ ersten Stock.', options: ['im', 'auf', 'unter'], correct: 'im', explanation: '„im ersten Stock" = la etajul 1.' },
    { id: 'f', question: 'Der Kühlschrank steht ___ der Küche.', options: ['in', 'auf', 'an'], correct: 'in', explanation: 'Frigiderul e în bucătărie.' },
    { id: 'g', question: 'Die Schuhe sind ___ dem Bett.', options: ['auf', 'unter', 'neben'], correct: 'unter', explanation: '„unter dem Bett" = sub pat.' },
    { id: 'h', question: 'Der Stuhl steht ___ dem Tisch und dem Sofa.', options: ['zwischen', 'neben', 'hinter'], correct: 'zwischen', explanation: '„zwischen" = între (două obiecte).' }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Welche Präposition passt?</strong><br>
            Alegeți prepoziția potrivită: <em>in, auf, unter, neben, hinter, vor, zwischen, an, im</em>.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex4-${item.id}" value="${opt}" id="ex4-${item.id}-${i}">
                    <label for="ex4-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex4-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = selected ? selected.value : '';
        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} — ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Traducere RO → DE
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Patul e în dormitor.', correct: 'Das Bett ist im Schlafzimmer.', accept: ['das bett ist im schlafzimmer.', 'das bett ist im schlafzimmer'] },
    { id: 'b', ro: 'Unde e bucătăria?', correct: 'Wo ist die Küche?', accept: ['wo ist die küche?', 'wo ist die küche', 'wo ist die kueche?', 'wo ist die kueche'] },
    { id: 'c', ro: 'Cutia e grea.', correct: 'Der Karton ist schwer.', accept: ['der karton ist schwer.', 'der karton ist schwer'] },
    { id: 'd', ro: 'Canapeaua merge în living.', correct: 'Das Sofa kommt ins Wohnzimmer.', accept: ['das sofa kommt ins wohnzimmer.', 'das sofa kommt ins wohnzimmer'] },
    { id: 'e', ro: 'Poți să mă ajuți?', correct: 'Kannst du mir helfen?', accept: ['kannst du mir helfen?', 'kannst du mir helfen'] },
    { id: 'f', ro: 'Mașina de spălat e în pivniță.', correct: 'Die Waschmaschine ist im Keller.', accept: ['die waschmaschine ist im keller.', 'die waschmaschine ist im keller'] },
    { id: 'g', ro: 'Locuiesc la etajul 1.', correct: 'Ich wohne im ersten Stock.', accept: ['ich wohne im ersten stock.', 'ich wohne im ersten stock'] },
    { id: 'h', ro: 'Mulțumesc pentru ajutor!', correct: 'Danke für deine Hilfe!', accept: ['danke für deine hilfe!', 'danke für deine hilfe', 'danke fuer deine hilfe!', 'danke fuer deine hilfe'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Übersetzen Sie ins Deutsche.</strong><br>
            Traduceți în germană folosind vocabularul învățat.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>🇷🇴 ${item.ro}</label>
                    <input type="text" id="ex5-${item.id}" placeholder="Traducere în germană...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const feedback = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
        if (item.accept.some(a => a === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// BUILD
document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
