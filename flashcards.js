// ============================================
// FLASHCARDS - DAS HAUS VOR UND NACH DEM UMZUG
// Claudia Toth · 45 substantive + verbe cu TTS
// ============================================

const flashcardsData = [
    // Etajele casei
    { de: 'der Keller', ro: 'pivnița / subsolul' },
    { de: 'die Tiefgarage', ro: 'garajul subteran' },
    { de: 'das Erdgeschoss', ro: 'parterul' },
    { de: 'der erste Stock', ro: 'etajul 1' },
    { de: 'das Dachgeschoss', ro: 'mansarda' },
    { de: 'der Dachboden', ro: 'podul' },
    { de: 'das Dach', ro: 'acoperișul' },

    // Camerele
    { de: 'der Eingang', ro: 'intrarea / holul' },
    { de: 'das Wohnzimmer', ro: 'sufrageria / livingul' },
    { de: 'das Schlafzimmer', ro: 'dormitorul' },
    { de: 'die Küche', ro: 'bucătăria' },
    { de: 'das Badezimmer', ro: 'baia' },
    { de: 'das Esszimmer', ro: 'sufrageria (pt. masă)' },
    { de: 'das Arbeitszimmer', ro: 'biroul' },
    { de: 'das Kinderzimmer', ro: 'camera copiilor' },
    { de: 'die Tür', ro: 'ușa' },

    // Mobila - dormitor
    { de: 'das Bett', ro: 'patul' },
    { de: 'der Nachttisch', ro: 'noptiera' },
    { de: 'der Schrank', ro: 'dulapul' },
    { de: 'der Spiegel', ro: 'oglinda' },
    { de: 'die Stehlampe', ro: 'lampadarul' },
    { de: 'der Kleiderständer', ro: 'cuierul de haine' },

    // Mobila - living
    { de: 'der Tisch', ro: 'masa' },
    { de: 'der Stuhl', ro: 'scaunul' },
    { de: 'das Sofa', ro: 'canapeaua' },
    { de: 'der Sessel', ro: 'fotoliul' },
    { de: 'das Bücherregal', ro: 'biblioteca (raft)' },
    { de: 'der Teppich', ro: 'covorul' },
    { de: 'das Bild', ro: 'tabloul' },
    { de: 'die Zimmerpflanze', ro: 'planta de cameră' },
    { de: 'der Karton', ro: 'cartonul / cutia' },

    // Aparate
    { de: 'der Kühlschrank', ro: 'frigiderul' },
    { de: 'der Herd', ro: 'aragazul' },
    { de: 'der Fernseher', ro: 'televizorul' },
    { de: 'der DVD-Player', ro: 'player-ul DVD' },
    { de: 'die Waschmaschine', ro: 'mașina de spălat' },
    { de: 'die Mikrowelle', ro: 'cuptorul cu microunde' },

    // Verbe pentru mutat
    { de: 'umziehen', ro: 'a se muta' },
    { de: 'einpacken', ro: 'a împacheta' },
    { de: 'auspacken', ro: 'a despacheta' },
    { de: 'tragen', ro: 'a căra / a purta' },
    { de: 'stellen', ro: 'a pune (vertical)' },
    { de: 'legen', ro: 'a așeza (orizontal)' },
    { de: 'hängen', ro: 'a atârna' },
    { de: 'helfen', ro: 'a ajuta (+ Dativ)' }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} cuvinte — casă, mobilă, aparate, verbe.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(card.de);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Te rog folosește Chrome, Edge sau Safari.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
