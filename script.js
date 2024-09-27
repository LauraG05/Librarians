const output = document.getElementById("spazioTrad");
const def = document.getElementById("def");
/*
// Funzione per caricare il file JSON con parole in inglese e definizioni
async function loadJSON() {
    try {
        const response = await fetch('dictionary.json'); // carica il file JSON contenente le parole inglesi
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Errore nel caricamento del JSON:', error);
        return {};
    }
}

async function submitInput() {
    const text = document.getElementById('userInput').value;

    try {
        const response = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=it|en');
        const data = await response.json();
        const translatedText = data.responseData.translatedText.toUpperCase();
        const dictionary = await loadJSON();

        if (dictionary[translatedText]) {
            // Se la parola tradotta esiste nel JSON, mostra la traduzione e la definizione
            def.innerHTML = `Traduzione: ${translatedText}<br>Definizione: ${dictionary[translatedText]}`;
        } else {
            // Se non trovi la parola nel JSON, mostra solo la traduzione
            def.innerHTML = `Traduzione: ${translatedText}<br>Definizione non trovata.`;
        }

        output.innerHTML = data.responseData.translatedText;

    } catch (error) {
        console.error('Error:', error);
        output.innerHTML = 'Error translating text.';
    }
}

let outputTraduzione = submitInput();
output.innerHTML = outputTraduzione;
*/

// facciamo che traduciamo solo termini tecnici della bibliotca
const glossario = {
    bancone : [
        traduzione = "counter",
        significato = "grande banco"
    ],

    catalogare : [
        traduzione = "catalogue",
        significato = ""
    ],

    catlogo : [
        traduzione = "catalogue",
        significato = ""
    ],
    
    prestito : [
        traduzione = "catalogue",
        significato = ""
    ],
    
    prestare : [
        traduzione = "catalogue",
        significato = ""
    ],
    
    catalogare : [
        traduzione = "catalogue",
        significato = ""
    ],
    }
