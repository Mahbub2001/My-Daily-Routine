import React, { useState } from "react";
import Activities from "../Activities/Activities";
import "./Home.css";
import Management from "../Management/Management";

const Home = () => {

    const [timer,setTime] = useState([]);
    // console.log(timer);

  return (
    <div className="container-home">
        <div className="container div-1">
            <Activities setTime={setTime} timer={timer}></Activities>
        </div>
        <div className="management-div">
            <Management timer={timer} setTime={setTime}></Management>
        </div>
    </div>
  );
};

export default Home;
