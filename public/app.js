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
        <div class="cursor-effect"></div>
        <div class="content">
          <img src="https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg" alt="${game.name}">
          <h3>${game.name}</h3>
          <p>Playtime: ${Math.round(game.playtime_forever / 60)} hours</p>
        </div>
      `;
      gamesContainer.appendChild(gameElement);

      gameElement.addEventListener('mousemove', handleHover);
      gameElement.addEventListener('mouseleave', resetStyles);
    });

    function handleHover(event) {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.querySelector('.cursor-effect').style.setProperty('--x', `${x}%`);
      card.querySelector('.cursor-effect').style.setProperty('--y', `${y}%`);
    }

    function resetStyles(event) {
      const card = event.currentTarget;
      card.querySelector('.cursor-effect').style.setProperty('--x', `50%`);
      card.querySelector('.cursor-effect').style.setProperty('--y', `50%`);
    }
  } else {
    gamesContainer.innerHTML = '<p>No games found in your library.</p>';
  }
});
