module.exports = (sequalize, DataTypes) => {
    const User = sequalize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:'Dimas'
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue:'Dimas@gmail.com'
        },
        phoneNumber:{
            type: DataTypes.STRING,
            allowNull:false,
        },

    },{
        tableName: 'users',
        timestamps: false,
    });
    return User;
};
