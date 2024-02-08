fetch('https://cors.szurek.local/10/', {
    method: 'GET', // lub 'POST', w zależności od wymagań API
    headers: {
        // Dodaj nagłówki, jeśli są wymagane przez API
    }
})
.then(response => {
    if (response.ok) {
        return response.text(); // lub response.json(), jeśli oczekiwany jest format JSON
    }
    throw new Error('Nie udało się pobrać sekretu');
})
.then(data => {
    console.log('Sekret:', data);
})
.catch(error => {
    console.error('Błąd:', error);
});
