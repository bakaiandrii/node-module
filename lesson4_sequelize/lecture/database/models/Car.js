module.exports = (sequalize, DataTypes) => {
    const Car = sequalize.define('Car', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        year:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },{
        tableName: 'cars',
        timestamps: false,
    });
    return Car;
};
