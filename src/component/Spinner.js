import React, { Component } from 'react'
import l from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
            <img className='my-3' src={l} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
