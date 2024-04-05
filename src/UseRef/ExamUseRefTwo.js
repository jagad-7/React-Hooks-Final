import React, { useRef, useState } from 'react'

const ExamUseRefTwo = () => {
    const [first, setFirst] = useState('')
    const inputDom = useRef('')
  
    const focus = () => {
        inputDom.current.focus()
    }
  return (
    <div>
        <h1>ExamUseRefTwo</h1>
        <input type="text" name="text" id="text" onChange={(e)=>{setFirst(e.target.value)}} ref={inputDom}/>
        <h4>Typing Content : {first}</h4>
        <button onClick={focus}>Focus</button>
    </div>
  )
}

export default ExamUseRefTwo