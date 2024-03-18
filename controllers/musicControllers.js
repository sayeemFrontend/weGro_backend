const musics = require('../db.json');

const musicController = (req, res) => {
  try {
    res.status(200).send({ data: musics, message: 'success' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = { musicController };
