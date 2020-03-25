import React, { useState } from 'react'
import { v4 } from 'uuid'

export const RandomIdExample = () => {
  const [id, setId] = useState(null)

  const handleClick = () => {
    setId(`ID-${v4()}`)
  }

  return (
    <div>
      <h2>
        Random ID example
      </h2>
      <button onClick={handleClick}>Generate ID</button>
      {id && <div>{id}</div>}
    </div>
  )
}
