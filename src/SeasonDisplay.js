import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  // console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const textForSeason =
    season === "winter" ? "Burrr, it is chilly" : "Lets hit the beach!";

  return (
    <div>
      <h1>{textForSeason}</h1>
    </div>
  );
};

export default SeasonDisplay;
