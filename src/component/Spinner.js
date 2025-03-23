import React from 'react'
import l from './loading.gif'
const Spinner=()=>{
    return (
      <div className='text-center'>
            <img className='my-3' src={l} alt="Loading" />
      </div>
    )
}

export default Spinner
