import React, { useEffect, useState } from "react";
import axios from "axios";

function Pictures() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await axios("http://localhost:5500/api");
      const data = response.data.photos.photo;
      setData(data);
    };

    getDataFromServer();
  }, [data]);

  return (
    <ul>
      {data.map((picture) => (
        <li>
          <img
            // https://www.flickr.com/services/api/misc.urls.html
            src={`https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_q.jpg`}
            alt={`${picture.title}`}
          ></img>
        </li>
      ))}
    </ul>
  );
}

export default Pictures;
