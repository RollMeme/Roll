async function spin() {
    const response = await fetch('https://votre-utilisateur.github.io/votre-repo/spin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Ajoutez le header Discord-Username si vous le souhaitez
            // 'Discord-Username': 'VotreNomDiscord',
        },
        body: JSON.stringify({}),
    });

    const result = await response.json();
    
    if (result.error) {
        alert(result.error);
    } else {
        document.getElementById("result").innerText = `You got: ${result.rarity}`;
    }
}
