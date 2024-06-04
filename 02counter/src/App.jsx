import { useState } from 'react'  // hooks are method so imoperted inside {}
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  //let counter = 15; // this will not reflect in UI , so we need Hooks
  let[counter,setCounter] = useState(15) // let to change , var name , fn or updated val , = inital val

  const increaseValue = () =>{
    if(counter >= 20){    // don't fo greather than 20
      counter = 20;
    } else{
      counter += 1;
    }
    setCounter(counter);
  }
  const decreaseValue =()=>{
    if(counter <=0){    // don't go less than 0
      counter = 0;
    } else{
      counter -= 1;
    }
    setCounter(counter);
  }
  return (
    <>
    <h1>Let's create a counter app</h1>
    <div>
      <p>Current value is : {counter}</p>
    </div>
    <button onClick={increaseValue}>Increase Value</button>
    <button onClick={decreaseValue} > Decrease Value</button>
    </>
  )
}

export default App
