import React from 'react'

const Form = (params: any) => {

  const handleFocus = () => {
    console.log('test');
    params.setError({ text: '', status: 0 })
  }

  return (
    <div className='row'>
      <div className='col-xs-12'>
        <div className="component-container">
          <h1>Weather Finder</h1>
          <p>Enter Zip Code to find out temp, condition and more</p>
          <form onSubmit={params.getWeather}>
            <input type="text" name="zip" placeholder="Zip Code..." maxLength={5} onFocus={() => handleFocus()} />
            <button>Get Weather</button>
          </form>
          {
            params.error.status ? <p className="displayed-error">{params.error.text}</p> : null
          }
        </div>
      </div>
    </div>
  );
}

export default Form
