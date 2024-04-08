import React,{useState} from 'react'
import useCustom from './useCustom'

const ExamTwoCust = () => {
    const [count, setCount] = useState(0)
    useCustom(count)
  return (
    <div>
        <h1>Custom Example Two</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}   

export default ExamTwoCust