function authorizeRoles(allowedRoles) {
    return (req, res, next) => {
        const userRoles = req.user.roles; // req.user.roles должен быть массивом
        
        console.log(req.user); // роли присваиваются в respones из-за настройки passport.js
        
        if (!userRoles.some(role => allowedRoles.includes(role))) {
            return res.status(403).json({ error: 'Access denied' });
        }
        next();
    };
}

module.exports = authorizeRoles;