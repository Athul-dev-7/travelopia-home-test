'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Bookings", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "Booking",
    "created": "2022-12-08T10:31:26.069Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Bookings",
        {
            "uuid": {
                "type": Sequelize.UUID,
                "field": "uuid",
                "primaryKey": true,
                "unique": true,
                "defaultValue": Sequelize.UUIDV4
            },
            "firstName": {
                "type": Sequelize.STRING,
                "field": "firstName",
                "allowNull": false
            },
            "lastName": {
                "type": Sequelize.STRING,
                "field": "lastName",
                "allowNull": false
            },
            "email": {
                "type": Sequelize.STRING,
                "field": "email",
                "allowNull": false,
                "unique": true,
                "validate": {
                    "isEmail": true
                }
            },
            "countryToVisit": {
                "type": Sequelize.STRING,
                "field": "countryToVisit",
                "allowNull": false
            },
            "numberOfTravellers": {
                "type": Sequelize.INTEGER,
                "field": "numberOfTravellers",
                "allowNull": false
            },
            "budgetPerPerson": {
                "type": Sequelize.STRING,
                "field": "budgetPerPerson",
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
