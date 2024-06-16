document.addEventListener('DOMContentLoaded', async () => {
  const fetchOwnedGames = async () => {
    try {
      const response = await fetch('/api/games');
      const data = await response.json();
      return data.response.games;
    } catch (error) {
      console.error('Error fetching owned games:', error);
      return [];
    }
  };

  const games = await fetchOwnedGames();
  const gamesContainer = document.getElementById('games-container');

  if (games && games.length > 0) {
    games.forEach(game => {
      const gameElement = document.createElement('div');
      gameElement.className = 'game';
      gameElement.innerHTML = `
        <div class="content">
          <img src="https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg" alt="${game.name}">
          <h3>${game.name}</h3>
          <p>Playtime: ${Math.round(game.playtime_forever / 60)} hours</p>
        </div>
      `;
      gamesContainer.appendChild(gameElement);
    });
  } else {
    gamesContainer.innerHTML = '<p>No games found in your library.</p>';
  }
});
