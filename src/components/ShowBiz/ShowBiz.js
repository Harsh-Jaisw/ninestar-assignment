import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ShowBiz() {
    const [data,setData]=useState([])
    useEffect(() => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);
    return (
    <div>Business Update</div>
      );
}

export default ShowBiz