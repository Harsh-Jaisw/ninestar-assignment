import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
function Home() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=all&from=2023-09-31&to=2023-10-31&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleShow(breakpoint) {
    setContent(breakpoint);
    setOpen(true);
  }

  return (
    <>
      <Modal
        show={open}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: "18px" }}
            centered
          >
            {content.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <img src={content.urlToImage} />
              </Col>
              <Col xs={6} md={4}>
                <p style={{ fontSize: "12px", fontWeight: "400" }}>
                  {content.content}
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button onClick={() => window.open(content.url, "_blank")}>
            Read More
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="flex flex-col lg:flex-row md:flex-col w-[90%] justify-between mx-auto">
        <div className="w-[90%] mx-auto lg:w-[60%]  m-2 ">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
            <div className="p-6">
              <p className="block font-sans text-base antialiased  leading-relaxed text-justify">
                {data.articles && data.articles[0].description}
              </p>
            </div>
            <div className="relative h-[90%] lg:h-[380px] mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={data.articles && data.articles[0].urlToImage}
                alt="news-image"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[38%]  m-2 h-[97%] ">
          {" "}
          <section className=" main_container w-full">
            <div className="all_news-container">
              {data.articles?.slice(1, 4).map((item, i) => (
                <div
                  onClick={() => handleShow(item)}
                  key={i}
                  className="news_container cursor-pointer"
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                >
                  <div className="news_image_container min-w-[40%]  mx-auto  shrink-0 grow-0 basis-auto md:mb-0 ">
                    <img
                      src={item.urlToImage}
                      className="w-full h-full object-fill"
                      alt="news Image"
                    />
                  </div>

                  <div className=" news_detail_container mt-2 lg:ml-3  ">
                    <p className="text-[12px]" align={"justify"}>
                      {item.title}
                    </p>
                    <p className="text-[12px]">Published By - {item.author} </p>
                    <p className="text-[10px] text-indigo-800">
                      {" "}
                      {item.publishedAt?.split("T")[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <section className="my-5 p-4 mx-auto w-[90%]">
         
         <div className="grid gap-2 lg:grid-cols-4 ">
           {data.articles?.slice(4, 8).map((item, i) => (
             <div
               key={i}
               onClick={()=>handleShow(item)}
               className=" flex flex-column gap-2 items-center cursor-pointer"
               style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
             >
               <div className="news_image_container min-w-[250px] mx-auto  shrink-0 grow-0 basis-auto ">
                 <div
                   className=" w-full relative mb-6 overflow-hidden g bg-contain bg-no-repeat shadow-sm dark:shadow-black/20"
                 >
                   <img
                     src={item.urlToImage}
                     className="w-full h-full object-fill"
                     alt="news Image"
                   />
                 </div>
               </div>

               <div className=" news_detail_container">
                 <p className="text-[12px] p-2">
                   {item.description}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </section> 
    </>
  );
}

export default Home;

{
  
}
