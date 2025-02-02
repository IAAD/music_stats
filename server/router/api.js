const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

//Api Authentication
router.post("/", (req, res) => {
  var request = require("request"); // "Request" library

  var client_id = "88ab0ee5549d4d5282676a11604f2545"; // Your client id
  var client_secret = "c96c13c6d3104b6299a4a7765d76f642"; // Your secret

  // your application requests authorization
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64")
    },
    form: {
      grant_type: "client_credentials"
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      let token = body.access_token;
      res.send(token);
    }
  });
});

//Api search of query parameters
router.get("/search/:query/:token", async (req, res) => {
  var request = require("request"); // "Request" library

  // your application requests authorization
  var authOptions1 = {
    url: `https://api.spotify.com/v1/search?q=${
      req.params.query
    }&type=track,artist,album&limit=50`,
    headers: {
      Authorization: "Bearer " + req.params.token
    },
    json: true
  };

  request.get(authOptions1, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API

      res.send(body);
    }
  });
});

//Api retrieving information of a particular track
router.get("/track/:id/:token", async (req, res) => {
  var request = require("request"); // "Request" library

  // your application requests authorization
  var authOptions1 = {
    url: `https://api.spotify.com/v1/tracks/${
        req.params.id
        }`,
    headers: {
      Authorization: "Bearer " + req.params.token
    },
    json: true
  };

  request.get(authOptions1, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API

      res.send(body);
    }
  });
});

//Api retrieving a particular artist
router.get("/artist/:id/:token", async (req, res) => {
  var request = require("request"); // "Request" library

  // your application requests authorization
  var authOptions1 = {
    url: `https://api.spotify.com/v1/artists/${
        req.params.id
        }`,
    headers: {
      Authorization: "Bearer " + req.params.token
    },
    json: true
  };

  request.get(authOptions1, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API

      res.send(body);
    }
  });
});

//Api retrieving machine learning analysis of a track
router.get("/analysis/:id/:token", async (req, res) => {
  var request = require("request"); // "Request" library

  // your application requests authorization
  var authOptions1 = {
    url: `https://api.spotify.com/v1/artists/${
        req.params.id
        }`,
    headers: {
      Authorization: "Bearer " + req.params.token
    },
    json: true
  };

  request.get(authOptions1, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API

      res.send(body);
    }
  });
});

//Api retrieving features of a track
router.get("/features/:id/:token", async (req, res) => {
  var request = require("request"); // "Request" library

  // your application requests authorization
  var authOptions1 = {
    url: `https://api.spotify.com/v1/audio-features/${
        req.params.id
        }`,
    headers: {
      Authorization: "Bearer " + req.params.token
    },
    json: true
  };

  request.get(authOptions1, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API

      res.send(body);
    }
  });
});

router.get("/album/:id/:token", async (req, res) => {
  var request = require("request"); // "Request" library

  // your application requests authorization
  var authOptions1 = {
    url: `https://api.spotify.com/v1/albums/${req.params.id}/tracks`,
    headers: {
      Authorization: "Bearer " + req.params.token
    },
    json: true
  };

  request.get(authOptions1, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      res.send(body);
    }
  });
});

router.get("/toptracks/:id/:token/:country", async (req, res) => {
  var request = require("request"); // "Request" library

  // your application requests authorization
  var authOptions1 = {
    url: `https://api.spotify.com/v1/artists/${req.params.id}/top-tracks?country=${req.params.country}`,
    headers: {
      Authorization: "Bearer " + req.params.token
    },
    json: true
  };

  request.get(authOptions1, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      res.send(body);

    }
  });
});
module.exports = router;
