import React, { useState } from "react";
import "./UploadBoard.css";
import "../Home/Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function UploadBoard() {
    const [loading,setLoading]=useState(false);
    const [description,setDescription]=useState("");
    const [resume,setResume]=useState(null);
    const Navigatee=useNavigate();
    const handleAnalyze = async (e) => {
    e.preventDefault();
    if(!resume){
        alert("Enter a valid file");
        return
    }
    if(!description){
        alert("Enter the job description properly")
        return
    }
    const formdata=new FormData();
    formdata.append("resume",resume);
    formdata.append("JobDescription",description);
    try{
        setLoading(true)
        const response=await axios.post(`${import.meta.env.VITE_API_URL}/upload`,
            formdata,
        );
        Navigatee("/dashboard",{
        state:{
            resumeData:response.data.resumeData,
            Desc:response.data.Desc,
            score:response.data.score,
            matchedSkills:response.data.matchedSkills,
            unmatchedSkills:response.data.unmatchedSkills,
            aifeedback:response.data.aifeedback
        }
    })
    }catch (error){
        console.log(error);
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row mb-5 mt-2 pb-5 ">
        <div className="col-2"></div>
        <div className="col centerupload ">
          <form onSubmit={(e) => handleAnalyze(e)}>
            <div className="firstcenter">
              <input
                type="file"
                required
                name="Resume"
                id="imageupload"
                onChange={(e)=>setResume(e.target.files[0])}
                accept=".pdf"
              />
              <textarea
                name=""
                required
                id="text"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                cols="60"
                rows="12"
                placeholder="Attach Your Resume and Enter The Job Description For Which You Want to Apply Here"
              ></textarea>
            </div>
            <div className="uploadbutton">
              <button type="submit" className="btnscore">
                {" "}
                {!loading? "Analyse" : "Analysing..."}
                {" "}
              </button>
            </div>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default UploadBoard;
