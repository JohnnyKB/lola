const express = require('express');
const request = require('request');
const router = express.Router();
const IG_URL = 'https://api.instagram.com/v1/';
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', { message: 'hello' });
});

router.get('/input', (req, res) => {
  res.sendFile(__dirname + '/input.html');
});

router.post('/hashtag', (req, res) => {
  request(
    {
      method: 'GET',
      uri:
        IG_URL +
        `https://api.instagram.com/v1/users/self/?access_token=${IG_ACCESS_TOKEN}`
    },
    function(err, response) {
      res.json(response.body);
    }
  );
});

module.exports = router;
