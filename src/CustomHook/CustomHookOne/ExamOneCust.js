import React,{useState} from 'react'
import useCustom from './useCustom'

const ExamOneCust = () => {
    const [count, setCount] = useState(0)
    useCustom(count)
  return (
    <div>
        <h1>Custom Example One</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}   

export default ExamOneCust