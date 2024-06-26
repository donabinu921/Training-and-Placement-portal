import React, { useEffect, useState } from "react";
import "./applied.css";
import axios from "axios";

const AppliedDrives = () => {
  const [applied, setApplied] = useState([]);
  const [appliedDrives, setAppliedDrives] = useState([]);
  const [drivelist, setdrivelist] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/drives/drive/`)
      .then((response) => {
        setdrivelist(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios.patch(`${process.env.REACT_APP_API_URL}/drives/apply-drive/`, {
      st_id: window.localStorage.getItem("USER_ID")
    })
    .then((response) => {
      console.log(response.data);
      const appliedDriveIds = response.data.map(obj => obj.drive);
      setAppliedDrives(appliedDriveIds);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, []);

useEffect(() => {
  const filteredDrives = drivelist.filter(drive => appliedDrives.includes(drive.drive_id));
  setApplied(filteredDrives);
}, [appliedDrives, drivelist]);
  
 

  return (
    <div className="main">
      <div className="title-body">
        <h1>APPLIED DRIVES</h1>
      </div>
      <div className="applied-body">
        {applied.map((drive, index) => (
          <div key={index} className="drive-card">
            <h6>Position: {drive.position}</h6>
            <h6>Company Name: {drive.name}</h6>
            <div className="status"></div>
             <h6>Drive Date: {drive.drivedate}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedDrives;
