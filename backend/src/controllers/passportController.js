// let JwtStrategy = require('passport-jwt').Strategy
// let ExtractJwt = require('passport-jwt').ExtractJwt;
// let UserModel = require("./../models/users")
// let opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'secret';

// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     UserModel.findOne({ id: jwt_payload.sub }, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));