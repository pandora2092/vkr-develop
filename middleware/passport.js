const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require("config");
const mysql = require('../controllers/auth.js');

var opts = {

}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//ExtractJwt.fromAuthHeaderAsBearerToken()
// ExtractJwt.fromAuthHeaderWithScheme('Bearer')
//ExtractJwt.fromHeader('authorization')
opts.secretOrKey = config.jwt;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    mysql.findUser(jwt_payload.userId, function (error, user, resCode) {
      if (error) {
        done(null, false)
      } else {
        console.log(user)
        done(null, user)
      }

    });
  }));
}

