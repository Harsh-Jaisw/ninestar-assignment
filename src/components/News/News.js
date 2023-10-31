import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
function News() {
    const [data,setData]=useState([])
  useEffect(() => {
    // axios
    //   .get(
    //     "https://newsapi.org/v2/everything?q=tesla&from=2023-09-30&sortBy=publishedAt&apiKey=f72cb7c860624cf3a6e4910f0ff725a1"
    //   )
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));
  }, []);
  return (
  <div>News</div>
    );
}

export default News;
