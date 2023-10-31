# Backend em Node.js

This project was generated with [Node](https://nodejs.org/en) version 18.18.0.

# Instalation

Run `npm i` to install the dependencies.

## Development server

Create a new file named `.env` to and paste `DATABASE_URL="file:./dev.db"` to set the local database.
run `npx prisma migrate dev --name create-initial-database` and then run `npx prisma generate` to end the configuration.

## Running

To run the server you just need to run `npm run dev`.

## Testing the routes

To test the routes you can use [Insomnia](https://insomnia.rest/download) or use the extension [Rest Client](https://open.vscode.dev/Huachao/vscode-restclient) and run the commands on the file [teste.http](https://github.com/brksaian/TrabalhoWeb2/blob/main/Backend_node/teste.http).