import React from 'react';


function Slider({min, max, value, handleChange, unit}) {
  return (

    <div className='slider-container'>
        <div className='slider-value'>{value} {unit}</div>
        <input type='range' className='slider'
        min={min} 
        max={max}
        value={value}
        onChange={handleChange}
        />
    </div>
  )
}

export default Slider