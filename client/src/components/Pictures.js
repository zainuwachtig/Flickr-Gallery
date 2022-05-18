import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Pictures() {
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        async function getDataFromServer() {
            const response = await axios('http://localhost:5500/api');
            const data = response.data.photos.photo;
            setData(data)
        }

        getDataFromServer()
        console.log(data)
        // Object.keys(data).map
    })

    return (
    <ul>
        {data.map(data => (
		    <li>
			    <img
				    src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_q.jpg`}
                    alt=""
				></img>
			</li>
		))}
    </ul>
  );
}

export default Pictures;