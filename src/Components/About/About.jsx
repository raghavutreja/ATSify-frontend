import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-1"></div>
        <div style={{height:"60vh",boxShadow:"0px 5px 20px grey",borderRadius:"30px",padding:"40px",fontSize:"20px" ,backgroundColor:"white",textAlign:"center",justifySelf:"center",display:"flex",alignItems:"center"}} className="col mb-5">
          ATS Resume Checker is an AI-powered resume analysis platform designed
          to help job seekers improve their resumes and increase their chances
          of passing Applicant Tracking Systems (ATS). <br /> <br />
          The platform compares a resume against a job description, calculates
          an ATS compatibility score, identifies matched and missing skills, and
          provides AI-generated feedback to improve resume quality. Users can
          also receive ATS-friendly resume improvements tailored to specific job
          requirements. <br /> <br />
          Built using React, Node.js, Express.js, and Groq AI, the
          system combines keyword analysis and AI-powered insights to help
          candidates optimize their resumes for modern recruitment processes.
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default About;
