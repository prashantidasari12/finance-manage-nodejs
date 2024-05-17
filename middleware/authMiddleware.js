const jwt = require('jsonwebtoken');

module.exports = function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Access denied'});
    }
    try {
        const decoded = jwt.verify(token, 'finance-app');
        console.log('the decoded is: ', decoded);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token'});
    }
}