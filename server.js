const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.static("website"));
server.use(bodyparser.json());

// TODO GET RECOMMENDATIONS

// TODO POST RECOMMENDATIONS

server.get("/restaurants", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(restaurantsArray);
});

server.listen(5656, () => {
  console.log("http://localhost:5656");
});

server.get("/date", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ date: new Date() });
});

server.get("/path", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ req: req.path });
});

server.delete("/restaurants/:id", (req, res) => {
  const id = req.path.split("/")[2] - 1;
  restaurantsArray = restaurantsArray.filter(x => x !== restaurantsArray[id]);
  res.setHeader("Content-Type", "application/json");
  res.send(restaurantsArray);
});

server.post("/restaurants", (req, res) => {
  console.log(req.body);
  let restaurant = {
    id: req.body.id,
    name: req.body.name,
    rating: req.body.rating
  };
  restaurantsArray.push(restaurant);
  res.send(restaurant);
});

let restaurantsArray = [
  {
    id: "LuLa",
    name: "LuLa am Markt",
    rating: "2"
  },
  {
    id: "Glück",
    name: "Auf der Suche nach dem verlorenen Glück",
    rating: "4"
  },
  {
    id: "Glück",
    name: "Auf der Suche nach dem verlorenen Glück",
    rating: "4"
  }
];
