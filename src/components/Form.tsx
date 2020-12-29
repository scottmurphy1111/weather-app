import React from 'react'

const Form = (params: any) => (
  <div className='row'>
    <div className='col-xs-12'>
      <div className="component-container">
        <h1>Weather Finder</h1>
        <p>Enter Zip Code to find out temp, condition and more</p>
        <form onSubmit={params.getWeather}>
          <input type="text" name="zip" placeholder="Zip Code..." />
          <button>Get Weather</button>
        </form>
      </div>
    </div>
  </div>
)

export default Form
