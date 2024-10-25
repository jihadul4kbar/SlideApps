const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch {
    res.status(400).send('Invalid Token');
  }
};

module.exports = { authenticateToken };
