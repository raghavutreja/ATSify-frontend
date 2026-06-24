import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // <div>
    //   <nav className="navbar bg-black bg-body-tertiary">
    //     <div className="arranging">
    //       <div className="container-fluid">
    //         <div className="row">
    //           <div className="col"></div>
    //           <div className="col-7" style={{backgroundColor:"red"}} >
    //             <a className="navbar-brand" href="/">
    //               <img
    //                 src="/logo.png"
    //                 height="24"
    //                 width="30"
    //                 className="d-inline-block align-text-top image"
    //                 alt=""
    //               />
    //               ATSify
    //             </a>
    //             <div className="extras">
    //               <NavLink to="/about">About</NavLink>|
    //               <NavLink to="/contact">Contact</NavLink>
    //             </div>
    //           </div>
    //           <div className="col"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div className="container-fluid">
      <div className="row pt-4 mb-5 pb-5 mt-2">
        <div className="col"></div>
        <div className="col-6 stylenav " >
          <a className="navbar-brand logo" href="/">
            <img
              src="/logo.png"
              height="24"
              width="30"
              className="d-inline-block align-text-top image"
              alt=""
            />
            ATSify
          </a>
          <div className="huh">
            <NavLink className="linkone" to="/about">About</NavLink>|
            <NavLink to="/contact" className="linktwo" >Contact</NavLink>
          </div>
        </div>
        <div className="col"> </div>
      </div>
    </div>
  );
}

export default Navbar;
