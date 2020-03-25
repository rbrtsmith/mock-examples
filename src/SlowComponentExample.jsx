import React from 'react'

import { FakeSlowReactComponent } from './FakeSlowReactComponent'

export const SlowComponentExample = () => {
  return (
    <div>
      <h2>
        <span role="img" aria-label="tortoise">🐢🐢🐢</span>Slow Component example<span role="img" aria-label="tortoise">🐢🐢🐢</span>
      </h2>
      <FakeSlowReactComponent />
    </div>
  )
}
