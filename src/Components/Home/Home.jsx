import React from "react";
import "./Home.css";
import HomeSmallCard from "../Cards/HomeSmallCard";
import HomeSmallCardRotate from "../Cards/HomeSmallCardRotate";
import HomeBigCard from "../Cards/HomeBigCard";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col hero">
          <p className="headtext" >AI Powered Smart Interview Platform</p>
          <p className="maintext " >
            Check ATS with <br /> <span className="greentext" > &nbsp; AI Intelligence &nbsp; </span>
          </p>
          <p className="smalltext" > Role based ATS Resume Scanning According to Job Description and provide Improvements and Weaknesses. </p>
          <NavLink to="/upload" className="btnscore" >Check Score</NavLink>
          <div className="cards" >
          <HomeSmallCard Step="STEP 1" CardData="Resume & JobDesc Uploading" CardLastPart="User Uploads his/her Resume and the Job Description He/She is applying for" />
          <HomeSmallCardRotate Step="STEP 2" CardData="Smart AI ATS Scoring" CardLastPart="AI itself Gives Results of Each Field and it provides Response after engaging with Professional Algorithms" />
          <HomeSmallCard Step="STEP 3" CardData="Weaknesses & Improvements" CardLastPart="You Can See and make Changes According to the Improvements Suggested for the Weaknesses in your Resume" />
         </div>
         <p className="maintextnew" style={{marginTop:"60px", fontSize:"30px",fontWeight:"400"}} >Advanced AI <span style={{color:"rgb(2,168,2)"}} >Capabilities</span></p>
          <div className="bigcards" >
            <HomeBigCard Image="/ai-ans.png" HeadText="AI Answer Evaluation" Text="Scores Skills,Projects,Education and Experience"/>
            <HomeBigCard Image="/resume.png" HeadText="Job Based Scanning" Text="Job Specific scanning based on the uploaded Job Description"/>
            <HomeBigCard Image="/history.png" HeadText="Weaknesses and Improvements" Text="Also Gives Weaknesses of your uploaded resume and Changes that can actually Improve Your resume"/>
            <HomeBigCard Image="/pdf.png" HeadText="AI Powered Analytics" Text="Tells the Percentage of getting Job "/>
          </div>
          </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Home;
 