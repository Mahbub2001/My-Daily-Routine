import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";
import Accordion from 'react-bootstrap/Accordion';
import Question from "../Questions/Question";

const Activities = ({setTime,timer}) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <h2 className="text-info fw-bold">My Daily Activity</h2><br />
      <h3 className="mb-5">Select Today's Activities</h3>
      <div  className="activities-container">
        {activities.map((activity) => (
          <Activity timer={timer} setTime={setTime} activities={activities} activity={activity} key={activity.id}></Activity>
        ))}
      </div>
      <Question></Question>
    </div>
  );
};

export default Activities;
