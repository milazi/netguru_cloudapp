This application showcases usage of expressJS with an ORM that connects to PostGres and MySQL clusters. It also utilizes some functions that are stored in the cloud, like user authentication/authorization, image processing, etc...

==Requirements
- An Auth0 Account
- A Kraken Account
- PosgresSQL
- MySQL / MariaDB
- NodeJS Runtime

==Installation
Create a new Auth0 Application

Create a .env file with the following keys:

NODE_ENV=development
PORT=3000
AUTH0_CLIENT_ID=
AUTH0_DOMAIN=
AUTH0_CLIENT_SECRET=
AUTH0_CALLBACK_URL=http://localhost:3000/callback

