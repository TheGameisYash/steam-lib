import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Proxy route to fetch Steam API data
app.get('/api/games', async (req, res) => {
  const apiKey = process.env.STEAM_API_KEY;
  const steamId = process.env.STEAM_USER_ID;
  const apiUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Steam API data:', error);
    res.status(500).json({ error: 'Failed to fetch Steam API data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
