import React, { useRef, useState } from 'react'

export const HeightExample = () => {
  const [height, setHeight] = useState(0)
  const node = useRef(null)

  const handleClick = () => {
    console.log(node.current.getBoundingClientRect())
    setHeight(node.current.getBoundingClientRect().height)
  }

  return (
    <div className="height-example-wrapper">
      <h2>Height Example</h2>
      <button onClick={handleClick} ref={node} className="height-example height-example--1">
        Set height;<br/>Some<br/>more<br/>text
      </button>
      <div style={{ minHeight: height }} className="height-example height-example--2">
        I'm the same height
      </div>
    </div>
  )
}