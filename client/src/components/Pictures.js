import React, { useEffect, useState } from "react";
import axios from "axios";

function Pictures() {
  const [data, setData] = useState({ pictures: [] });

  useEffect(() => {
    async function getDataFromServer() {
      const response = await axios("http://localhost:5500/api");
      const data = response.data.photos.photo;
      setData(data);
    }

    getDataFromServer();
    console.log(data);
    // Object.keys(data).map werkt soms wel
  }, []);

  return (
    <ul>
      {data.map((picture) => (
        <li>
          <img
            // https://www.flickr.com/services/api/misc.urls.html
            src={`https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_m.jpg`}
            alt={`${picture.title}`}
          ></img>
        </li>
      ))}
    </ul>
  );
}

export default Pictures;
