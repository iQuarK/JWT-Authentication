# JWT-Authentication

## frontend

Go to *frontend* directory.

Install modules
`$ npm install`

To start the app in development mode you can use
`$ npm run dev`

To build the app and run
`$ npm run build`
`$ npm start`

It is expected to be on `https://localhost:3000`

##  auth_server

Go to *auth_server* directory.

Install dependencies
`$ composer install`

Run database
`$ docker compose up`

Run migrations for dev and test
`$ php bin/console doctrine:migration:migrate`
`$ php bin/console doctrine:migration:migrate --env=test`

To test (it runs a different database)
`$ php bin/phpunit`

Run server
`$ symfony serve`

It is expected to be on `https://127.0.0.1:8000`, otherwise please change the BASE_URL in request.js in *frontend*, with more time I would have installed the 'dotenv' package.

## Docker files

In both frontend and auth_server I made a Dockerfile to run them, create the image and then run the docker compose file at root, but I haven't been able to run *composer* in the Dockerfile, so I could not finish this part yet :-/.

## Current status

Server and frontend communicate, you can register and make login, right now, just missing the part of the user, the frontend is done for this, but we need to retrieve the user from backend, for personal purposes (apart of having to get used to Symfony and mainly the JWT library) I haven't been able to reach to this point, but I hope the rest of the work is valorated, you can check at the commits that TDD has been applied in both, frontend and backend.