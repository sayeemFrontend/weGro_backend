const jwt = require('jsonwebtoken');
const PRIVATE_KEY = process.env.S_KEY;

const loginController = (req, res) => {
  const { email, password } = req.body;
  const token = req.headers['authorization'];

  try {
    if (!token) {
      throw new Error('your account not registered');
    }
    const result = jwt.verify(token, PRIVATE_KEY);
    if (email === result.email && password === result.password) {
      res.status(200).send({ message: 'login success' });
    } else {
      throw new Error('username or password incorrect');
    }
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

const signupController = (req, res) => {
  const { name, email, password, password2 } = req.body;
  try {
    if (password !== password2) {
      throw new Error('password and password2 not matched');
    }
    if (!email) {
      throw new Error('email is invalid');
    }
    if (!password) {
      throw new Error('password is invalid');
    }
    if (!name) {
      throw new Error('name is invalid');
    }
    const token = jwt.sign({ email, password, name }, PRIVATE_KEY, { expiresIn: '30d' });
    if (!token) {
      throw new Error('Token can not be generated');
    }
    res.status(200).send({ data: { token }, message: 'registered successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { signupController, loginController };
