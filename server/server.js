import express from "express";
import "dotenv/config";
import Flickr from "flickr-sdk";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5500;
const flickr = new Flickr(process.env.API_KEY);

// The default value
let searchQuery = "zoo";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api", async (req, res) => {
  const getData = async (searchQuery) => {
    await flickr.photos
      .search({ text: searchQuery })
      .then((response) => res.send(response.body))
      .catch((error) => console.log(error));
  };

  getData(searchQuery);
});

app.post("/api", async (req, res) => {
  const getData = async (searchQuery) => {
    await flickr.photos
      .search({ text: searchQuery })
      .then((response) => res.send(response.body))
      .catch((error) => console.log(error));
  };

  if (req.body.query !== "") {
    searchQuery = req.body.query;
    getData(searchQuery);
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
