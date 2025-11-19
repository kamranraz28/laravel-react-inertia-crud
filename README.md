Quick summary (what we’ll do)
1.	Create a latest Laravel project
2.	Install Breeze with the React/Inertia stack (it scaffolds Inertia + React + Vite)
3.	Wire up frontend (vite / npm) and run
________________________________________
Prerequisites
•	PHP ≥ 8.2 

•	Composer (v2 recommended)

•	Node.js + npm (or pnpm/yarn)

•	A database (MySQL, MariaDB, SQLite, PostgreSQL) and configured .env DB settings
________________________________________
1) Create the Laravel project
Open a terminal and run:
# create project (use prefer-dist to avoid dev versions)
composer create-project laravel/laravel my-inertia-react --prefer-dist

cd my-inertia-react
(Optionally composer global require laravel/installer then laravel new my-inertia-react — same end result.)
________________________________________
2) Install Breeze with Inertia + React stack
Laravel Breeze provides Inertia React scaffolding (fastest path). Run:
# install Breeze (dev dependency)
composer require laravel/breeze --dev

# install the React/Inertia scaffolding
php artisan breeze:install react
The Breeze installer will set up Inertia, React + Vite, auth scaffolding, and will prompt about TypeScript / SSR (if shown). After install, install node deps and build:
npm install
npm run dev
Start Laravel server in another terminal:
php artisan migrate        # run after configuring DB in .env
php artisan serve          # starts at http://127.0.0.1:8000
Notes: Breeze’s React option scaffolds Inertia + React out of the box, so you don’t need to install inertia adapters manually. If you prefer manual install, Inertia docs show how to add the server adapter and client adapter. 

