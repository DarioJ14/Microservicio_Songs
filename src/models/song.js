const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Song = sequelize.define('TBL_SONG', {
    ID_SONG: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SONG_NAME: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    SONG_PATH: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    PLAYS: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'TBL_SONG',
    timestamps: false
});

module.exports = Song;
