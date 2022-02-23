import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AuthNav from "./AuthNav"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header-img" className="bg-blue-200" >
        <div className="bg-blue-200">
        <Navbar id="navbar" variant="dark" className="xl:h-20 bg-blue-200 ">
          <Navbar.Brand className="bg-blue-200">
            &nbsp;
          
            &nbsp;
            <Link to="/" className="no-underline">
             <h1 className="font-Carattere pl-4 text-white blur-md invert drop-shadow-xl md:filter-none font-extrabold pt-4 text-6xl ">Discover Numerology</h1>
            </Link>
            <div className="mt-4">
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-28 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-40 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-52 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-64 top-6 z-30" />
            </div>
            
          </Navbar.Brand>
          <Nav>
           <AuthNav />
          </Nav>
        </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;