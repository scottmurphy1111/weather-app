import React from 'react'

const Weather = props => (
  <div>
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.zip && <p>Zip Code: {props.zip}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.wind && <p>Wind: {props.wind}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather
