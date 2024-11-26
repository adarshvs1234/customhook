    import React from 'react'
import { useCount } from '../CounterProvider'
    
    const Counter = () => {

        const {Number,increment,decrement} =useCount()
        
      return (
        <div>
          {Number}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      )
    }
    
    export default Counter
    