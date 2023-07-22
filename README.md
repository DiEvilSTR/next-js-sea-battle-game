# Next.js Sea Battle Game

Next.js Sea Battle game with WebSocket, MongoDB database and Google OAuth authentication.

## Description

This is simple Sea Battle game with Next.js framework, WebSocket, MongoDB database and Google OAuth authentication.

## Features
- Create a user profile
- Play Sea Battle game locally with friend or with another player online
- Get the game result, get the game score and experience (which allows you to level up)
- View the game history

## Technologies
- React
- Next.js framework
- Socket.io library
- Mongoose ODM database library
- MongoDB database
- OAuth authentication

## Installation
1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Set up a MongoDB database.
4. Set up a OAuth client ID and secret.
5. Configure the environment variables in `.env` file with all the necessary configuration variables (check `.env.example`).
6. Run the app using `npm run dev`.

## Endpoints
- `/` - Home page
- `/profile` - Profile page (only available for logged in users)

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.