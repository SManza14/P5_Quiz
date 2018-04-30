
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quiz', {
        question: {
            type: Datatypes.STRING,
            validate: {notEmpty: {msg: 'Question must not be empty'}}
        },
        answer: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: 'Answer must not be empty'}}
        }
    });
};