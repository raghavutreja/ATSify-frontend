import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Feedback() {
    const [rating,setRating]=useState(0);
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
              <div>
                <h4>Rate Your Experience</h4>

                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    name="Stars"
                    key={star}
                    onClick={() => setRating(star)}
                    style={{
                      cursor: "pointer",
                      fontSize: "35px",
                      color: star <= rating ? "#ffc107" : "#ddd",
                    }}
                  >
                    ★
                  </span>
                ))}

                <p name="Star Rating" >{rating}/5 Stars</p>
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
            </div>{" "}
            <br />
            <button type="submit" className="btnscore">
              Submit
            </button>{" "}
            <br />
          </form>
          <NavLink className="btnscore" to="/">
            Go Back
          </NavLink>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Feedback;
