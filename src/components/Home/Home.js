import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
function Home() {
    const [data,setData]=useState([])
    const apiKey = process.env.REACT_API_KEY
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines/sources?trending&apiKey=${apiKey}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
  <div>{JSON.stringify(data)}</div>
    );
}

export default Home