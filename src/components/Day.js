import React from "react";

const Day = ({ day }) => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return (
    <div className="Day Day__Current">
      <h3 className="Day__Name">{weekday[day.name]}</h3>
      {day.weather}
      <img
        src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
        className="Day__Picture"
        alt="Weather"
      />
      <div className="Day__Temps">
        <span>
          {day.max} <sup>o</sup>
        </span>
        <span>
          {day.min} <sup>o</sup>
        </span>
      </div>
    </div>
  );
};

export default Day;
