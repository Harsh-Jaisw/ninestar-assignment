import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/nineStar-logo.png";
import { useNavigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import Offcanvas from "react-bootstrap/Offcanvas";
function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <nav className="Header shadow-md">
      <ul
        className="flex h-12 text-white flex items-center justify-between p-4"
        type="none"
      >
        <li className="cursor-pointer"  onClick={() => navigate("/")}>
          <img src={Logo} width={20} height={20} />
        </li>
            <li className="cursor-pointer NavItem" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer NavItem" onClick={() => navigate("/News")}>
              News
            </li>
            <li className="cursor-pointer NavItem" onClick={() => navigate("/ShowBiz")}>
              Show Biz
            </li>
    
          <li
            className="text-white text-xl font-black BreadCrumbs"
            onClick={() => setShow(!show)}
          >
            <HiMiniBars3 />
          </li>
        
      </ul>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>News App</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="flex flex-column gap-4">
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
                setShow(false);
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/News");
                setShow(false);
              }}
            >
              News
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/ShowBiz");
                setShow(false);
              }}
            >
              Show Biz
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Header;
