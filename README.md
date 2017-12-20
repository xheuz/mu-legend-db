# MU Legend Database Project

## Cloning the repo
Run the following command on your local:
```
git clone https://youruser@bitbucket.org/vnatschke/mu-legend-db.git
```

## Directory Structure and uses
```
mu-legend-db
├── client        ------------------------- Contains React Client app to display on your webserver.
├── dbdump        ------------------------- Contains a Database Dump(mysql) containing the full DB data and format.
├── server        ------------------------- Contains the API Client to expose a RESTful service to retrieve data.
│   └── Models    ------------------------- Contains Sequelize Models reflecting the Database tables.
├── template      ------------------------- Contains garbage.
```

## Before starting the application
Make sure that you download all dependencies by running the following command either in `client/` or `server/`:
`(npm|yarn) install`

Also, replace the dummy credentials and paths with your desired output:

- In `.env` file replace:
```
[DATABASE_NAME] - Name of the MySQL database to pull the data from.
[DATABASE_USER] - User ID to connect to the MySQL database service with.
[DATABASE_PASSWORD] - Password to connect to the MySQL database service with.
[DATABASE_HOSTNAME] - Hostname where the database service is running in.
[DATABASE_PORT] - Port where the database service is assigned to.
```

- In `muapi.sh` file replace:
```
[USER] - User ID to run the application as.
[PATH_TO_ENV_FILE] - Path where the .env file is located.
[PATH_TO_LOGS] - Path where the logs from the application will be stored in.
```

## Starting the Server app
Make sure that you have node installed on your system. Run the following command:
```
./muapi.sh start|stop

start - Will start the server app if not already started.
stop - Will stop the server app if not already stopped.
```

## Building the Client app
Make sure that you have node installed on your system. Navigate to `client/` folder and run the following commands:
```
(npm|yarn) build
```

## Starting the Client app
Make sure that you have node installed on your system. Navigate to `client/` folder and run the following commands:
```
(npm|yarn) start
```