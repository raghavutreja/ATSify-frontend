import React, { useEffect, useState } from "react";
import "./Improvements.css";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

function Improvements() {
  const [resume, setResume] = useState("");
  const [desc, setDesc] = useState("");
  const [loading,setLoading]=useState(false);
  const [improvements, setImprovements] = useState([]);
  const location = useLocation();
  const { resumeData, Desc } = location.state || {};
  useEffect(() => {
    console.log("Resume:", resumeData);
    console.log("Desc:", Desc);

    if (resumeData && Desc) {
      console.log("Calling API...");
      call();
    }
  }, [resume, desc]);
  const call = async () => {
    try {
        setLoading(true);
      const response2 = await axios.post(
        `${import.meta.env.VITE_API_URL}/improvements`,
        { resumeData, Desc },
      );
      const parseData = JSON.parse(response2.data.result);
      console.log(parseData);
      setImprovements(parseData);
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false);
    }
  };

  if (loading) {
  return (
    <div className="container text-center mt-5">
      <div
        className="spinner-border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      <h3 className="mt-3 offhid">Generating Improvements...</h3>
    </div>
  );
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col stylingImprov ">
          {improvements.map((item, index) => {
            return (
              <div key={index} className="p-4 border rounded mb-3 ">
                <h4><u>Improvements {index + 1}</u></h4> <br />
                <div>
                  <p style={{color:"red"}} >
                    {" "}
                    <strong>Before</strong>
                  </p>
                  <p style={{color:"red"}} >{item.original}</p>
                </div>
                <div>
                  <p style={{color:"green"}} >
                    <strong>After</strong>
                  </p>
                  <p style={{color:"green"}} >{item.improved}</p>
                </div>
              </div>
            );
          })}
          <NavLink to="/feedback" style={{justifySelf:"center"}} className="btnscore" >Give FeedBack</NavLink>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Improvements;
