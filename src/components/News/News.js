import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
function News() {
    const [data,setData]=useState([])
  useEffect(() => {
    // axios
    //   .get(
    //     "https://newsapi.org/v2/everything?q=tesla&from=2023-09-30&sortBy=publishedAt&apiKey="
    //   )
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));
  }, []);
  return (
  <div>News</div>
    );
}

export default News;
