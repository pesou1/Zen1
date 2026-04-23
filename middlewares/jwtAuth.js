const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key'; // Change this to your real secret key
const ADMIN_EMAIL = 'Eljaneee24@gmail.com';

// Middleware to protect admin routes
function authenticateJWT(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.sendStatus(403); // Forbidden
    }
    
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
}

// Middleware to check role and email
function verifySuperAdmin(req, res, next) {
    const { email, role } = req.user;
    
    if (email === ADMIN_EMAIL && role === 'superadmin') {
        next(); // Proceed to the next middleware or route handler
    } else {
        return res.sendStatus(403); // Forbidden
    }
}

module.exports = { authenticateJWT, verifySuperAdmin };