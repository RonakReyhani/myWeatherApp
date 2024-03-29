import React from "react";
import "./card.css";
import optionsImage from "./options.svg";
import WeatherIcon from "./WeatherIcon";

export default ({
  date,
  icon,
  temperature,
  summary,
  apparentTemperature,
  currentCityName,
  onClick
}) => {
  return (
    <div className={`card is-${icon}`}>
      <div className="card-row">
        <div className="card-day">{date.format("dddd")}</div>
        <div className="card-day">{date.format("MMM Do")}</div>
      </div>
      <WeatherIcon icon={icon}/>
      <div className="card-row">
        <div className="card-temperature">
          {`${temperature}°`}
          <span className="small">/ {apparentTemperature}°</span>
        </div>
        <div className="card-weather">{summary}</div>
      </div>
      <div className="card-line" />
      <div className="card-row">
        <div className="card-city">{currentCityName}</div>
        <button className="card-options" onClick = {onClick}>
          <img src={optionsImage} width={32} alt="options" />
        </button>
      </div>
    </div>
  );
};