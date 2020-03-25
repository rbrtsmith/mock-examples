import React, { useEffect, useState } from 'react'

export const ScrollExample = () => {
  const [height, setHeight] = useState(0)

  const handleScroll = () => {
    setHeight(window.scrollY / 2);
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
  })

  return (
    <div>
      <h2>Scroll example</h2>
    <div style={{ minHeight: height }} className="scroll-example">
      I get taller as you scroll
    </div>
    </div>
  )
}
