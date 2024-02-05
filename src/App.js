import './App.css';
import SidebarItem from './SidebarItem';
import Slider from './Slider';
import { optionsData } from './Options';
import { useState } from 'react';

function App() {
  const [options, setOptions]=useState(optionsData);
  const[selected, setSelected]=useState(0);
  const selectedOption=options[selected];
  return (
    <div className='container'>
      <div className='img' style={getImageStyle(options)}></div>
     <Sidebar options={options} selected={selected} setSelected={setSelected}/>
      <SliderDiv selectedOption={selectedOption} handleSliderchange={handleSliderchange}/>
    </div>
  );

  function handleSliderchange({target}){
    setOptions(prevOptions=>{
      return prevOptions.map((option,index)=>{
        if(index!==selected) return option;

        return {...option, value:target.value}
      })
    })
  }
}

  function Sidebar({options,selected,  setSelected}){
    return (
      <div className='sidebar'>
      {options.map((option, index)=>{
        return(
          <SidebarItem key={option.name}
        name={option.name}
        active={index===selected}
        handleClick={()=>setSelected(index)}
        />
        )
      })}
    </div>
    )
  }

  function SliderDiv({selectedOption, handleSliderchange}){
    return(
      <Slider 
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      value={selectedOption.value}
      handleChange={handleSliderchange}
      unit={selectedOption.unit}
    />

    )
  }


  
  function getImageStyle(options){
    const filters=options.map(option=>{
      return `${option.property}(${option.value}${option.unit})`
    })
    return {filter: filters.join(' ')}
  }

export default App;
 