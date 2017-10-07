const express = require('express');
const request = require('request');
const router = express.Router();
const IG_URL = 'https://api.instagram.com/v1/';
const IG_ACCESS_TOKEN = '1119844.93ea1cf.7186f364d56b48d1a214806f419a37d3';
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
