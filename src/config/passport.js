const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserRepository = require('../repository/user');
const Role = require('../models/role');
const UserRole = require('../models/userRole');
const UserRoleRepository = require('../repository/userRole');


// Локальная стратегия
passport.use(
    new LocalStrategy(
        { usernameField: 'email', passwordField: 'password' },
        async (email, password, done) => {
            try {
                const user = await UserRepository.findUserByEmail(email);
                if (!user) {
                    return done(null, false, { message: 'Invalid email or password' });
                }
                const isValid = await user.validatePassword(password);
                if (!isValid) {
                    return done(null, false, { message: 'Invalid email or password' });
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

// JWT стратегия
passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'your_jwt_secret', // Секретный ключ для подписи JWT
        },
        async (payload, done) => {
            try {
                const user = await UserRepository.findById(payload.id);
                if (!user) {
                    return done(null, false);
                }
            
                // Получение списка ролей (имена ролей)
                const roles = await UserRoleRepository.getListOfRolesByUserId(user.id);

                return done(null, { ...user.toJSON(), roles });

            } catch (error) {
                return done(error, false);
            }
        }
    )
);

module.exports = passport;
