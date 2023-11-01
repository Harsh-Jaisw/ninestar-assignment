import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./ShowBiz.css";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
function ShowBiz() {
    const [data,setData]=useState([])
    const [content, setContent] = useState({});
    const [loader,setLoader]=useState(true)
    const [open, setOpen] = useState(false);
    useEffect(() => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {setData(res.data)
          setLoader(false);})
        .catch((err) => {console.log(err)
          setLoader(false);});
    }, []);
    function handleShow(breakpoint) {
      setContent(breakpoint);
      setOpen(true);
    }
    return (
    <>  { loader &&<div className="flex justify-center items-center h-[90vh]"> <div className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div></div>} <Modal
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
            <Col xs={12} md={4}>
              <p style={{ fontSize: "12px", fontWeight: "400",textAlign:"justify",marginTop:"1rem" }}>
                {content.content}
              </p>
            </Col>
            
          </Row>
          <Row style={{marginTop:"1rem"}}>
          <Col xs={6} md={4}>
              <p style={{ fontSize: "12px", fontWeight: "400" }}>
                By-{content.author}
              </p>
            </Col>
            <Col xs={6} md={4}>
              <p style={{ fontSize: "12px", fontWeight: "400" }}>
                Published - {content.publishedAt?.split('T')[0]}
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
    <Row xs={1} md={4} className="g-2 w-[90%] mx-auto my-3">
      {data.articles?.map((item, i) => (
        <Col key={i}>
          <Card style={{ height: "32rem" }}>
            <Card.Img
              variant="top"
              src={item.urlToImage}
              alt="newsImg"
              style={{ height: "15rem" }}
            />
            <Card.Body>
              <Card.Title style={{fontSize:"14px"}}>{item.title}</Card.Title>
              <Card.Text style={{fontSize:"13px",fontWeight:"400",height:"8rem"}}>{item.description}</Card.Text>

              <Card.Link
                style={{ position: "absolute", bottom: "10px" }}
                onClick={() => handleShow(item)}
                className="cursor-pointer"
              >
                Read More
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row></>
      );
}

export default ShowBiz

 