async function translateText() {
    const text = document.getElementById('textInput').value;
    const targetLanguage = document.getElementById('languageSelect').value;

    if (text) {
        const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyD4HjBVAbKAWC5wf98ay1b6iveuolmmDCc`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: text,
                target: targetLanguage
            })
        });

        const data = await response.json();
        console.log('API Response:', data);  // Check the response data

        if (data.data && data.data.translations) {
            document.getElementById('outputText').textContent = data.data.translations[0].translatedText;
        } else {
            console.error('Translation error:', data.error);
        }
    } else {
        document.getElementById('outputText').textContent = "Please enter some text!";
    }
}
