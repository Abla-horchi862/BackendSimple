module.exports = (sequelize, DataTypes) => {
    const Panier = sequelize.define("panier", {
          panier_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
         
          description: {
            type: DataTypes.STRING,
          },
          
          qt: {
            type: DataTypes.INTEGER,
          },
          
          
        });
      
        return Panier;
      };