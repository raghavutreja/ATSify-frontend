import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="card mb-5 mt-5 whitec text-center">
        <div className="card-body radi" >
          <h5 className="card-title topline">
            <a className="navbar-brand linkallu" href="/">
              <img
                src="../../../public/logo.png"
                height="24"
                width="30"
                className="d-inline-block align-text-top image"
                alt=""
              />
              ATSify
            </a>
          </h5>
          <p className="card-text" style={{fontSize:"11px",width:"60%",justifySelf:"center"}} >
            ATSify helps job seekers optimize their resumes with AI-powered ATS
            analysis. Get instant ATS scores, skill gap insights, and
            personalized improvement suggestions. Built to help you stand out in
            today's competitive job market.
          </p>
          <p style={{fontSize:"9px"}} >© 2026 ATSify. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
