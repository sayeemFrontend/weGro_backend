require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { musicController } = require('./controllers/musicControllers');
const { loginController, signupController } = require('./controllers/authControllers');
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.get('/musics', musicController);
app.post('/login', loginController);
app.post('/register', signupController);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
