'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {}
    Booking.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
                primaryKey: true,
            },
            firstName: { type: DataTypes.STRING, allowNull: false },
            lastName: { type: DataTypes.STRING, allowNull: false },
            email: {
                type: DataTypes.STRING,
                validate: { isEmail: true },
                unique: true,
                allowNull: false,
            },
            countryToVisit: { type: DataTypes.STRING, allowNull: false },
            numberOfTravellers: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            budgetPerPerson: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Booking',
        }
    );

    return Booking;
};
