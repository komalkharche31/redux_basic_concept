import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament, incrementByAmount } from './redux/features/counterSlice';

function App() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter.value);
  
  return (
    <>
      <span>{count}</span>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={()=> dispatch(increament())}>Increment</button>      
      <button onClick={()=>dispatch(decreament())}>Decrement</button>  
      <button onClick={()=>dispatch(incrementByAmount(inputValue))}>Increment By {inputValue}</button>  
    </>
  )
}

export default App
