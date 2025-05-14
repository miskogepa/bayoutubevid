instaliran nodemon

node_modules folder se dobija automatski kada se instalira nodemon i package-lock.json

napravili smo src folder u njemu dodajemo fajlove pomocu komandi cd src to je da bi promenili rutu na src folder
zadim kucamo mkdir pa ime fajla
mkdir controllers, mkdir db, mkdir middlewares, mkdir models, mkdir routes, mkdir utils

sada pravimo fajlove u src folderu

New-Item -ItemType File -Name app.js
New-Item -ItemType File -Name index.js
New-Item -ItemType File -Name constants.js
New-Item -ItemType File -Name .env
New-Item -ItemType File -Name .env.sample

fajlovi za models
New-Item -ItemType File -Name comment.models.js
New-Item -ItemType File -Name like.models.js
New-Item -ItemType File -Name playlist.models.js
New-Item -ItemType File -Name subscription.models.js
New-Item -ItemType File -Name tweet.models.js
New-Item -ItemType File -Name user.models.js
New-Item -ItemType File -Name video.models.js

u fajlu package.json dodajemo skriptu za nodemon


kreirali smo .env fajl i .env.sample
instaliramo dotenv
npm i dotenv

instaliramo cors
npm i cors

dodajemo async handler u utils

kreiramo novi fajl ApiResponse.js

kreiramo novi fajl ApiError.js