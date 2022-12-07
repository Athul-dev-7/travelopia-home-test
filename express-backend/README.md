# APIs for form-submission

### 1. Install project dependencies:

`npm install`

### 2. Setup dB:

Make database for backend.
Follow below instructions to setup local database.

##### Setting Up a local database

To run the application locally, you need to setup a postgres database on your system.

Install postgres

`sudo apt install postgresql libpq-dev`

Login as the 'postgres' user and start postgres shell

`sudo su - postgres`

`psql`

Create a user for the application.
Remember to wrap your password in single quotes.

`create user expressuser with password 'password123';`

Create a database and give permissions for the above user

`create database expbackend;`

`grant ALL privileges on database expbackend to expressuser;`

Give permissions to the user to create database so that test databases can be created

`ALTER USER expressuser CREATEDB;`

### 3. Setup .env files

Use `env.example` files for creating local .env files

### 4. Migrate the Models to dB

`npm run db:migrate`

### 5. Run the Server

`npx nodemon start`
