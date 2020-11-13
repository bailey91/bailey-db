//const mysql = require("mysql");
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const { request, response } = require("express");
const { Client, Pool } = require("pg");
//const bodyParser = require('body-parser');

const port = 5000;

app.use(express.static("public"));
app.use(express.json());

//Start - TMDB API Requests

//Start - TMDB API Details

const api_key = "?api_key=057e7877a424022e9056bf05e0598fac";
const api_url = "https://api.themoviedb.org/3";

//End - TMDB API Details

//Start - Search Requests

app.get("/get_search/:query", async (request, response) => {
  const query = request.params.query;
  try {
    var searchUrl = api_url + "/search/multi" + api_key + "&query=" + query;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

//End - Search Requests

//Start - Home Page Requests

app.get("/get_movie_popular", async (request, response) => {
  try {
    var searchUrl = api_url + "/movie/popular" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_tv_popular", async (request, response) => {
  try {
    var searchUrl = api_url + "/tv/popular" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_person_popular", async (request, response) => {
  try {
    var searchUrl = api_url + "/person/popular" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

//End - Home Page Requests

//Start - Expand Requests - Movie Requests

app.get("/get_movie_details/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/movie/" + id + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_movie_images/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/movie/" + id + "/images" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_movie_credits/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/movie/" + id + "/credits" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_movie_externals/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/movie/" + id + "/external_ids" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_movie_videos/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/movie/" + id + "/videos" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_movie_reviews/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/movie/" + id + "/reviews" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_movie_similar/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/movie/" + id + "/similar" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

//End - Expand Requests -  Movie Requests

//Start - Expand Requests -  TV Requests

app.get("/get_tv_details/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/tv/" + id + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_tv_images/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/tv/" + id + "/images" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_tv_credits/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/tv/" + id + "/credits" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_tv_videos/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/tv/" + id + "/videos" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_tv_reviews/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/tv/" + id + "/reviews" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_tv_similar/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/tv/" + id + "/similar" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

//End - Expand Requests -  TV Requests

//Start - Expand Requests -  Person Requests

app.get("/get_person/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/person/" + id + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_person_credits/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/person/" + id + "/combined_credits" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_person_images/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/person/" + id + "/images" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

app.get("/get_person_externals/:id", async (request, response) => {
  const id = request.params.id;
  try {
    var searchUrl = api_url + "/person/" + id + "/external_ids" + api_key;
    const fetch_response = await fetch(searchUrl);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    response.json("Error Ecountered: " + err);
  }
});

//End - Expand Requests -  Person Requests

//End - TMDB API

//Start - Login

const pool = new Pool();

//Start - Connect to Postgres DB

const client = new Client({
  user: "postgres",
  password: "hanwell",
  host: "localhost",
  port: 5432,
  database: "moviedb",
  //ssl: true,
});

client.connect();

//End - Connect to Postgres DB

/*client
  .connect()
  .then(() => console.log("connected successfully"))
  .then(() => client.query("select * from users"))
  .then((result) => console.table(result.rows))
  .catch((e) => console.log(e));
//.finally(() => client.end());
*/

//Create User - need to put full errors on this on the login window to restrict certain charcters, length of usernames and passwords and password strength, possibly
//email varification and correct format

app.get("/create_user/:username/:password", async (request, response) => {
  client.connect();
  const username = request.params.username;
  const password = request.params.password;
  console.log(username);
  console.log(password);
  try {
    const result = await client.query(
      `INSERT INTO users (username, password) VALUES ('${username}','${password}')`
    );
    console.log(result.rows);
    response.send({ message: "Account Created", status: 200 });
  } catch (err) {
    console.log(`it went wrong ${err}`);
    response.send({ message: "Account Creation Failed", status: 500 });
  } finally {
    await client.end();
    console.log("disconcected");
  }
});

//Login User
//need to look into transactions or pooling as this will currently only do one query as it disconnects then doesnt want to connect again
app.get("/login/:username/:password", async (request, response) => {
  client.connect();
  const username = request.params.username;
  const password = request.params.password;
  console.log(username);
  console.log(password);
  try {
    const result = await client.query(
      `SELECT username FROM users WHERE username = '${username}' AND password = '${password}'`
    );
    console.log(result.rows);
    response.send({ message: "Logged in" });
  } catch (err) {
    console.log(`it went wrong ${err}`);
    response.send({ message: "Login Failed" });
  } finally {
    await client.end();
    console.log("disconcected");
  }
});

// Start - Watch List

app.get("/get_watch_list/:userId", async (request, response) => {
  //client.connect();
  const userId = request.params.userId;
  //console.log(userId);
  try {
    const result = await client.query(
      `SELECT movieid as id, concat('/',movieimage) as poster_path, moviename as name, mediatype as media_type FROM public."userWatchList" WHERE userid = '${userId}'`
    );
    response.send(result.rows);
  } catch (err) {
    //console.log(`it went wrong ${err}`);
    response.send({ message: `"Failed to Retrieve Watch List: ${err}"` });
  } finally {
    //await client.end();
    //console.log("disconcected");
  }
});

app.get(
  "/add_to_watch_list/:userId/:movieId/:movieImage/:movieName/:mediaType",
  async (request, response) => {
    //client.connect();
    const userId = request.params.userId;
    const movieId = request.params.movieId;
    const movieImage = request.params.movieImage;
    const movieName = request.params.movieName;
    const mediaType = request.params.mediaType;
    try {
      const result = await client.query(
        `INSERT INTO public."userWatchList"("userid","movieid","movieimage","moviename","mediatype") VALUES ('${userId}','${movieId}','${movieImage}','${movieName}','${mediaType}')`
      );
      //console.log(result.rows);
      response.send({ message: "added to watch list" });
    } catch (err) {
      //console.log(`it went wrong ${err}`);
      response.send({ message: "failed to add to watch list" });
    } finally {
      //await client.end();
      //console.log("disconcected");
    }
  }
);

app.get(
  "/remove_from_watch_list/:userId/:movieId",
  async (request, response) => {
    //client.connect();
    const userId = request.params.userId;
    const movieId = request.params.movieId;
    try {
      const result = await client.query(
        `DELETE FROM public."userWatchList" WHERE userid = '${userId}' AND movieid = '${movieId}'`
      );
      //console.log(result);
      if (result.rowCount > 0) {
        response.send({ message: "Removed from watch list" });
      } else {
        response.send({ message: "Failed to remove from watch list" });
      }
    } catch (err) {
      //console.log(`Error Encountered: ${err}`);
      response.send({ message: "Failed to remove from watch list" });
    } finally {
      //await client.end();
      //console.log("disconcected");
    }
  }
);

// End - Watch List

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// the client.connect is causing the error because it is trying to connect to a database it already is connected with, need to look at pooling or something as im
//currently try to disconnect unsusccessfully and re-connect
// `INSERT INTO public."userWatchList"("userId","movieId") VALUES ('${userId}','${movieId}')`
