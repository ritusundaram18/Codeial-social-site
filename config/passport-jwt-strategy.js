const passport=require('passport');

const JWTStrategy=require('passport-jwt').Strategy;

const ExtractJWT=require('passport-jwt').ExtractJwt;

const user=require('../model/user');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codeial'
}

passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    User.findById(jwtPayLoad._id, function(err, user){
        if(err){console.log('Error in finding the user from JWT'); returns;}

        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
        })
}));
module.exports=passport;