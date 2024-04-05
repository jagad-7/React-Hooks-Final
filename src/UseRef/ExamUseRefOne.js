import React, { useEffect, useRef, useState } from 'react'

const ExamUseRefOne = () => {
    const [content, setContent] = useState('')
    const renderCount = useRef(1)
    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })
  return (
    <div>
        <h1>ExamUseRefOne</h1>
        <input type="text" name="text" id="text" onChange={(e)=>{setContent(e.target.value)}} />
        <h4>Typing Content : {content}</h4>
        <h5>Component Render Count: {renderCount.current}</h5>
    </div>
  )
}

export default ExamUseRefOne