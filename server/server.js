import express from "express";
import "dotenv/config";
import Flickr from "flickr-sdk";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5500;
const flickr = new Flickr(process.env.API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api", async (req, res) => {
  async function getData() {
    // await flickr.photos
    //   .getRecent()
    //   .then((response) => res.send(response.body))
    //   .catch((error) => console.log(error));

    await flickr.photos
      .search({ text: "monkey" })
      .then((response) => res.send(response.body))
      .catch((error) => console.log(error));
  }

  getData();
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
