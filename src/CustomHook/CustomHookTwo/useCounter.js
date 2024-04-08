import {useState} from 'react'

const useCounter = (initialValue = 0) => {
    const [number, setNumber] = useState(initialValue)
    const increment = ()=>{
        setNumber(number + 1)
    }
    const decrement = () =>{
        setNumber(number - 1)
    }
    const reset = () =>{
        setNumber(initialValue)
    }
    return [number, increment, decrement, reset]
}

export default useCounter