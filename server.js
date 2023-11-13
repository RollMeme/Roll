const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const spins = new Set();

app.use(bodyParser.json());

app.post('/spin', (req, res) => {
    const username = req.headers['discord-username'];

    if (!username) {
        res.status(400).json({ error: 'Discord username not provided.' });
        return;
    }

    if (spins.has(username)) {
        res.status(400).json({ error: 'You can spin only once.' });
        return;
    }

    const roll = Math.floor(Math.random() * 100) + 1;

    let rarity, skill;

    if (roll <= 2) {
        rarity = 'Mythique';
        skill = 'Un skill Mythique de rang S';
    } else if (roll <= 8) {
        rarity = 'Légendaire';
        skill = 'Un skill Légendaire de rang A';
    } else if (roll <= 25) {
        rarity = 'Épique';
        skill = 'Un skill Épique de rang B';
    } else if (roll <= 45) {
        rarity = 'Rare';
        skill = 'Un skill Rare de rang C';
    } else if (roll <= 70) {
        rarity = 'Peu Commun';
        skill = 'Un skill Peu Commun de rang D';
    } else {
        rarity = 'Commun';
        skill = 'Un skill Commun de rang E';
    }

    spins.add(username);

    console.log(`User ${username} spun and got ${rarity} - ${skill}`);

    res.json({ rarity, skill });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
