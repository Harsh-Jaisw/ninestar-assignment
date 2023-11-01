import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/nineStar-logo.png";
import { useNavigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch } from "react-redux";
import { searchItem } from "../../store/search";
import Button from "react-bootstrap/Button";
function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleSearch() {
    dispatch(searchItem(search));
  }

  return (
    <nav className="Header shadow-md flex items-center ">
      <ul
        className="flex flex-1 h-12 text-white flex items-center gap-4 p-4"
        type="none"
      >
        <li className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} width={20} height={20} alt="logo" />
        </li>
        <li className="cursor-pointer NavItem" onClick={() => navigate("/")}>
          Home
        </li>
        <li
          className="cursor-pointer NavItem"
          onClick={() => navigate("/News")}
        >
          News
        </li>
        <li
          className="cursor-pointer NavItem"
          onClick={() => navigate("/ShowBiz")}
        >
          Show Biz
        </li>
      { window.location.pathname.split('/')[1] =="News" && <li className="cursor-pointer NavItem">
          <AiOutlineSearch
            style={{
              position: "relative",
              top: "25px",
              left: "5px",
              color: "black",
            }}
          />{" "}
          <input
            placeholder="Search"
            type="search"
            style={{ paddingLeft: "1.5rem", height:"2rem" , color: "black" }}
            onChange={(e) => setSearch(e.target.value)}
           
          />
           <Button className="mx-1" onClick={()=>handleSearch()}>Search</Button>
        </li>}
      </ul>
      <ul className="flex-3 justify-end mr-6">
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
         {  window.location.pathname.split('/')[1] =="News" && <li className="cursor-pointer">
              <AiOutlineSearch
                style={{
                  position: "relative",
                  top: "25px",
                  left: "5px",
                  color: "black",
                }}
              />{" "}
              <input
                placeholder="Search"
                type="search"
                style={{ paddingLeft: "1.5rem", height:"2rem" ,color: "black" }}
                onChange={(e) => setSearch(e.target.value)}
              
              />
              <Button className="mx-1"  onClick={()=>handleSearch()}>Search</Button>
            </li>
            }
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
