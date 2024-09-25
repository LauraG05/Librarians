// Non è possibile usare require nel browser. Puoi usare un'API di traduzione REST, come Google Translate API.
async function submitInput() {
    const text = document.getElementById('userInput').value;
    const traduzione = document.getElementById('trad');

    try {
        const response = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=it|en');
        const data = await response.json();
        traduzione.innerHTML = 'Translation: ' + data.responseData.translatedText;
    } catch (error) {
        console.error('Error:', error);
        traduzione.innerHTML = 'Error translating text.';
    }
}
