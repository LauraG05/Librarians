const output = document.getElementById("spazioTrad");
const def = document.getElementById("def");
const submitParola = document.getElementById("submitParola");

// Glossario di termini tecnici
const glossario = {
    "Bancone": {
        traduzione: "Counter",
        significato: "Area principale dove i visitatori interagiscono con i bibliotecari per chiedere informazioni o assistenza."
    },
    "Catalogare": {
        traduzione: "Catalogue",
        significato: "Attività di organizzazione e registrazione dei materiali della biblioteca per facilitarne la ricerca e l’accesso."
    },
    "Catalogo": {
        traduzione: "Catalogue",
        significato: "Lista completa delle risorse disponibili in biblioteca, come libri, DVD, e periodici."
    },
    "Prestito": {
        traduzione: "Loan",
        significato: "Servizio che consente di prendere in prestito materiale della biblioteca per un tempo determinato."
    },
    "Prestare": {
        traduzione: "To lend",
        significato: "Azione di fornire un libro o altro materiale della biblioteca per l’uso temporaneo da parte degli utenti."
    },
    "Categoria": {
        traduzione: "Category",
        significato: "Divisione tematica o di genere usata per organizzare i materiali della biblioteca (ad esempio narrativa, saggistica)."
    },
    "Libro": {
        traduzione: "Book",
        significato: "Opera stampata o digitale disponibile in biblioteca per la lettura o il prestito."
    },
    "DVD": {
        traduzione: "DVD",
        significato: "Supporto che contiene film o documentari disponibili per la consultazione o il prestito."
    },
    "Film": {
        traduzione: "Movie",
        significato: "Opera cinematografica disponibile su DVD o in formato digitale."
    },
    "Regista": {
        traduzione: "Director",
        significato: "La persona responsabile della creazione di un film, disponibile nei materiali della biblioteca."
    },
    "Autore": {
        traduzione: "Author",
        significato: "Colui o colei che ha scritto un libro o altro materiale disponibile in biblioteca."
    },
    "Scaffale": {
        traduzione: "Shelf",
        significato: "Struttura della biblioteca su cui sono organizzati libri e materiali."
    },
    "Ripiano": {
        traduzione: "Shelf",
        significato: "Livello o piano di uno scaffale usato per disporre materiali."
    },
    "Collega": {
        traduzione: "Colleague",
        significato: "Altri membri dello staff che lavorano in biblioteca."
    },
    "Bibliotecario": {
        traduzione: "Librarian (male)",
        significato: "Persona che si occupa di organizzare e gestire le risorse della biblioteca, assistendo gli utenti."
    },
    "Bibliotecaria": {
        traduzione: "Librarian (female)",
        significato: "Figura professionale femminile che gestisce e organizza la biblioteca e assiste il pubblico."
    },
    "Lettore/Lettrice": {
        traduzione: "Reader",
        significato: "Utente della biblioteca che consulta o prende in prestito materiali."
    },
    "Tessera": {
        traduzione: "Card",
        significato: "Carta che consente l’accesso ai servizi della biblioteca, come il prestito."
    },
    "Iscrizione": {
        traduzione: "Registration",
        significato: "Procedura per diventare membri della biblioteca e poter usufruire dei suoi servizi."
    },
    "Consultazione": {
        traduzione: "Consultation",
        significato: "Utilizzo dei materiali della biblioteca all’interno della struttura, senza portarli in prestito."
    },
    "Archivio": {
        traduzione: "Archive",
        significato: "Collezione di documenti storici o speciali conservati in biblioteca."
    },
    "Sezione": {
        traduzione: "Section",
        significato: "Area della biblioteca dedicata a un genere o argomento specifico."
    },
    "Manuale": {
        traduzione: "Manual",
        significato: "Libro di riferimento che fornisce istruzioni o informazioni su argomenti pratici."
    },
    "Enciclopedia": {
        traduzione: "Encyclopedia",
        significato: "Opera di riferimento che fornisce informazioni generali su vari argomenti."
    },
    "Audiolibro": {
        traduzione: "Audiobook",
        significato: "Versione audio di un libro disponibile per l’ascolto in biblioteca."
    },
    "Rivista": {
        traduzione: "Magazine",
        significato: "Pubblicazione periodica disponibile per la lettura in biblioteca."
    },
    "Periodico": {
        traduzione: "Periodical",
        significato: "Pubblicazione rilasciata a intervalli regolari, come riviste o giornali."
    },
    "Giallo (Genere)": {
        traduzione: "Detective/Mystery genre",
        significato: "Genere di narrativa incentrato su misteri o investigazioni."
    },
    "Narrativa": {
        traduzione: "Fiction",
        significato: "Genere letterario che comprende opere di immaginazione."
    },
    "Saggistica": {
        traduzione: "Non-fiction",
        significato: "Genere che include opere basate su fatti reali."
    },
    "Narrativa per Ragazzi": {
        traduzione: "Children's Fiction",
        significato: "Libri di narrativa scritti per bambini e adolescenti."
    },
    "Studio": {
        traduzione: "Study",
        significato: "Attività di lettura o ricerca approfondita di materiali."
    },
    "Sala Lettura": {
        traduzione: "Reading Room",
        significato: "Area della biblioteca dove è possibile leggere in tranquillità."
    },
    "Banco Prestiti": {
        traduzione: "Loan Desk",
        significato: "Area per il ritiro e la restituzione dei materiali presi in prestito."
    },
    "Restituzione": {
        traduzione: "Return",
        significato: "Atto di riportare in biblioteca un libro o materiale preso in prestito."
    },
    "Prenotazione": {
        traduzione: "Reservation",
        significato: "Richiesta per riservare un libro o altro materiale."
    },
    "Orario di Apertura": {
        traduzione: "Opening Hours",
        significato: "Gli orari in cui la biblioteca è aperta al pubblico."
    },
    "Silenzio": {
        traduzione: "Silence",
        significato: "Regola generale della biblioteca per garantire un ambiente tranquillo."
    },
    "Tessera Biblioteca": {
        traduzione: "Library Card",
        significato: "Carta personale che permette di usufruire dei servizi bibliotecari."
    },
    "Registro": {
        traduzione: "Register",
        significato: "Lista degli utenti, prestiti o eventi registrati in biblioteca."
    },
    "Reference": {
        traduzione: "Reference",
        significato: "Servizio di assistenza alla ricerca di informazioni e materiali."
    },
    "Scaffale Aperto": {
        traduzione: "Open Shelf",
        significato: "Area della biblioteca dove i libri sono accessibili direttamente agli utenti."
    },
    "Biblioteca Digitale": {
        traduzione: "Digital Library",
        significato: "Collezione di risorse digitali accessibili online."
    },
    "Ebook": {
        traduzione: "Ebook",
        significato: "Libro in formato digitale consultabile su dispositivi elettronici."
    },
    "Indice": {
        traduzione: "Index",
        significato: "Elenco di argomenti o sezioni presenti in un libro, per facilitare la consultazione."
    },
    "Opera": {
        traduzione: "Work",
        significato: "Lavoro o produzione letteraria, artistica o scientifica disponibile in biblioteca."
    },
    "Volume": {
        traduzione: "Volume",
        significato: "Un singolo libro, spesso parte di una serie o collezione."
    },
    "Pubblicazione": {
        traduzione: "Publication",
        significato: "L'atto di rendere disponibile un’opera o documento."
    },
    "Edizione": {
        traduzione: "Edition",
        significato: "Versione di una pubblicazione, che può differire per anno o caratteristiche."
    },
    "Copertina": {
        traduzione: "Cover",
        significato: "Parte esterna di un libro che protegge le pagine e ne indica il titolo."
    },
    "Fascicolo": {
        traduzione: "Issue",
        significato: "Singola uscita di una rivista o altro periodico."
    },
    "Collezione": {
        traduzione: "Collection",
        significato: "Insieme di opere correlate per tema, autore o genere."
    },
    "Manoscritto": {
        traduzione: "Manuscript",
        significato: "Documento originale, spesso scritto a mano o con caratteristiche uniche."
    },
    "Letteratura": {
        traduzione: "Literature",
        significato: "Insieme delle opere scritte o stampate, spesso organizzate per epoca o genere."
    },
    "Conservazione": {
        traduzione: "Preservation",
        significato: "Processo di mantenimento dei materiali per garantirne la durata nel tempo."
    },
    "Restauro": {
        traduzione: "Restoration",
        significato: "Riparazione e protezione di materiali antichi, come libri e documenti storici."
    },
    "Lettura": {
        traduzione: "Reading",
        significato: "Attività di interpretazione e comprensione del testo scritto."
    },
    "Sala ragazzi": {
        traduzione: "The kid's room",
        significato: "Area della biblioteca pensata per ragazzi di tutte le età, con attività e libri dedicati."
    },
    "Mediateca": {
        traduzione: "The media area",
        significato: "Area della biblioteca dedicata ai contenuti multimediali: puoi prendere in prestito DVD, stampare, usare i pc..."
    },
    "Uffici": {
        traduzione: "Offices",
        significato: "Area della biblioteca privata, accessibile solo ai dipendenti."
    }
};

