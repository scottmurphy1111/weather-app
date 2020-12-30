import React, { useRef } from 'react'

const Form = (params: any) => {

  const zipInput = useRef<HTMLInputElement>(null);

  const handleFocus = (e: any) => {
    e.target.value = '';
    params.setError({ text: '', status: 0 })
  }

  const handleChange = (e: any) => {
    e.target.value=e.target.value.replace(/[^\d]/,'');
  }

  return (
    <div className='row'>
      <div className='col-xs-12'>
        <div className="component-container">
          <h1>Weather Finder</h1>
          <p>Enter Zip Code to find out temp, condition and more</p>
          <form onSubmit={params.getWeather}>
            <input ref={zipInput} type="text" name="zip" placeholder="Zip Code..." maxLength={5} onFocus={(e: any) => handleFocus(e)} onChange={(e:any) => handleChange(e)} />
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
