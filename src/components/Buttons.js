import React from 'react'

export default function 
(props) {
  return (
    <div className='row'>
        <div className='col-md-12 text-center' style={{marginTop:'30px'}}>
            <button className='btn btn-primary' onClick={props.login}>Login</button>
            <button className='btn btn-dark' onClick={props.logout}>Logout</button>
        </div>   
    </div>
  )
}
