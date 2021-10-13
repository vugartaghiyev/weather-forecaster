import { useState, useEffect, useContext } from "react";
import Day from "./Day";
import { Context } from "../context/Context";

const Days = () => {
  const [day, setDay] = useState({
    name: "",
    weather: "",
    icon: "",
    min: "",
    max: "",
    city: "Baku",
  });

  const { cityName } = useContext(Context);

  const GetWeather = async () => {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8c06666a46f4b2ebfb1f31b1173c8810`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.cod !== "404")
          setDay({
            name: new Date().getDay(),
            weather: res.weather[0].main,
            min: Math.floor(res.main.temp_min - 272.15),
            max: Math.floor(res.main.temp_max - 272.15),
            icon: res.weather[0].icon,
            city: res.name,
          });
      });
  };

  useEffect(() => {
    console.log("worked");
    GetWeather();
  }, [cityName]);

  return (
    <div className="Days">
      <h2 className="City__Name">{day.city}</h2>
      <Day day={day} />
    </div>
  );
};

export default Days;
