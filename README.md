

# Steam Library Showcase Server

This project sets up a Node.js server (`server.mjs`) to fetch and serve Steam game library data using the Steam API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API](#api)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Steam Library Showcase Server is a backend application built with Node.js to fetch and serve Steam game library data. It uses the Steam API to retrieve game information based on a user's Steam ID.

## Features

- Fetches and serves a user's Steam game library data.
- Provides an endpoint (`/api/games`) to retrieve game details including title, image, and playtime.
- Handles errors gracefully and provides informative responses.

## Technologies

- Node.js
- Express.js
- ES Modules (`server.mjs`)
- Steam API

## Setup

To set up and run this server locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/steam-library-showcase-server.git
   cd steam-library-showcase-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   STEAM_API_KEY=your_steam_api_key
   PORT=3000
   ```

   Replace `your_steam_api_key` with your actual Steam API key obtained from the Steam Developer portal.

4. **Start the server:**

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:3000`.

## Usage

Once the server is running, you can access the following endpoint to fetch Steam game library data:

- **Endpoint:** `/api/games`
- **Method:** GET
- **Description:** Retrieves the user's Steam game library data.
- **Parameters:** None required.
- **Returns:** JSON data containing an array of games with details like `appid`, `name`, `playtime_forever`, etc.

Example response:
   ```json
   {
     "response": {
       "games": [
         {
           "appid": 570,
           "name": "Dota 2",
           "playtime_forever": 12345
         },
         {
           "appid": 730,
           "name": "Counter-Strike: Global Offensive",
           "playtime_forever": 67890
         }
       ]
     }
   }
   ```

## API

- **Steam API:**
  - Endpoint: `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/`
  - Requires: Steam API key (`STEAM_API_KEY`)
  - Documentation: [Steam Web API Documentation](https://steamcommunity.com/dev/api)

## Live Demo

Check out the live demo of this project [here](https://steam-lib.onrender.com/).

## Contributing

Feel free to contribute to this project. You can fork the repository, make your changes, and submit a pull request.
