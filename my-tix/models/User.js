// var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {

//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//       validate: {
//         isEmail: true
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
// });

//make user a Schema
var UserSchema = new Schema ({
  email: {
    type: String
  },
  password: {
    type: String
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = Book;

// //hash password before Creating user
//   User.hook('beforeCreate', function(user, options) {
//     //console.log("BEFORE HASH: " + user.password);
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     //console.log("AFTER HASH: " + user.password);
//   });

// //instance function to validate password
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };


  //   return User;
  // };