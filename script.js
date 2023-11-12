// Remplacez 'http://localhost:3000' par l'URL de votre backend déployé
const response = await fetch('https://rollmeme.github.io/Roll/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
});