// aggiungere sala ragazzi, mediateca, uffici, 


/* Funzione per calcolare la distanza di Levenshtein
function distanzaLevenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const costo = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,       // cancellazione
                matrix[i][j - 1] + 1,       // inserimento
                matrix[i - 1][j - 1] + costo // sostituzione
            );
        }
    }

    return matrix[a.length][b.length];
}*/

// Funzione per riempire il modal
function riempiModal() {
    const text = document.getElementById('userInput').value.trim().toLowerCase(); // Prende l'input dell'utente e lo normalizza
    const def = document.getElementById('def');
    let trovato = false;

    output.innerHTML = text.toUpperCase();

    // Controlla se la parola è nel glossario
    for (let parola in glossario) {
        if (text === parola.toLowerCase()) {
            // Mostra traduzione e significato se la parola è trovata
            def.innerHTML = `Traduzione: ${glossario[parola].traduzione}<br>Definizione: ${glossario[parola].significato}`;
            trovato = true;
            break;
        }
    }

    // Mostra un messaggio se la parola non è stata trovata
    if (!trovato) {
        def.innerHTML = "Termine non trovato.";
    }

    // Codice per la funzione di suggerimento con distanza di Levenshtein
    // Funzione per calcolare la distanza di Levenshtein
    function distanzaLevenshtein(a, b) {
        const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

        for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
        for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                const costo = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,       // cancellazione
                    matrix[i][j - 1] + 1,       // inserimento
                    matrix[i - 1][j - 1] + costo // sostituzione
                );
            }
        }

        return matrix[a.length][b.length];
    }

    // Parte del codice disabilitata per i suggerimenti
    let suggerimento = null;
    let distanzaMinima = Infinity;

    // Se la parola non è trovata, cerca il suggerimento migliore
    if (!trovato) {
        for (let parola in glossario) {
            const distanza = distanzaLevenshtein(text, parola.toLowerCase());
            if (distanza < distanzaMinima) {
                distanzaMinima = distanza;
                suggerimento = parola;
            }
        }

        def.innerHTML = suggerimento
            ? `Termine non trovato. Forse cercavi: <strong>${suggerimento}</strong>?`
            : "Termine non trovato e nessun suggerimento disponibile.";
    }
    
}

// Imposta l'evento onclick sul pulsante
submitParola.onclick = function() {
    riempiModal();
};