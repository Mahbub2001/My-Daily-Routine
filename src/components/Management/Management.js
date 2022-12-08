import React, { useState } from "react";
import "./Managment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Management = ({ timer, setTime }) => {
  const previousItem = localStorage.getItem("bookmark");
  const previous = JSON.parse(previousItem);
  const [breakTime, setBreakTime] = useState(previous);

  let total = timer.reduce(function (tot, record) {
    return tot + parseInt(record.time);
  }, 0);

  let innerInt = 0;
  const handleClick = (event) => {
    const innerText = event.target.innerText;
    innerInt = parseInt(innerText.replace(/[^\d.]/g, ""));
    setBreakTime(innerInt);
    localStorage.setItem("bookmark", JSON.stringify([innerInt]));
  };
  const handleCompleteButton = () => {

    console.log(breakTime);
    toast("Congratulation !! You have done your work", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="mt-3 ms-3 cart mb-5">
      <div className="profile-section ">
        <div className="d-flex justify-content-center ">
          <img
            className="me-4 profile-image"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small/man-avatar-character-isolated-icon-free-vector.jpg"
            alt=""
          />
          <div className="mt-3">
            <h5>Zahid Hossen</h5>
            <p>Sidney,Australia</p>
          </div>
        </div>
        <div className="d-flex justify-content-between about mt-4">
          <div>
            <h3>
              75<small>kg</small>
            </h3>
            <p>Weight</p>
          </div>
          <div>
            <h3>6.5</h3>
            <p>Height </p>
          </div>
          <div>
            <h3>
              25<small>yrs</small>
            </h3>
            <p> Age</p>
          </div>
        </div>
        <div className=" mt-3">
          <h3 className="mt-4 mb-3">Add A Break</h3>
          <div className="time-table">
            <div>
              <button onClick={handleClick}>20m</button>
            </div>
            <div>
              <button onClick={handleClick}>30m</button>
            </div>
            <div>
              <button onClick={handleClick}>40m</button>
            </div>
            <div>
              <button onClick={handleClick}>50m</button>
            </div>
            <div>
              <button onClick={handleClick}>60m</button>
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <h4>Study Details</h4>
          <p className="fw-bold study">Study Time : {total} minute</p>
        </div>
        <div className="mt-4 ">
          <h4>Break Time</h4>
          <p className="fw-bold study">
            Break Time : <small className="tim">{breakTime}</small> minute
          </p>
        </div>
        <div className="d-flex justify-content-center complete-btn">
          <div>
            <button onClick={handleCompleteButton}>Activity Complete</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Management;
