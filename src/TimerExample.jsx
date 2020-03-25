import React, { useState } from 'react'

export const TimerExample = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  }

  return (
    <div className="height-example-wrapper">
      <h2>Timer Example</h2>
      <button onClick={handleClick}>
        Set Delayed Text
      </button>
      {isVisible && <div>Hello world!</div>}
    </div>
  )
}