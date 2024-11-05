"use client"
import { useState } from "react"

const Counter = () => {
    const [count , setCount] = useState(0)
  return (
    <>
        <button onClick={()=> {setCount((prevCount)=>prevCount + 1)}}>clicked {count} times</button>
    </>
  )
}

export default Counter
