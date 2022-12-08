import React, { useState } from "react";
import "./Activity.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Activity = ({ activity ,setTime,timer}) => {
  const { id, name, description, image, time, category } = activity;
  const [buttonText, setButtonText] = useState('Add To List');
  const [isActive, setIsActive] = useState(false);

  const handleCartClick = () =>{
    setButtonText('Added');
    setIsActive(current => !current);
    const getTime = {time};
    // console.log(getTime);
    if (timer) {
        setTime([...timer,getTime]);
    }
    else{
        setTime([getTime]);
    }
  }

  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="activity-main">
      <Card className="card border-0">
        <Card.Img variant="top" className="img-fluid image" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <b>Category</b> : {category}
          </Card.Text>
          <Card.Text>
            <b>Time Required</b> : {time}min
          </Card.Text>
          <div className="butons">
            <div>
              <Button style={{
          backgroundColor: isActive ? 'green' : '',
          color: isActive ? 'white' : '',
        }} onClick={handleCartClick} className="buttons px-5" variant="primary">
                {buttonText}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Activity;
