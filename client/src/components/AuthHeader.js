import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";

const AuthHeader = () => {
  return (
    <>
      <div id="header-img">
        <Navbar fluid_id="navbar" variant="dark" className="text-black xl:h-28 bg-blue-200 ">
          <Navbar.Brand>
            &nbsp;
       
            &nbsp;
            <Link to="/" className="no-underline">
             <h1 className="font-Carattere pl-4 text-black theme.extend.dropShadow font-extrabold pb-4 text-6xl">Discover Numerology</h1>
            </Link>
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-28 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-40 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-52 top-6 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-64 top-6 z-30" />
          </Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Link to="/Profiles" className="nav-link absolute mr-40 right-96 top-6 text-black">
                Profiles
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Profile" className="nav-link absolute mr-60 right-96 top-6 text-black">
                Profile
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/LifePaths" className="nav-link absolute top-6 mr-44  right-40 text-black">
                Life Paths
              </Link>
            </Nav.Item>
            <Nav.Item>
            
            </Nav.Item>
            <AuthNav />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default AuthHeader;