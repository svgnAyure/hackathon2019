module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admin', {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  })

  return Admin
}
