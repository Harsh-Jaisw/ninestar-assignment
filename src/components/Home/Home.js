import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Home.css";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
function Home() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState(true);
  const [show, setShow] = useState(false);
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
    setShow(true);
  }
  return (
    <>
      {" "}
      <Modal show={show} fullscreen={"md-down"} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{content.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <p>{content.content}</p> 
  <div className="flex justify-between"> <p> By- {content.author}</p>
   <p>Published At - {content.publishedAt.split('T')[0]}</p></div>
          </Modal.Body>
      </Modal>
      <Row xs={1} md={4} className="g-2">
        {data.articles?.map((item) => (
          <Col key={item.source.id}>
            <Card style={{ height: "32rem" }}>
              <Card.Img variant="top" src={item.urlToImage} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>

                <Card.Link
                  style={{ position: "absolute", bottom: "30px" }}
                  onClick={() => handleShow(item)}
                >
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
