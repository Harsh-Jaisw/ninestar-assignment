import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ShowBiz() {
    const [data,setData]=useState([])
    useEffect(() => {
    //   axios
    //     .get(
    //       "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f72cb7c860624cf3a6e4910f0ff725a1"
    //     )
    //     .then((res) => setData(res.data))
    //     .catch((err) => console.log(err));
    }, []);
    return (
    <div>Business Update</div>
      );
}

export default ShowBiz