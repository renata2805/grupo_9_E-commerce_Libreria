module.exports = {
    "development": {
      "username": "root",
      "password": '',
      "database": "ebook_db",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorAliases" : false,
      "port": "3306"
      
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorAliases" : false
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorAliases" : false
    }
  }
  