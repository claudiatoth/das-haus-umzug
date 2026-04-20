// ============================================
// TEORIE - DAS HAUS VOR UND NACH DEM UMZUG
// Claudia Toth · Nivel A1
// ============================================

const theoryHTML = `
    <!-- 0: Introducere -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Was ist ein Umzug? (Ce este o mutare?)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-verbe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Definiție</h4>
                <p><strong>Der Umzug</strong> (pl. <em>die Umzüge</em>) = mutatul într-o locuință nouă.</p>
                <p style="margin-top: 10px;">În germană, pentru a descrie mutatul folosim verbul <strong style="color: #059669;">umziehen</strong> (a se muta) și câteva verbe asociate. Această lecție îți dă <strong>vocabularul complet</strong> pentru a descrie o casă și acțiunile legate de mutat — la nivel A1.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Sens</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">umziehen</td><td>a se muta</td><td><em>Ich ziehe nach Berlin um.</em> (Mă mut la Berlin.)</td></tr>
                    <tr><td class="verb">einpacken</td><td>a împacheta</td><td><em>Wir packen die Bücher ein.</em> (Împachetăm cărțile.)</td></tr>
                    <tr><td class="verb">auspacken</td><td>a despacheta</td><td><em>Ich packe den Karton aus.</em> (Desfac cutia.)</td></tr>
                    <tr><td class="verb">tragen</td><td>a purta / a căra</td><td><em>Er trägt den Schrank.</em> (El cară dulapul.)</td></tr>
                    <tr><td class="verb">stellen</td><td>a pune (vertical)</td><td><em>Ich stelle den Stuhl hier.</em> (Pun scaunul aici.)</td></tr>
                    <tr><td class="verb">legen</td><td>a așeza (orizontal)</td><td><em>Leg das Buch auf den Tisch.</em> (Pune cartea pe masă.)</td></tr>
                    <tr><td class="verb">hängen</td><td>a atârna</td><td><em>Ich hänge das Bild an die Wand.</em> (Atârn tabloul pe perete.)</td></tr>
                    <tr><td class="verb">helfen</td><td>a ajuta (+ Dativ)</td><td><em>Kannst du mir helfen?</em> (Poți să mă ajuți?)</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 1: Etajele casei -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🏠 2. Die Stockwerke (Etajele casei)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-etaje.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <p>O casă germană are de obicei <strong>5 niveluri</strong>, de jos în sus:</p>
            <table class="theory-table">
                <thead><tr><th>Germană</th><th>Română</th><th>Poziție</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Keller</td><td>pivnița / subsolul</td><td>sub pământ</td></tr>
                    <tr><td class="verb">die Tiefgarage</td><td>garajul subteran</td><td>sub pământ</td></tr>
                    <tr><td class="verb">das Erdgeschoss</td><td>parterul</td><td>la sol</td></tr>
                    <tr><td class="verb">der erste Stock</td><td>etajul 1</td><td>primul etaj</td></tr>
                    <tr><td class="verb">das Dachgeschoss</td><td>mansarda</td><td>sub acoperiș</td></tr>
                    <tr><td class="verb">der Dachboden</td><td>podul</td><td>direct sub acoperiș</td></tr>
                    <tr><td class="verb">das Dach</td><td>acoperișul</td><td>deasupra</td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Atenție</h4>
                <ul>
                    <li>În Germania, „parter" = <strong>das Erdgeschoss (EG)</strong>, nu „etajul 0".</li>
                    <li>„Etajul 1" din Germania = etajul 2 din România (dacă numărăm parterul ca 1).</li>
                    <li><em>der Dachboden</em> e spațiul de depozitare sub acoperiș; <em>das Dachgeschoss</em> e mansarda amenajată (cu camere).</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 2: Camerele -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🚪 3. Die Zimmer (Camerele casei)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-camere.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="theory-table">
                <thead><tr><th>Germană</th><th>Română</th><th>Ce găsim aici</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Eingang</td><td>intrarea / holul</td><td>die Tür, der Kleiderständer</td></tr>
                    <tr><td class="verb">das Wohnzimmer</td><td>sufrageria / livingul</td><td>das Sofa, der Fernseher, der Teppich</td></tr>
                    <tr><td class="verb">das Schlafzimmer</td><td>dormitorul</td><td>das Bett, der Nachttisch, der Schrank</td></tr>
                    <tr><td class="verb">die Küche</td><td>bucătăria</td><td>der Herd, der Kühlschrank, der Tisch</td></tr>
                    <tr><td class="verb">das Badezimmer</td><td>baia</td><td>der Spiegel, die Dusche</td></tr>
                    <tr><td class="verb">das Esszimmer</td><td>sufrageria (camera de luat masa)</td><td>der Tisch, die Stühle</td></tr>
                    <tr><td class="verb">das Arbeitszimmer</td><td>biroul</td><td>der Schreibtisch, das Bücherregal</td></tr>
                    <tr><td class="verb">das Kinderzimmer</td><td>camera copiilor</td><td>das Bett, das Spielzeug</td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Truc de memorare</h4>
                <p><strong>„-zimmer"</strong> = cameră. Toate <em>Zimmer</em> sunt <strong>das</strong> (neutru). <br>Deci: das Wohnzimmer, das Schlafzimmer, das Kinderzimmer, das Arbeitszimmer...</p>
                <p style="margin-top: 8px;"><strong>Excepție:</strong> <em>die Küche</em> (bucătăria) e feminin.</p>
            </div>
        </div>
    </div>

    <!-- 3: Mobila - dormitor + hol -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🛏️ 4. Möbel — Schlafzimmer &amp; Eingang</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-mobila-schlafzimmer.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="theory-table">
                <thead><tr><th>Germană</th><th>Română</th><th>Unde e</th></tr></thead>
                <tbody>
                    <tr><td class="verb">das Bett</td><td>patul</td><td>das Schlafzimmer</td></tr>
                    <tr><td class="verb">der Nachttisch</td><td>noptiera</td><td>das Schlafzimmer</td></tr>
                    <tr><td class="verb">der Schrank</td><td>dulapul</td><td>das Schlafzimmer</td></tr>
                    <tr><td class="verb">der Spiegel</td><td>oglinda</td><td>das Badezimmer / Flur</td></tr>
                    <tr><td class="verb">die Stehlampe</td><td>lampadarul</td><td>das Wohnzimmer</td></tr>
                    <tr><td class="verb">der Kleiderständer</td><td>cuierul de haine</td><td>der Eingang</td></tr>
                    <tr><td class="verb">die Tür</td><td>ușa</td><td>peste tot</td></tr>
                </tbody>
            </table>
            <div class="example-box">
                <p class="de"><strong>Das Bett</strong> steht im <strong>Schlafzimmer</strong>, neben dem <strong>Nachttisch</strong>.</p>
                <p class="ro">Patul stă în dormitor, lângă noptieră.</p>
            </div>
        </div>
    </div>

    <!-- 4: Mobila - living + esszimmer -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🛋️ 5. Möbel — Wohnzimmer &amp; Esszimmer</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-mobila-wohnzimmer.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="theory-table">
                <thead><tr><th>Germană</th><th>Română</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Tisch</td><td>masa</td></tr>
                    <tr><td class="verb">der Stuhl</td><td>scaunul</td></tr>
                    <tr><td class="verb">das Sofa</td><td>canapeaua</td></tr>
                    <tr><td class="verb">der Sessel</td><td>fotoliul</td></tr>
                    <tr><td class="verb">das Bücherregal</td><td>biblioteca (raft de cărți)</td></tr>
                    <tr><td class="verb">der Teppich</td><td>covorul</td></tr>
                    <tr><td class="verb">das Bild</td><td>tabloul</td></tr>
                    <tr><td class="verb">die Zimmerpflanze</td><td>planta de cameră</td></tr>
                    <tr><td class="verb">der Karton</td><td>cartonul / cutia de mutat</td></tr>
                </tbody>
            </table>
            <div class="example-box">
                <p class="de"><strong>Der Teppich</strong> liegt auf dem Boden im <strong>Wohnzimmer</strong>.</p>
                <p class="ro">Covorul e pe podea în living.</p>
            </div>
            <div class="example-box">
                <p class="de">Um den <strong>Tisch</strong> stehen vier <strong>Stühle</strong>.</p>
                <p class="ro">În jurul mesei stau patru scaune.</p>
            </div>
        </div>
    </div>

    <!-- 5: Aparate electrocasnice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>📺 6. Elektrogeräte (Aparate electrocasnice)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-elektrogerate.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="theory-table">
                <thead><tr><th>Germană</th><th>Română</th><th>Unde e</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Kühlschrank</td><td>frigiderul</td><td>die Küche</td></tr>
                    <tr><td class="verb">der Herd</td><td>aragazul</td><td>die Küche</td></tr>
                    <tr><td class="verb">der Fernseher</td><td>televizorul</td><td>das Wohnzimmer</td></tr>
                    <tr><td class="verb">der DVD-Player</td><td>player-ul DVD</td><td>das Wohnzimmer</td></tr>
                    <tr><td class="verb">die Waschmaschine</td><td>mașina de spălat</td><td>der Keller / das Badezimmer</td></tr>
                    <tr><td class="verb">die Mikrowelle</td><td>cuptorul cu microunde</td><td>die Küche</td></tr>
                    <tr><td class="verb">die Spülmaschine</td><td>mașina de spălat vase</td><td>die Küche</td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Pattern util</h4>
                <p>Multe aparate sunt <strong>der</strong>: der Herd, der Fernseher, der Kühlschrank.</p>
                <p style="margin-top: 8px;">Mașinile / aparatele cu „-maschine" sunt <strong>die</strong>: die Waschmaschine, die Spülmaschine.</p>
            </div>
        </div>
    </div>

    <!-- 6: Dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💬 7. Dialog: Beim Umzug (La mutare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/07-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă dialogul complet (MP3, după ce înregistrezi)</span>
            </div>

            <div style="background: #eff6ff; border: 2px dashed #3b82f6; padding: 12px 16px; border-radius: 8px; margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
                <button onclick="playFullDialog()" style="background:#3b82f6;color:white;border:none;padding:10px 18px;border-radius:8px;cursor:pointer;font-weight:600;">🎙️ Redă tot dialogul (TTS)</button>
                <button onclick="stopDialog()" style="background:#ef4444;color:white;border:none;padding:10px 18px;border-radius:8px;cursor:pointer;font-weight:600;">⏹ Stop</button>
                <small style="color:#6b7280;">Voce germană automată din browser. Click pe 🔊 lângă orice replică pentru a o asculta individual.</small>
            </div>

            <p style="margin-bottom: 15px;"><em>Anna și Peter se mută într-o casă nouă. Anna îl întâmpină pe Peter, care îi ajută cu mutatul.</em></p>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Hallo Peter! Willkommen in meinem neuen Haus! <button onclick="speakDialogLine(event, 0)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Salut Peter! Bine ai venit în casa mea nouă!</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Hallo Anna! Schön! Wo soll ich die Kartons hinstellen? <button onclick="speakDialogLine(event, 1)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Salut Anna! Frumos! Unde pun cutiile?</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Die Bücher kommen ins Wohnzimmer, bitte. Und die Kleidung ins Schlafzimmer. <button onclick="speakDialogLine(event, 2)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Cărțile merg în living, te rog. Și hainele în dormitor.</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Und der Schrank? Er ist sehr schwer! <button onclick="speakDialogLine(event, 3)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Și dulapul? E foarte greu!</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Der Schrank kommt ins Schlafzimmer. Ich helfe dir! <button onclick="speakDialogLine(event, 4)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Dulapul merge în dormitor. Te ajut!</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Wo ist die Küche? <button onclick="speakDialogLine(event, 5)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Unde e bucătăria?</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Hier rechts. Der Kühlschrank steht schon da, aber der Herd ist noch nicht da. <button onclick="speakDialogLine(event, 6)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Aici la dreapta. Frigiderul e deja acolo, dar aragazul încă nu.</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Und das Badezimmer? Wo ist das? <button onclick="speakDialogLine(event, 7)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Și baia? Unde e?</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Oben, im ersten Stock. Die Treppe ist dort. <button onclick="speakDialogLine(event, 8)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Sus, la etajul 1. Scara e acolo.</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Super. Wo ist der Keller? <button onclick="speakDialogLine(event, 9)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Super. Unde e pivnița?</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Unten, durch diese Tür. Die Waschmaschine steht im Keller. <button onclick="speakDialogLine(event, 10)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Jos, prin ușa asta. Mașina de spălat e în pivniță.</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Perfekt! Wir können anfangen. Was machen wir zuerst? <button onclick="speakDialogLine(event, 11)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Perfect! Putem începe. Ce facem mai întâi?</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Zuerst das Sofa ins Wohnzimmer, dann das Bett ins Schlafzimmer. Danke für deine Hilfe! <button onclick="speakDialogLine(event, 12)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Întâi canapeaua în living, apoi patul în dormitor. Mulțumesc pentru ajutor!</p>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6; margin-top: 20px;">
                <h4>🗝️ Fraze cheie din dialog</h4>
                <ul>
                    <li><strong>Wo soll ich ... hinstellen?</strong> — Unde să pun...?</li>
                    <li><strong>Der Schrank kommt ins Schlafzimmer.</strong> — Dulapul merge în dormitor.</li>
                    <li><strong>Wo ist ...?</strong> — Unde e...?</li>
                    <li><strong>Oben / unten / rechts / links</strong> — sus / jos / dreapta / stânga</li>
                    <li><strong>Ich helfe dir.</strong> — Te ajut. (verbul <em>helfen</em> cere Dativ!)</li>
                    <li><strong>Danke für deine Hilfe!</strong> — Mulțumesc pentru ajutor!</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 7: Strategii + prepoziții -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💡 8. Strategii + prepoziții utile</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-7')" id="btn-audio-7">▶</button>
                    <audio id="audio-7" preload="none"><source src="audio/08-prepozitii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>📍 Prepoziții de loc — unde?</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană</th><th>Română</th><th>Exemplu</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">auf</td><td>pe</td><td><em>auf dem Tisch</em> (pe masă)</td></tr>
                        <tr><td class="verb">unter</td><td>sub</td><td><em>unter dem Bett</em></td></tr>
                        <tr><td class="verb">neben</td><td>lângă</td><td><em>neben dem Schrank</em></td></tr>
                        <tr><td class="verb">hinter</td><td>în spate</td><td><em>hinter der Tür</em></td></tr>
                        <tr><td class="verb">vor</td><td>în față</td><td><em>vor dem Sofa</em></td></tr>
                        <tr><td class="verb">zwischen</td><td>între</td><td><em>zwischen Bett und Schrank</em></td></tr>
                        <tr><td class="verb">in</td><td>în</td><td><em>in der Küche</em></td></tr>
                        <tr><td class="verb">an</td><td>la / lipit de</td><td><em>an der Wand</em> (pe perete)</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="theory-box">
                <h4>🔑 Strategii de memorare</h4>
                <ul>
                    <li><strong>Învață cu articol:</strong> „der Tisch", nu doar „Tisch".</li>
                    <li><strong>Grupează pe cameră:</strong> toate obiectele din bucătărie împreună.</li>
                    <li><strong>Pattern util:</strong> toate <em>-zimmer</em> sunt <strong>das</strong>; mașinile -maschine sunt <strong>die</strong>.</li>
                    <li><strong>Descrie camera ta:</strong> scrie 5 propoziții despre propria cameră în germană.</li>
                </ul>
            </div>
            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Capcana vorbitorilor de română</h4>
                <p>„Etajul 1" în germană <strong>NU</strong> e parterul! Parterul = <em>das Erdgeschoss</em>. Deci:</p>
                <ul>
                    <li>Locuiesc la parter → <em>Ich wohne im Erdgeschoss.</em></li>
                    <li>Locuiesc la etajul 1 → <em>Ich wohne im ersten Stock.</em></li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});

// ============================================
// DIALOG — TEXT-TO-SPEECH (voce germană automată)
// ============================================
const dialogLines = [
    "Hallo Peter! Willkommen in meinem neuen Haus!",
    "Hallo Anna! Schön! Wo soll ich die Kartons hinstellen?",
    "Die Bücher kommen ins Wohnzimmer, bitte. Und die Kleidung ins Schlafzimmer.",
    "Und der Schrank? Er ist sehr schwer!",
    "Der Schrank kommt ins Schlafzimmer. Ich helfe dir!",
    "Wo ist die Küche?",
    "Hier rechts. Der Kühlschrank steht schon da, aber der Herd ist noch nicht da.",
    "Und das Badezimmer? Wo ist das?",
    "Oben, im ersten Stock. Die Treppe ist dort.",
    "Super. Wo ist der Keller?",
    "Unten, durch diese Tür. Die Waschmaschine steht im Keller.",
    "Perfekt! Wir können anfangen. Was machen wir zuerst?",
    "Zuerst das Sofa ins Wohnzimmer, dann das Bett ins Schlafzimmer. Danke für deine Hilfe!"
];

function speakDialogLine(event, index) {
    if (event) event.stopPropagation();
    const line = dialogLines[index];
    if (!line) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(line);
        u.lang = 'de-DE';
        u.rate = 0.9;
        // Pitch alternant: Anna (linii pare) mai înalt, Peter (linii impare) mai jos
        u.pitch = index % 2 === 0 ? 1.15 : 0.85;
        window.speechSynthesis.speak(u);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.');
    }
}

function playFullDialog() {
    if (!('speechSynthesis' in window)) {
        alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.');
        return;
    }
    window.speechSynthesis.cancel();
    dialogLines.forEach((line, i) => {
        const u = new SpeechSynthesisUtterance(line);
        u.lang = 'de-DE';
        u.rate = 0.9;
        u.pitch = i % 2 === 0 ? 1.15 : 0.85;
        window.speechSynthesis.speak(u);
    });
}

function stopDialog() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}
