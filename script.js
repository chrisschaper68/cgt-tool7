// Stemming Check-in
document.getElementById("mood-meter").addEventListener("input", function () {
    document.getElementById("mood-level").textContent = this.value;
});

// Gedachte herformuleren met AI
async function getAIReframe() {
    const thought = document.getElementById("example-thoughts").value || document.getElementById("reframe-input").value;
    const suggestionDiv = document.getElementById("reframe-suggestion");

    if (!thought) {
        suggestionDiv.innerHTML = "<p>Vul een gedachte in om te herformuleren.</p>";
        return;
    }

    suggestionDiv.innerHTML = "<p>Bezig met herformuleren...</p>";

    try {
        const response = await fetch("/api/getReframe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ thought })
        });

        const data = await response.json();
        suggestionDiv.innerHTML = `<p>Herformulering: ${data.reframe}</p>`;
    } catch (error) {
        suggestionDiv.innerHTML = "<p>Er is een fout opgetreden bij het ophalen van de herformulering.</p>";
    }
}

// Vragen stellen aan de AI
async function askAIQuestion() {
    const question = document.getElementById("example-questions").value || document.getElementById("user-question").value;
    const responseDiv = document.getElementById("ai-response");

    if (!question) {
        responseDiv.innerHTML = "<p>Vul een vraag in om een antwoord te krijgen.</p>";
        return;
    }

    responseDiv.innerHTML = "<p>Bezig met het ophalen van het antwoord...</p>";

    try {
        const response = await fetch("/api/getReframe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ thought: question })
        });

        const data = await response.json();
        responseDiv.innerHTML = `<p>Antwoord: ${data.reframe}</p>`;
    } catch (error) {
        responseDiv.innerHTML = "<p>Er is een fout opgetreden bij het ophalen van het antwoord.</p>";
    }
}

// Ademhalingsoefening starten met animatie
function startBreathingExercise() {
    const breathCircle = document.getElementById("breath-circle");
    breathCircle.style.animation = "breathing 6s ease-in-out infinite";
}

// Dankbaarheidslijst opslaan
function saveGratitude() {
    const gratitudeInput = document.getElementById("gratitude-input").value;
    const gratitudeList = document.getElementById("gratitude-list");

    if (gratitudeInput) {
        const listItem = document.createElement("li");
        listItem.textContent = gratitudeInput;
        gratitudeList.appendChild(listItem);
        document.getElementById("gratitude-input").value = ""; // Wis het invoerveld na toevoegen
    }
}

// Dagboeknotitie opslaan
function saveJournalEntry() {
    const journalEntry = document.getElementById("journal-input").value;
    const journalList = document.getElementById("journal-list");

    if (journalEntry) {
        const entryItem = document.createElement("li");
        entryItem.textContent = journalEntry;
        journalList.appendChild(entryItem);
        document.getElementById("journal-input").value = ""; // Wis het invoerveld na toevoegen
    }
}

// Slaapnotitie opslaan
function saveSleepEntry() {
    const sleepEntry = document.getElementById("sleep-input").value;
    const sleepList = document.getElementById("sleep-list");

    if (sleepEntry) {
        const entryItem = document.createElement("li");
        entryItem.textContent = sleepEntry;
        sleepList.appendChild(entryItem);
        document.getElementById("sleep-input").value = ""; // Wis het invoerveld na toevoegen
    }
}

// Oproep om water te drinken
function remindHydration() {
    alert("Vergeet niet om wat water te drinken!");
}
