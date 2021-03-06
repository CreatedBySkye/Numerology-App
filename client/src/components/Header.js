import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";

const Header = () => {
  return (
    <>
      <div id="header-img">
        <Navbar fluid_id="navbar" variant="dark" className="z-50 mb-2 pb-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-black xl:h-32 bg-blue-200 border-b-8 border-indigo-700">
          <Navbar.Brand>
            &nbsp;
       
            &nbsp;
            
            <Link to="/" className="no-underline">
             <h1 id="header-title" className="font-Carattere pl-8 text-black pt-2 theme.extend.dropShadow font-black pb-2 text-6xl">Discover Numerology</h1>
            </Link>
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-28 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-40 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-52 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-64 top-6 z-30" />
          </Navbar.Brand>
          <Nav>
        
            <AuthNav />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Header;