module.exports = (sequalize, DataTypes) => {
    const Car = sequalize.define('Car', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
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
        user_id:{
            type: DataTypes.INTEGER,
            foreignKey: true,
        }

    },{
        tableName: 'cars',
        timestamps: false,
    });


    return Car;
};
