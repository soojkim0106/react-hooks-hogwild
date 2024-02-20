import { useState } from "react";

const DisplayHog = ({ name, image, specialty, weight, greased }) => {
  const [displayDetails, setDisplayDetails] = useState(false);

  const toggleDetails = () => {
    setDisplayDetails(!displayDetails);
  };

  return (
    <div className="ui eight wide column">
      <p>Name: {name}</p>
      <br></br>
      <button onClick={toggleDetails}>Details</button>
      <br></br>
      {displayDetails ? (
        <>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight} lbs</p>
          <p>Greased: {greased ? "Yes" : "No"}</p>
          <p>Highest Medal: TBD </p>
        </>
      ) : null}

      <img src={image} alt={name} />
    </div>
  );
};

export default DisplayHog;
