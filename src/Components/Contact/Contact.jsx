import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import "./Contact.css";
import "../Home/Home.css";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <form action="https://formspree.io/f/xpwrkvaj" method="POST">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                rows="10"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btnscore">
              Submit
            </button>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Contact;
